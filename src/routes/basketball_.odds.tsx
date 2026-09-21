import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Basketball Betting", url: "/basketball" },
  { name: "Basketball Odds", url: "/basketball/odds" },
];

export const Route = createFileRoute("/basketball_/odds")({
  head: () => ({
    meta: [
      { title: "Basketball Odds India | NBA & EuroLeague Prices Explained | 1xBET" },
      {
        name: "description",
        content:
          "Compare basketball odds at 1xBET India. Decimal prices on NBA and EuroLeague — spreads, totals and player props explained for Indian bettors.",
      },
      { property: "og:title", content: "Basketball Odds India | 1xBET" },
      {
        property: "og:description",
        content: "Decimal basketball odds on NBA and EuroLeague — spreads and totals explained.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/basketball/odds` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/basketball/odds` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Basketball Odds India"
        description="How basketball odds work — decimal prices, spreads, totals and comparing markets"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Understanding basketball odds",
            body: (
              <>
                <p>
                  Basketball odds at 1xBET India are shown in decimal format — your stake multiplied
                  by the price is the potential return. A ₹1,000 bet at 1.90 returns ₹1,900. Spread
                  and totals markets typically price near 1.90 on both sides, while moneyline prices
                  reflect each team's win probability.
                </p>
                <p className="mt-2">
                  Lines move with injury reports, rest days and lineup news — NBA spreads can shift
                  several points when a star is ruled out.
                </p>
              </>
            ),
          },
          {
            heading: "Comparing basketball markets",
            body: (
              <p>
                The same game offers different prices across markets: a heavy favourite might be
                1.15 on the moneyline but near evens against the spread. Alternative spreads and
                totals let you pick your own line at adjusted odds — useful when you have a strong
                view on margin or pace. Live prices update constantly in{" "}
                <a href="/basketball/live" className="text-brand underline">
                  live basketball betting
                </a>
                .
              </p>
            ),
          },
          {
            heading: "Find today's basketball odds",
            body: (
              <p>
                Browse fixtures on the{" "}
                <a href="/basketball/schedule" className="text-brand underline">
                  basketball schedule
                </a>
                , check form on{" "}
                <a href="/basketball/results" className="text-brand underline">
                  results
                </a>
                , then compare markets on the{" "}
                <a href="/basketball" className="text-brand underline">
                  basketball hub
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
