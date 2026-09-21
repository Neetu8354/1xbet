import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Ice Hockey Betting", url: "/ice-hockey" },
  { name: "Hockey Odds", url: "/ice-hockey/odds" },
];

export const Route = createFileRoute("/ice-hockey_/odds")({
  head: () => ({
    meta: [
      { title: "Ice Hockey Odds | NHL, KHL & IIHF Betting Lines | 1xBET India" },
      {
        name: "description",
        content:
          "Latest ice hockey odds at 1xBET India — moneyline, puck line and totals on NHL, KHL and IIHF games, updated pre-match and live in INR.",
      },
      { property: "og:title", content: "Ice Hockey Odds | 1xBET India" },
      {
        property: "og:description",
        content: "NHL, KHL and IIHF odds — moneyline, puck line and totals in INR.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/ice-hockey/odds` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-ice-hockey.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/ice-hockey/odds` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Ice Hockey Odds"
        description="Moneyline, puck line and totals on NHL, KHL and IIHF games — pre-match and live"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "How hockey odds work",
            body: (
              <p>
                Hockey odds are shown in decimal format: your stake multiplied by the price is the
                total return. Odds move on goaltender confirmations, injuries, rest days and head-to
                -head history — a backup goalie starting can shift the moneyline by 20–30 points.
                Compare prices before betting, and track line movement toward puck drop.
              </p>
            ),
          },
          {
            heading: "Reading the main hockey lines",
            body: (
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Moneyline — the outright winner including overtime/shootout</li>
                <li>Regulation (3-way) — winner within 60 minutes, with the draw priced</li>
                <li>Puck line — handicap, usually ±1.5 goals</li>
                <li>Totals — combined goals over/under, typically 5.5–6.5</li>
                <li>Period lines — per-period winner and totals</li>
              </ul>
            ),
          },
          {
            heading: "Pre-match vs live odds",
            body: (
              <p>
                Pre-match prices settle once the goalies are confirmed;{" "}
                <a href="/ice-hockey/live" className="text-brand underline">
                  live odds
                </a>{" "}
                then reprice after every goal and penalty. Check the{" "}
                <a href="/ice-hockey/schedule" className="text-brand underline">
                  hockey schedule
                </a>{" "}
                for today's games and{" "}
                <a href="/ice-hockey/results" className="text-brand underline">
                  results
                </a>{" "}
                for recent form. Return to{" "}
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
