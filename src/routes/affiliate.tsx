import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/affiliate")({
  head: () => ({
    meta: [
      { title: "Affiliate Program — 1xBET India" },
      {
        name: "description",
        content:
          "Join the 1xBET India affiliate program. Earn commissions by promoting our sports betting and casino platform.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/affiliate" }],
  }),
  component: () => (
    <SEOPage
      title="Affiliate Program"
      description="Earn commissions with 1xBET India"
      content={`
Join the 1xBET India affiliate program and start earning commissions by promoting our platform.

Affiliate benefits:
- Competitive commission rates
- Real-time tracking and reporting
- Multiple promotional materials
- Dedicated affiliate support
- Timely payments

Contact us to learn more about becoming a 1xBET India affiliate partner.
      `}
    />
  ),
});
