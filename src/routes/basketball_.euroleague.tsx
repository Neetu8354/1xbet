import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Basketball Betting", url: "/basketball" },
  { name: "EuroLeague Betting", url: "/basketball/euroleague" },
];

export const Route = createFileRoute("/basketball_/euroleague")({
  head: () => ({
    meta: [
      { title: "EuroLeague Betting India | European Basketball Odds | 1xBET" },
      {
        name: "description",
        content:
          "EuroLeague betting in India at 1xBET. Live odds on Europe's elite club competition — spreads, totals and Final Four outrights in INR.",
      },
      { property: "og:title", content: "EuroLeague Betting India | 1xBET" },
      {
        property: "og:description",
        content: "Live EuroLeague odds — spreads, totals and Final Four markets in INR.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/basketball/euroleague` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-basketball.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/basketball/euroleague` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="EuroLeague Betting"
        description="Europe's elite club competition — regular season, playoffs and Final Four markets"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "EuroLeague betting at 1xBET India",
            body: (
              <p>
                The EuroLeague is Europe's premier club basketball competition — 18 teams, a long
                regular season, playoffs and the Final Four weekend that decides the champion.
                EuroLeague games are lower-scoring and more tactical than the NBA, with 40-minute
                games (four 10-minute quarters) producing tighter spreads and totals.
              </p>
            ),
          },
          {
            heading: "Popular EuroLeague betting markets",
            body: (
              <>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Match winner and point spread</li>
                  <li>Total points over/under — lower lines than the NBA</li>
                  <li>Quarter and half markets</li>
                  <li>Player performance points</li>
                  <li>Outrights — EuroLeague champion and Final Four qualifiers</li>
                </ul>
              </>
            ),
          },
          {
            heading: "More basketball betting",
            body: (
              <p>
                Also see{" "}
                <a href="/basketball/nba" className="text-brand underline">
                  NBA betting
                </a>
                ,{" "}
                <a href="/basketball/live" className="text-brand underline">
                  live basketball
                </a>
                ,{" "}
                <a href="/basketball/odds" className="text-brand underline">
                  odds
                </a>
                ,{" "}
                <a href="/basketball/schedule" className="text-brand underline">
                  schedule
                </a>{" "}
                and{" "}
                <a href="/basketball/results" className="text-brand underline">
                  results
                </a>
                , or return to{" "}
                <a href="/basketball" className="text-brand underline">
                  basketball betting
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
