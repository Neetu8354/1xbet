import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/statistics")({
  head: () => ({
    meta: [
      { title: "Statistics — 1xBET India" },
      {
        name: "description",
        content:
          "Sports statistics and analytics at 1xBET India. Team stats, player performance and match data.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/statistics" }],
  }),
  component: () => (
    <SEOPage
      title="Statistics"
      description="Sports statistics and match analytics"
      content={`
Access comprehensive sports statistics at 1xBET India to make informed betting decisions.

Available statistics:
- Team form and head-to-head records
- Player performance data
- League standings and tables
- Historical match results
- Betting trends and analytics

Use data to inform your betting strategy.
      `}
    />
  ),
});
