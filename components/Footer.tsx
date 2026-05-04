import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">⚡</span>
              <span className="font-bold text-white">
                Breakthrough
                <span className="text-brand-400">Vibe</span> Coding
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              From stuck to shipped in 2 hours. Master it in 8.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold mb-3">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/quick-start"
                  className="hover:text-brand-400 transition-colors"
                >
                  Quick Start — $39.99
                </Link>
              </li>
              <li>
                <Link
                  href="/intensive"
                  className="hover:text-brand-400 transition-colors"
                >
                  Intensive — $67
                </Link>
              </li>
              <li>
                <Link
                  href="/intensive#upgrade"
                  className="hover:text-brand-400 transition-colors"
                >
                  Upgrade — $28
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:support@breakthrough-vibe-coding.com"
                  className="hover:text-brand-400 transition-colors"
                >
                  support@breakthrough-vibe-coding.com
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-brand-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-brand-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-8 pt-8 text-center text-sm">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} Breakthrough Vibe Coding. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
