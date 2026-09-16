import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/live-casino")({
  head: () => ({
    meta: [
      { title: "Live Casino — 1xBET India" },
      {
        name: "description",
        content:
          "Play live casino games at 1xBET India. Real dealers, live blackjack, roulette, baccarat and poker. HD streaming and interactive tables.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/live-casino/" }],
  }),
  component: () => (
    <SEOPage
      title="Live Casino"
      description="Live dealer casino games at 1xBET India"
      content={`
Experience the excitement of a real casino from home with 1xBET India live casino. Play with professional dealers in real-time.

Live casino games available:
- Live blackjack with real dealers
- Live roulette tables
- Live baccarat and poker
- Game shows and wheel games
- Interactive HD streaming

Join our live casino tables and enjoy an authentic gaming experience.
      `}
    />
  ),
});
