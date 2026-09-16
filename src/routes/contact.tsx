import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — 1xBET India" },
      {
        name: "description",
        content:
          "Contact the 1xBET India support team. 24/7 live chat, WhatsApp +91 97023 08448, email and phone support for account, deposit and betting queries.",
      },
      { property: "og:title", content: "Contact Us — 1xBET India" },
      {
        property: "og:description",
        content: "24/7 customer support via live chat, WhatsApp and email at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.1xbetindia.live/contact" },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/contact" }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      <SEOPage
        title="Contact Us"
        description="Get in touch with the 1xBET India support team"
        content={`
Need help? Our customer support team is available 24 hours a day, 7 days a week.

Contact options:
- Live chat: available on every page of the website — fastest response
- WhatsApp: +91 97023 08448
- Phone: +91 97023 08448
- Email support: replies within 24 hours

What we can help with:
- Account registration and verification (KYC)
- Deposits, withdrawals and payment issues
- Bonus and promotion questions
- Betting rules and bet settlement queries
- Technical problems with the website or app
- Responsible gaming support and self-exclusion requests

For the quickest resolution, please have your account ID ready when contacting support.
        `}
      />
    </>
  ),
});
