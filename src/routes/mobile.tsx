import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/mobile")({
  head: () => ({
    meta: [
      { title: "Mobile App — 1xBET India" },
      {
        name: "description",
        content:
          "Download the 1xBET India mobile app for iOS and Android. Bet on sports and play casino games on the go.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/mobile" }],
  }),
  component: () => (
    <SEOPage
      title="Mobile App"
      description="Download the 1xBET India mobile app"
      content={`
Take your betting anywhere with the 1xBET India mobile app.

App features:
- Live betting on all sports
- Casino games on mobile
- Push notifications for matches
- Fast deposits and withdrawals
- Exclusive app-only bonuses

Download for iOS and Android devices.
      `}
    />
  ),
});
