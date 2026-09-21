import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Basketball Betting", url: "/basketball" },
  { name: "NBA Betting", url: "/basketball/nba" },
];

export const Route = createFileRoute("/basketball_/nba")({
  head: () => ({
    meta: [
      { title: "NBA Betting India | Spreads, Totals & Player Props | 1xBET" },
      {
        name: "description",
        content:
          "NBA betting in India at 1xBET. Live odds on every NBA game — point spreads, totals, player props and outrights with fast INR payouts.",
      },
      { property: "og:title", content: "NBA Betting India | 1xBET" },
      {
        property: "og:description",
        content: "Live NBA odds on every game — spreads, totals and player props in INR.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/basketball/nba` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-basketball.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/basketball/nba` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="NBA Betting India"
        description="Live NBA odds on every game — spreads, totals, player props and outrights in INR"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "NBA betting at 1xBET India",
            body: (
              <p>
                The NBA is the world's premier basketball league — an 82-game regular season, the
                play-in tournament and four playoff rounds ending in the NBA Finals. NBA betting
                runs October to June, with markets priced on every game and outrights for champion,
                conference winners, division winners and awards like MVP and Rookie of the Year.
              </p>
            ),
          },
          {
            heading: "Popular NBA betting markets",
            body: (
              <>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Point spread — the core NBA market, e.g. Lakers -6.5</li>
                  <li>Total points over/under</li>
                  <li>Player props — points, rebounds, assists, threes</li>
                  <li>Quarter and half betting</li>
                  <li>Outrights — champion, MVP, conference and division winners</li>
                </ul>
                <p className="mt-2">
                  Overtime counts toward most NBA markets. Rest days and back-to-backs are the
                  biggest pricing factor — always check injury reports before tip-off.
                </p>
              </>
            ),
          },
          {
            heading: "More basketball betting",
            body: (
              <p>
                Also see{" "}
                <a href="/basketball/euroleague" className="text-brand underline">
                  EuroLeague betting
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
