import Stripe from "stripe";
import { NextResponse } from "next/server";

const PRICE_IDS: Record<string, string> = {
  "quick-start": "price_1TSP7rDhFxjBG1AwneN2pnMB",
  intensive:     "price_1TSPA2DhFxjBG1AwjOFh1JQu",
  upgrade:       "price_1TSPC2DhFxjBG1AwVX43WELi",
};

export async function POST(req: Request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const { product, sessionDate, sessionDisplay, sessionTime } = await req.json();

  const priceId = PRICE_IDS[product];
  if (!priceId) {
    return NextResponse.json({ error: "Invalid product" }, { status: 400 });
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    mode: "payment",
    success_url: `${baseUrl}/thank-you?product=${encodeURIComponent(product)}&session=${encodeURIComponent(sessionDisplay)}&time=${encodeURIComponent(sessionTime)}`,
    cancel_url: `${baseUrl}/${product === "quick-start" ? "quick-start" : "intensive"}`,
    metadata: { product, sessionDate, sessionDisplay, sessionTime },
  });

  return NextResponse.json({ url: session.url });
}
