import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/casino")({
  head: () => ({
    meta: [
      { title: "Casino Games — 1xBET India" },
      {
        name: "description",
        content:
          "Play casino games online at 1xBET India. Slots, roulette, blackjack, poker and live dealer games. Enjoy exclusive bonuses and jackpots.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/casino/" }],
  }),
  component: () => (
    <SEOPage
      title="Casino"
      description="Play online casino games at 1xBET India"
      content={`
Welcome to the 1xBET India casino. We offer a wide selection of casino games including slots, table games, and live dealer experiences.

Popular casino games at 1xBET India:
- Slot machines with progressive jackpots
- Roulette, blackjack and baccarat
- Poker variants and video poker
- Live casino with real dealers
- Exclusive 1xGames titles

Enjoy generous welcome bonuses and regular promotions on our casino games.
      `}
    />
  ),
});
