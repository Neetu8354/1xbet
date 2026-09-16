import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/multi-live")({
  head: () => ({
    meta: [
      { title: "Multi-Live Betting — 1xBET India" },
      {
        name: "description",
        content:
          "Multi-live betting at 1xBET India. Bet on multiple live matches simultaneously with our multi-view feature.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/multi-live/" }],
  }),
  component: () => (
    <SEOPage
      title="Multi-Live"
      description="Bet on multiple live events at once"
      content={`
Multi-live betting at 1xBET India allows you to follow and bet on multiple matches simultaneously.

Features:
- Watch multiple live streams
- Place bets on several events at once
- Real-time odds for all matches
- Customisable multi-view layout

Never miss a moment with our multi-live feature.
      `}
    />
  ),
});
