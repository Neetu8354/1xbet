import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Table Tennis Betting", url: "/table-tennis" },
  { name: "Table Tennis Results", url: "/table-tennis/results" },
];

export const Route = createFileRoute("/table-tennis_/results")({
  head: () => ({
    meta: [
      { title: "Table Tennis Results | WTT, ITTF & League Scores | 1xBET India" },
      {
        name: "description",
        content:
          "Latest table tennis results — WTT, ITTF championship and league match scores with game-by-game breakdowns at 1xBET India.",
      },
      { property: "og:title", content: "Table Tennis Results | 1xBET India" },
      {
        property: "og:description",
        content: "WTT, ITTF and league table tennis results — game-by-game scores and form.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/table-tennis/results` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-table-tennis.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/table-tennis/results` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Table Tennis Results"
        description="Recent WTT, ITTF and league scores — game-by-game outcomes and form guides"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Latest table tennis results",
            body: (
              <p>
                Recent scores across the WTT circuit, ITTF championships and professional leagues —
                match results with game-by-game breakdowns. With dozens of matches daily, results
                are the fastest way to track form on the tour.
              </p>
            ),
          },
          {
            heading: "Using results for betting",
            body: (
              <p>
                Head-to-head records matter more in table tennis than almost any other sport — style
                matchups repeat predictably across meetings. Combine results with the{" "}
                <a href="/table-tennis/schedule" className="text-brand underline">
                  table tennis schedule
                </a>{" "}
                to spot fatigue from same-day fixtures, and with current{" "}
                <a href="/table-tennis/odds" className="text-brand underline">
                  table tennis odds
                </a>{" "}
                to find value.
              </p>
            ),
          },
          {
            heading: "More table tennis betting",
            body: (
              <p>
                Also see{" "}
                <a href="/table-tennis/wtt" className="text-brand underline">
                  WTT betting
                </a>
                ,{" "}
                <a href="/table-tennis/ittf" className="text-brand underline">
                  ITTF betting
                </a>{" "}
                and{" "}
                <a href="/table-tennis/live" className="text-brand underline">
                  live table tennis
                </a>
                , or return to{" "}
                <a href="/table-tennis" className="text-brand underline">
                  table tennis betting
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
