import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Tennis Betting", url: "/tennis" },
  { name: "ATP Betting", url: "/tennis/atp" },
];

export const Route = createFileRoute("/tennis_/atp")({
  head: () => ({
    meta: [
      { title: "ATP Tennis Betting India | Masters 1000 & Tour Odds | 1xBET" },
      {
        name: "description",
        content:
          "ATP tennis betting in India at 1xBET. Live odds on Masters 1000 events, ATP 500s, 250s and the ATP Finals — match and set markets in INR.",
      },
      { property: "og:title", content: "ATP Tennis Betting India | 1xBET" },
      {
        property: "og:description",
        content: "Live ATP odds on Masters 1000, 500 and 250 events plus the ATP Finals.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/tennis/atp` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-tennis.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/tennis/atp` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="ATP Tennis Betting"
        description="Men's tour odds on Masters 1000, ATP 500/250 events and the ATP Finals"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "ATP betting at 1xBET India",
            body: (
              <p>
                The ATP tour is the men's professional circuit — nine Masters 1000 events (Indian
                Wells, Miami, Monte Carlo, Madrid, Rome, Canada, Cincinnati, Shanghai, Paris), ATP
                500 and 250 tournaments worldwide, the four Grand Slams and the season-ending ATP
                Finals in November. Matches run almost every day of the season with pre-match and
                live markets on singles and doubles.
              </p>
            ),
          },
          {
            heading: "Popular ATP betting markets",
            body: (
              <>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Match winner and set betting</li>
                  <li>Total games and game handicaps</li>
                  <li>First set winner and tie-break markets</li>
                  <li>Outright tournament winner</li>
                </ul>
                <p className="mt-2">
                  Men's Grand Slam matches are best-of-five sets, while tour events are
                  best-of-three — formats price differently, so check before comparing markets.
                </p>
              </>
            ),
          },
          {
            heading: "More tennis betting",
            body: (
              <p>
                Also see{" "}
                <a href="/tennis/wta" className="text-brand underline">
                  WTA betting
                </a>
                ,{" "}
                <a href="/tennis/grand-slams" className="text-brand underline">
                  Grand Slam betting
                </a>
                , the{" "}
                <a href="/tennis/schedule" className="text-brand underline">
                  tennis schedule
                </a>{" "}
                and{" "}
                <a href="/tennis/results" className="text-brand underline">
                  results
                </a>
                , or return to{" "}
                <a href="/tennis" className="text-brand underline">
                  tennis betting
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
