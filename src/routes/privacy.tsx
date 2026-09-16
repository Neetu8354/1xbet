import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — 1xBET India" },
      {
        name: "description",
        content:
          "Privacy policy for 1xBET India. Learn how we collect, use and protect your personal information.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/privacy/" }],
  }),
  component: () => (
    <SEOPage
      title="Privacy Policy"
      description="How we protect your personal information"
      content={`
1xBET India Privacy Policy

We are committed to protecting your privacy and personal information.

Information we collect:
- Account registration details
- Payment and transaction information
- Device and usage data
- Cookies and tracking data

How we use your information:
- To provide and improve our services
- To process transactions
- To communicate with you
- To comply with legal obligations

Data protection:
- We use industry-standard encryption
- Your data is stored securely
- We never sell your personal information

For privacy-related questions, contact our support team.
      `}
    />
  ),
});
