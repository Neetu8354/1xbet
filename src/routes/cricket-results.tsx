import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Cricket Betting", url: "/cricket" },
  { name: "Cricket Results", url: "/cricket-results" },
];

export const Route = createFileRoute("/cricket-results")({
  head: () => ({
    meta: [
      { title: "Cricket Results | IPL, T20 & International Scores | 1xBET India" },
      {
        name: "description",
        content:
          "Latest cricket results at 1xBET India. IPL scores, international match results, series standings and head-to-head records for cricket betting.",
      },
      { property: "og:title", content: "Cricket Results | 1xBET India" },
      {
        property: "og:description",
        content: "Recent IPL and international cricket results, series standings and form.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/cricket-results` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/cricket-results` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Cricket Results"
        description="Recent match scores, series results and standings across IPL and international cricket"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Latest cricket results",
            body: (
              <p>
                Follow finished matches across IPL, T20, ODI and Test cricket — scores, margins, top
                performers and series standings. Results update as matches conclude, helping you
                check form before placing your next bet.
              </p>
            ),
          },
          {
            heading: "Using results for cricket betting",
            body: (
              <p>
                Recent results are a key input for cricket betting: head-to-head records, venue
                scoring trends and player form all shape upcoming markets. Pair results with the{" "}
                <a href="/cricket-schedule" className="text-brand underline">
                  cricket schedule
                </a>{" "}
                to find upcoming fixtures, then compare prices on{" "}
                <a href="/cricket-odds" className="text-brand underline">
                  cricket odds
                </a>{" "}
                or in the{" "}
                <a href="/cricket-live" className="text-brand underline">
                  live betting
                </a>{" "}
                section. For all-sports scoreboards see{" "}
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
            heading: "Bet on cricket at 1xBET India",
            body: (
              <p>
                Browse markets on the{" "}
                <a href="/cricket" className="text-brand underline">
                  cricket betting hub
                </a>{" "}
                and{" "}
                <a href="/ipl-betting" className="text-brand underline">
                  IPL betting
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
