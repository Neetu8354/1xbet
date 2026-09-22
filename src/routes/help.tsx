import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help Centre & Support — 1xBET India" },
      {
        name: "description",
        content:
          "Get help with your 1xBET India account. 24/7 support via live chat, WhatsApp and email. Guides on deposits, withdrawals, verification and betting rules.",
      },
      { property: "og:title", content: "Help Centre & Support — 1xBET India" },
      {
        property: "og:description",
        content: "24/7 customer support and help guides for 1xBET India players.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.1xbetindia.live/help" },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/help" }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Help Centre", url: "/help" },
        ]}
      />
      <SEOPage
        title="Help Centre"
        description="24/7 customer support and self-help guides for 1xBET India"
        sections={[
          {
            heading: "How to get support",
            body: (
              <p>
                Our team is available 24/7. Live chat runs directly on the website,{" "}
                <a
                  href="https://wa.link/ultra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand underline"
                >
                  WhatsApp
                </a>{" "}
                is the fastest way to reach us, and email queries are answered within 24 hours. See
                the{" "}
                <a href="/contact" className="text-brand underline">
                  Contact
                </a>{" "}
                page for details.
              </p>
            ),
          },
          {
            heading: "Popular help topics",
            body: (
              <>
                <p>
                  Account registration and KYC verification —{" "}
                  <a href="/registration" className="text-brand underline">
                    how to register
                  </a>
                  . Deposits via UPI, Paytm, PhonePe and NetBanking — see{" "}
                  <a href="/payments" className="text-brand underline">
                    payment methods
                  </a>
                  . Withdrawal times, limits and first-withdrawal verification. Welcome bonus terms
                  and wagering — see{" "}
                  <a href="/promotions" className="text-brand underline">
                    promotions
                  </a>
                  . How to place a bet, use the bet slip, and cash out — try{" "}
                  <a href="/live" className="text-brand underline">
                    live betting
                  </a>{" "}
                  rules.
                </p>
              </>
            ),
          },
          {
            heading: "Frequently asked questions",
            body: (
              <p>
                For instant answers on minimum deposits, withdrawal times, bonus terms and the{" "}
                <a href="/app" className="text-brand underline">
                  mobile app
                </a>
                , visit our{" "}
                <a href="/faq" className="text-brand underline">
                  FAQ page
                </a>
                .
              </p>
            ),
          },
          {
            heading: "Responsible gaming",
            body: (
              <p>
                If you feel your gambling is becoming a problem, visit our{" "}
                <a href="/responsible-gaming" className="text-brand underline">
                  Responsible Gaming
                </a>{" "}
                page for deposit limits, self-exclusion tools and support resources. You must be 18
                or older to use this platform.
              </p>
            ),
          },
        ]}
      />
    </>
  ),
});
