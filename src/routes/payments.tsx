import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

export const Route = createFileRoute("/payments")({
  head: () => ({
    meta: [
      { title: "Payment Methods — Deposits & Withdrawals | 1xBET India" },
      {
        name: "description",
        content:
          "Deposit and withdrawal methods at 1xBET India. UPI, NetBanking, Paytm, PhonePe, Google Pay, cards and cryptocurrency. Fast payouts in INR.",
      },
      { property: "og:title", content: "Payment Methods — 1xBET India" },
      {
        property: "og:description",
        content: "UPI, NetBanking, e-wallets, cards and crypto payments at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.1xbetindia.live/payments" },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/payments" }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Payments", url: "/payments" },
        ]}
      />
      <SEOPage
        title="Payment Methods"
        description="Secure deposits and fast withdrawals in Indian Rupees"
        content={`
1xBET India supports all popular Indian payment methods, with transactions processed in INR.

Deposit methods:
- UPI (Google Pay, PhonePe, Paytm, BHIM)
- Net Banking (all major Indian banks)
- Visa and Mastercard
- E-wallets (Paytm Wallet, PhonePe Wallet)
- Cryptocurrency (Bitcoin, Ethereum, USDT, Litecoin)
- Bank transfer (IMPS, NEFT)

Withdrawal methods:
- UPI and e-wallets: processed within 15 minutes to 24 hours
- Bank transfer: 1-3 business days
- Cryptocurrency: usually within 1 hour

Limits:
- Minimum deposit: ₹100
- Minimum withdrawal: ₹300
- No fees charged by 1xBET on deposits or withdrawals

All transactions are protected by SSL encryption. Withdrawals may require account verification (KYC) for security purposes.
        `}
      />
    </>
  ),
});
