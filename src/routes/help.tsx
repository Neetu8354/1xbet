import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

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
    <SEOPage
      title="Help Centre"
      description="24/7 customer support and self-help guides for 1xBET India"
      content={`
Welcome to the 1xBET India Help Centre. Our support team is available 24 hours a day, 7 days a week to assist you with any questions or issues.

How to get support:
- Live chat: available directly on the website, 24/7
- WhatsApp: +91 97023 08448 — the fastest way to reach us
- Email support: replies within 24 hours
- Phone support: +91 97023 08448

Popular help topics:
- Account registration and verification
- Deposits via UPI, Paytm, PhonePe and NetBanking
- Withdrawal times and limits
- Welcome bonus terms and wagering requirements
- How to place a bet and use the bet slip
- Cash out and live betting rules
- Account security and password recovery

Responsible gaming:
If you feel your gambling is becoming a problem, visit our Responsible Gaming page for deposit limits, self-exclusion tools and support resources. You must be 18 or older to use this platform.
      `}
    />
  ),
});
