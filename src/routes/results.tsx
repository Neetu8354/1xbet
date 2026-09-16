import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results — 1xBET India" },
      {
        name: "description",
        content:
          "Check match results and scores at 1xBET India. Latest results from all major sporting events.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/results" }],
  }),
  component: () => (
    <SEOPage
      title="Results"
      description="Latest match results and scores"
      content={`
Stay updated with the latest match results at 1xBET India.

We provide results for:
- All major football leagues
- Cricket matches and tournaments
- Tennis Grand Slams and ATP/WTA events
- Basketball and other sports
- Esports competitions

Check recent scores and match outcomes.
      `}
    />
  ),
});
