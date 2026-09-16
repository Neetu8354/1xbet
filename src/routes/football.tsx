import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/football")({
  head: () => ({
    meta: [
      { title: "Football Betting — 1xBET India" },
      {
        name: "description",
        content:
          "Football betting at 1xBET India. Bet on Premier League, Champions League, ISL and international football. Best odds and live betting.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/football" }],
  }),
  component: () => (
    <SEOPage
      title="Football Betting"
      description="Bet on football matches at 1xBET India"
      content={`
1xBET India offers comprehensive football betting coverage from around the world. From the English Premier League to the Indian Super League, we have every match covered.

Football betting markets include:
- Match winner and correct score
- Over/under goals
- Both teams to score
- Half-time/full-time results
- Player specials and props

Enjoy live betting on all major football competitions with competitive odds.
      `}
    />
  ),
});
