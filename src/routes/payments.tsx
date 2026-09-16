import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

export const Route = createFileRoute("/payments")({
  head: () => ({
    meta: [
      { title: "Payment Methods — UPI, Paytm & Fast Withdrawals | 1xBET India" },
      {
        name: "description",
        content:
          "Deposit and withdrawal methods at 1xBET India. UPI, NetBanking, Paytm, PhonePe, Google Pay, cards and crypto. Min deposit ₹100, fast payouts in INR.",
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
        sections={[
          {
            heading: "Deposit methods",
            body: (
              <p>
                Fund your 1xBET India account instantly using UPI (Google Pay, PhonePe, Paytm,
                BHIM), NetBanking with all major Indian banks, Visa and Mastercard, e-wallets,
                cryptocurrency (Bitcoin, Ethereum, USDT, Litecoin) and bank transfer via IMPS/NEFT.
                The minimum deposit is ₹100 and we charge no deposit fees.
              </p>
            ),
          },
          {
            heading: "Withdrawal methods and times",
            body: (
              <p>
                Withdraw to UPI and e-wallets — typically processed within 15 minutes to 24 hours —
                bank transfer (1–3 business days) or crypto (usually under an hour). The minimum
                withdrawal is ₹300. Withdrawals are sent back to the method used for deposit where
                possible.
              </p>
            ),
          },
          {
            heading: "Account verification (KYC)",
            body: (
              <p>
                For your security, first withdrawals may require identity verification — a photo ID
                and proof of address. Verification usually completes within 24 hours and only needs
                to be done once. If you need help, our{" "}
                <a href="/help" className="text-brand underline">
                  Help Centre
                </a>{" "}
                and 24/7{" "}
                <a href="/contact" className="text-brand underline">
                  support
                </a>{" "}
                team can assist.
              </p>
            ),
          },
          {
            heading: "Security",
            body: (
              <p>
                All transactions are protected by SSL encryption and processed through licensed
                payment gateways. Your balance is held in INR — no currency conversion fees for
                Indian players. See our{" "}
                <a href="/privacy" className="text-brand underline">
                  Privacy Policy
                </a>{" "}
                for how your data is handled.
              </p>
            ),
          },
        ]}
      />
    </>
  ),
});
