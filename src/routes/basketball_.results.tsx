import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Basketball Betting", url: "/basketball" },
  { name: "Basketball Results", url: "/basketball/results" },
];

export const Route = createFileRoute("/basketball_/results")({
  head: () => ({
    meta: [
      { title: "Basketball Results | NBA & EuroLeague Scores | 1xBET India" },
      {
        name: "description",
        content:
          "Latest basketball results at 1xBET India. NBA, EuroLeague and international scores, standings and head-to-head records for basketball betting.",
      },
      { property: "og:title", content: "Basketball Results | 1xBET India" },
      {
        property: "og:description",
        content: "Recent NBA, EuroLeague and international basketball scores and standings.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/basketball/results` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/basketball/results` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Basketball Results"
        description="Recent scores and standings across NBA, EuroLeague and international basketball"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Latest basketball results",
            body: (
              <p>
                Track finished games across the NBA, EuroLeague and international competitions —
                final scores, quarter breakdowns, standings and streaks. Results update as games
                conclude, helping you check form before placing your next bet.
              </p>
            ),
          },
          {
            heading: "Using results for basketball betting",
            body: (
              <p>
                Recent results feed directly into basketball betting: scoring trends, home/away
                splits and back-to-back performance all shape upcoming lines. Pair results with the{" "}
                <a href="/basketball/schedule" className="text-brand underline">
                  basketball schedule
                </a>{" "}
                to find upcoming games, then compare prices on{" "}
                <a href="/basketball/odds" className="text-brand underline">
                  odds
                </a>{" "}
                or in{" "}
                <a href="/basketball/live" className="text-brand underline">
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
            heading: "Bet on basketball at 1xBET India",
            body: (
              <p>
                Browse markets on the{" "}
                <a href="/basketball" className="text-brand underline">
                  basketball betting hub
                </a>
                ,{" "}
                <a href="/basketball/nba" className="text-brand underline">
                  NBA
                </a>{" "}
                and{" "}
                <a href="/basketball/euroleague" className="text-brand underline">
                  EuroLeague
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
