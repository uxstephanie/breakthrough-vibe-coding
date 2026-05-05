import Stripe from "stripe";
import { NextResponse } from "next/server";

const PRODUCTS: Record<string, { name: string; amountCents: number }> = {
  "quick-start": { name: "Quick Start Bootcamp",  amountCents: 3999 },
  intensive:     { name: "Intensive Workshop",     amountCents: 6700 },
  upgrade:       { name: "Intensive Upgrade",      amountCents: 2800 },
};

export async function POST(req: Request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const { product, sessionDate, sessionDisplay, sessionTime } = await req.json();

  const productConfig = PRODUCTS[product];
  if (!productConfig) {
    return NextResponse.json({ error: "Invalid product" }, { status: 400 });
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: productConfig.amountCents,
            product_data: {
              name: productConfig.name,
              description: `${sessionDisplay} · ${sessionTime}`,
            },
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}/thank-you?product=${encodeURIComponent(product)}&session=${encodeURIComponent(sessionDisplay)}&time=${encodeURIComponent(sessionTime)}`,
      cancel_url: `${baseUrl}/${product === "quick-start" ? "quick-start" : "intensive"}`,
      metadata: { product, sessionDate, sessionDisplay, sessionTime },
    });
    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Stripe error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
