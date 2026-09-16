import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/live")({
  head: () => ({
    meta: [
      { title: "Live Betting — 1xBET India" },
      {
        name: "description",
        content:
          "Live in-play betting at 1xBET India. Bet on live cricket, football, tennis and more with real-time odds and live streaming.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/live" }],
  }),
  component: () => (
    <SEOPage
      title="Live Betting"
      description="Bet on live matches in real-time at 1xBET India"
      content={`
Experience the thrill of live in-play betting at 1xBET India. Our live betting section offers real-time odds on cricket, football, tennis, basketball and more.

Features of live betting:
- Real-time odds updated every second
- Live streaming of selected events
- Cash out feature on live bets
- Wide range of in-play markets
- Fast bet placement

Never miss a moment of the action with 1xBET India live betting.
      `}
    />
  ),
});
