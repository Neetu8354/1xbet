import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Contact Us — 1xBET India" },
      {
        name: "description",
        content:
          "Contact 1xBET India support team. Get help with your account, deposits, withdrawals and betting queries.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/contacts/" }],
  }),
  component: () => (
    <SEOPage
      title="Contact Us"
      description="Get in touch with 1xBET India support"
      content={`
Need help? Our 24/7 customer support team is here to assist you.

Contact options:
- Live chat on our website
- Email support
- Phone support: +91 97023 08448
- WhatsApp support

We typically respond to all queries within 24 hours.
      `}
    />
  ),
});
