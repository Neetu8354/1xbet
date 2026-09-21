import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Cricket Betting", url: "/cricket" },
  { name: "Cricket Odds", url: "/cricket-odds" },
];

export const Route = createFileRoute("/cricket-odds")({
  head: () => ({
    meta: [
      { title: "Cricket Odds India | IPL, T20 & Test Match Prices | 1xBET" },
      {
        name: "description",
        content:
          "Compare cricket odds at 1xBET India. Decimal prices on IPL, T20, ODI and Test matches — match winner, totals, player markets and outrights.",
      },
      { property: "og:title", content: "Cricket Odds India | 1xBET" },
      {
        property: "og:description",
        content: "Decimal cricket odds on IPL and international matches — explained for India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/cricket-odds` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-cricket.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/cricket-odds` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Cricket Odds India"
        description="How cricket odds work — decimal prices, implied probability and comparing markets"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Understanding cricket odds",
            body: (
              <>
                <p>
                  Cricket odds at 1xBET India are shown in decimal format. Your potential return is
                  stake × odds: a ₹1,000 bet at 1.80 returns ₹1,800 — ₹800 profit plus your stake
                  back. The implied probability is 1 ÷ odds, so 1.80 implies roughly a 55.6% chance.
                </p>
                <p className="mt-2">
                  Prices move with team news, pitch reports, the toss and in-play events. Comparing
                  odds across markets — match winner versus handicap versus totals — often reveals
                  better value on the same game.
                </p>
              </>
            ),
          },
          {
            heading: "Odds by format",
            body: (
              <>
                <p>
                  Each cricket format prices differently. T20 matches like the{" "}
                  <a href="/ipl-betting" className="text-brand underline">
                    IPL
                  </a>{" "}
                  are high-variance — short prices on favourites still lose regularly. ODIs balance
                  variance with deeper innings markets. Test cricket adds the draw as a third
                  outcome and session-by-session markets across five days.
                </p>
                <p className="mt-2">
                  Live prices update ball-by-ball in the{" "}
                  <a href="/cricket-live" className="text-brand underline">
                    live cricket betting
                  </a>{" "}
                  section.
                </p>
              </>
            ),
          },
          {
            heading: "Find today's cricket odds",
            body: (
              <p>
                Browse fixtures on the{" "}
                <a href="/cricket-schedule" className="text-brand underline">
                  cricket schedule
                </a>
                , check form via{" "}
                <a href="/cricket-results" className="text-brand underline">
                  cricket results
                </a>
                , then compare markets on the{" "}
                <a href="/cricket" className="text-brand underline">
                  cricket betting hub
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
