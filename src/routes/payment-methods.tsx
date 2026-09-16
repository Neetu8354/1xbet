import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/payment-methods")({
  head: () => ({
    meta: [
      { title: "Payment Methods — 1xBET India" },
      {
        name: "description",
        content:
          "Payment methods at 1xBET India. UPI, NetBanking, cards, e-wallets and cryptocurrency deposits and withdrawals.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/payments" }],
  }),
  component: () => (
    <SEOPage
      title="Payment Methods"
      description="Deposit and withdrawal options at 1xBET India"
      content={`
1xBET India offers a wide range of secure payment methods for Indian players.

Available payment methods:
- UPI (Unified Payments Interface)
- Net Banking (all major Indian banks)
- Credit and debit cards (Visa, Mastercard)
- E-wallets (Paytm, PhonePe, Google Pay)
- Cryptocurrency (Bitcoin, Ethereum, USDT)
- Bank transfers

All transactions are processed securely with encryption. Deposits are typically instant, and withdrawals are processed within 24-48 hours.

Minimum deposit: ₹100
Maximum withdrawal: varies by method
      `}
    />
  ),
});
