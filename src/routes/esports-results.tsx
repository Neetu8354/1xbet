import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Esports Betting", url: "/esports" },
  { name: "Esports Results", url: "/esports-results" },
];

export const Route = createFileRoute("/esports-results")({
  head: () => ({
    meta: [
      { title: "Esports Results | CS2, Dota 2, LoL & Valorant Scores | 1xBET India" },
      {
        name: "description",
        content:
          "Check esports results for CS2, Dota 2, League of Legends and Valorant. Recent match scores, map results and tournament standings at 1xBET India.",
      },
      { property: "og:title", content: "Esports Results | 1xBET India" },
      {
        property: "og:description",
        content: "Recent CS2, Dota 2, LoL and Valorant match results and tournament scores.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/esports-results` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/esports-results` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Esports Results"
        description="Recent match scores and tournament results for CS2, Dota 2, LoL and Valorant"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Latest esports results",
            body: (
              <p>
                Track finished matches across the major esports titles — Counter-Strike 2, Dota 2,
                League of Legends and Valorant — including map scores, series results and tournament
                standings. Results update as matches conclude, so you can check form before placing
                your next bet.
              </p>
            ),
          },
          {
            heading: "Using results for esports betting",
            body: (
              <>
                <p>
                  Recent results are one of the most useful inputs for esports betting: head-to-head
                  records, map win rates and current streaks all inform how a match might play out.
                  Combine results with the{" "}
                  <a href="/esports-schedule" className="text-brand underline">
                    esports schedule
                  </a>{" "}
                  to spot upcoming fixtures, then compare live prices in the{" "}
                  <a href="/live" className="text-brand underline">
                    live betting
                  </a>{" "}
                  section.
                </p>
                <p className="mt-2">
                  For match-by-match context across traditional sports too, see the{" "}
                  <a href="/results" className="text-brand underline">
                    sports results
                  </a>{" "}
                  and{" "}
                  <a href="/statistics" className="text-brand underline">
                    statistics
                  </a>{" "}
                  pages.
                </p>
              </>
            ),
          },
          {
            heading: "Bet on esports at 1xBET India",
            body: (
              <p>
                Browse markets for{" "}
                <a href="/cs2-betting" className="text-brand underline">
                  CS2
                </a>
                ,{" "}
                <a href="/dota2-betting" className="text-brand underline">
                  Dota 2
                </a>
                ,{" "}
                <a href="/valorant-betting" className="text-brand underline">
                  Valorant
                </a>{" "}
                and{" "}
                <a href="/lol-betting" className="text-brand underline">
                  League of Legends
                </a>{" "}
                on the{" "}
                <a href="/esports" className="text-brand underline">
                  esports betting hub
                </a>
                . Players must be 18+ — see{" "}
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
