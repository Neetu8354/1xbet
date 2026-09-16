import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/1xgames")({
  head: () => ({
    meta: [
      { title: "1xGames — 1xBET India" },
      {
        name: "description",
        content:
          "Play 1xGames at 1xBET India. Exclusive instant games, crash games, dice and more. Fast-paced entertainment with big wins.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/1xgames/" }],
  }),
  component: () => (
    <SEOPage
      title="1xGames"
      description="Exclusive instant games at 1xBET India"
      content={`
Discover the exclusive 1xGames collection at 1xBET India. These fast-paced instant games offer quick wins and exciting gameplay.

Popular 1xGames include:
- Crash and crash point
- Dice games
- Spin and win
- Gems Odyssey
- Burning Hot

1xGames are perfect for quick gaming sessions with instant results.
      `}
    />
  ),
});
