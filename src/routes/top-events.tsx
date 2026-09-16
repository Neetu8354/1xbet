import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/top-events")({
  head: () => ({
    meta: [
      { title: "Top Events — 1xBET India" },
      {
        name: "description",
        content:
          "Bet on top sporting events at 1xBET India. Featured matches, tournaments and championships from around the world.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/top-events/" }],
  }),
  component: () => (
    <SEOPage
      title="Top Events"
      description="Featured sporting events and tournaments at 1xBET India"
      content={`
Don't miss the biggest sporting events at 1xBET India. We feature all the top matches and tournaments.

Current top events:
- IPL cricket matches
- Premier League football
- Champions League fixtures
- Grand Slam tennis
- Major esports tournaments

Stay updated with the biggest events in sport.
      `}
    />
  ),
});
