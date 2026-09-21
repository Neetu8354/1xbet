import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Tennis Betting", url: "/tennis" },
  { name: "Tennis Results", url: "/tennis/results" },
];

export const Route = createFileRoute("/tennis_/results")({
  head: () => ({
    meta: [
      { title: "Tennis Results | ATP, WTA & Grand Slam Scores | 1xBET India" },
      {
        name: "description",
        content:
          "Latest tennis results at 1xBET India. ATP, WTA and Grand Slam match scores, set results and tournament outcomes for tennis betting.",
      },
      { property: "og:title", content: "Tennis Results | 1xBET India" },
      {
        property: "og:description",
        content: "Recent ATP, WTA and Grand Slam match results and tournament scores.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/tennis/results` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/tennis/results` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Tennis Results"
        description="Recent match scores and tournament results across ATP, WTA and Grand Slam events"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Latest tennis results",
            body: (
              <p>
                Track finished matches across the ATP and WTA tours, Grand Slams and Challenger
                events — set scores, match outcomes and tournament progression. Results update as
                matches conclude, helping you check form before placing your next bet.
              </p>
            ),
          },
          {
            heading: "Using results for tennis betting",
            body: (
              <p>
                Recent results are essential for tennis betting: head-to-head records — especially
                by surface — current win streaks and retirement history all inform how a match might
                play out. Pair results with the{" "}
                <a href="/tennis/schedule" className="text-brand underline">
                  tennis schedule
                </a>{" "}
                to find upcoming fixtures, then bet in play via{" "}
                <a href="/live" className="text-brand underline">
                  live betting
                </a>
                . For all-sports scoreboards see{" "}
                <a href="/results" className="text-brand underline">
                  results
                </a>{" "}
                and{" "}
                <a href="/statistics" className="text-brand underline">
                  statistics
                </a>
                .
              </p>
            ),
          },
          {
            heading: "Bet on tennis at 1xBET India",
            body: (
              <p>
                Browse markets on the{" "}
                <a href="/tennis" className="text-brand underline">
                  tennis betting hub
                </a>
                ,{" "}
                <a href="/tennis/atp" className="text-brand underline">
                  ATP
                </a>{" "}
                and{" "}
                <a href="/tennis/grand-slams" className="text-brand underline">
                  Grand Slam
                </a>{" "}
                pages. Players must be 18+ — see{" "}
                <a href="/responsible-gaming" className="text-brand underline">
                  Responsible Gaming
                </a>
                .
              </p>
            ),
          },
        ]}
      />
    </>
  ),
});
