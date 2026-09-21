import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Ice Hockey Betting", url: "/ice-hockey" },
  { name: "NHL Betting", url: "/ice-hockey/nhl" },
];

export const Route = createFileRoute("/ice-hockey_/nhl")({
  head: () => ({
    meta: [
      { title: "NHL Betting India | Puck Line, Totals & Props | 1xBET" },
      {
        name: "description",
        content:
          "NHL betting in India at 1xBET. Live odds on every NHL game — puck line, totals, player props and Stanley Cup outrights in INR.",
      },
      { property: "og:title", content: "NHL Betting India | 1xBET" },
      {
        property: "og:description",
        content: "Live NHL odds on every game — puck line, totals and props in INR.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/ice-hockey/nhl` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-ice-hockey.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/ice-hockey/nhl` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="NHL Betting India"
        description="Live NHL odds on every game — puck line, totals, props and Stanley Cup outrights in INR"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "NHL betting at 1xBET India",
            body: (
              <p>
                The NHL is the world's premier ice hockey league — 32 teams, an 82-game regular
                season from October to April, then four rounds of best-of-seven Stanley Cup
                playoffs. Markets are priced on every game, with outrights for the Stanley Cup,
                conference and division winners and awards like the Hart and Conn Smythe trophies.
              </p>
            ),
          },
          {
            heading: "Popular NHL betting markets",
            body: (
              <>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Moneyline and regulation-time (3-way) winner</li>
                  <li>Puck line — usually ±1.5 goals</li>
                  <li>Total goals over/under</li>
                  <li>Period winners and period totals</li>
                  <li>Player props — goals, assists, points, saves</li>
                  <li>Stanley Cup, conference and division outrights</li>
                </ul>
                <p className="mt-2">
                  Confirmed starting goalies are announced roughly an hour before puck drop and can
                  move the moneyline significantly — always check the goalie matchup before betting.
                  NHL games run overnight India time, so second- and third-period live betting is
                  the most practical way to follow along.
                </p>
              </>
            ),
          },
          {
            heading: "More ice hockey betting",
            body: (
              <p>
                Also see{" "}
                <a href="/ice-hockey/khl" className="text-brand underline">
                  KHL betting
                </a>
                ,{" "}
                <a href="/ice-hockey/live" className="text-brand underline">
                  live hockey
                </a>
                ,{" "}
                <a href="/ice-hockey/odds" className="text-brand underline">
                  odds
                </a>
                ,{" "}
                <a href="/ice-hockey/schedule" className="text-brand underline">
                  schedule
                </a>{" "}
                and{" "}
                <a href="/ice-hockey/results" className="text-brand underline">
                  results
                </a>
                , or return to{" "}
                <a href="/ice-hockey" className="text-brand underline">
                  ice hockey betting
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
