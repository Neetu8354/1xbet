import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/esports")({
  head: () => ({
    meta: [
      { title: "Esports Betting — 1xBET India" },
      {
        name: "description",
        content:
          "Bet on esports at 1xBET India. CS2, Dota 2, League of Legends, Valorant and more. Live odds on all major esports tournaments.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/esports" }],
  }),
  component: () => (
    <SEOPage
      title="Esports Betting"
      description="Bet on esports tournaments at 1xBET India"
      content={`
1xBET India offers comprehensive esports betting on all major competitive gaming titles.

Esports covered at 1xBET India:
- Counter-Strike 2 (CS2)
- Dota 2 and League of Legends
- Valorant and Overwatch
- PUBG and mobile esports
- Major international tournaments

Get the best odds on esports matches and tournaments.
      `}
    />
  ),
});
