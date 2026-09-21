import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Basketball Betting", url: "/basketball" },
  { name: "Live Basketball Betting", url: "/basketball/live" },
];

export const Route = createFileRoute("/basketball_/live")({
  head: () => ({
    meta: [
      { title: "Live Basketball Betting | In-Play NBA & EuroLeague Odds | 1xBET India" },
      {
        name: "description",
        content:
          "Live basketball betting at 1xBET India. In-play odds on NBA and EuroLeague — quarter markets, updated spreads and totals with cash out in INR.",
      },
      { property: "og:title", content: "Live Basketball Betting | 1xBET India" },
      {
        property: "og:description",
        content: "In-play basketball odds on NBA and EuroLeague — quarter markets and cash out.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/basketball/live` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-basketball.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/basketball/live` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Live Basketball Betting"
        description="In-play odds on NBA, EuroLeague and international games — quarter-by-quarter markets"
        breadcrumbs={breadcrumbItems}
        topContent={
          <img
            src="/assets/seo/live-basketball-betting.webp"
            alt="Live basketball betting odds — quarter-by-quarter in-play markets on every game"
            width="1200"
            height="500"
            fetchPriority="high"
            decoding="async"
            className="mt-4 w-full rounded-lg border"
          />
        }
        sections={[
          {
            heading: "How live basketball betting works",
            body: (
              <>
                <p>
                  Live basketball betting lets you bet while a game is in progress. Scoring runs
                  swing prices constantly — a 15-2 run can flip a spread in minutes — and odds
                  reprice on every timeout and quarter break.
                </p>
                <p className="mt-2">
                  Live games are grouped in the{" "}
                  <a href="/live" className="text-brand underline">
                    live betting
                  </a>{" "}
                  lobby with real-time scores and statistics beside each market.
                </p>
              </>
            ),
          },
          {
            heading: "Popular in-play basketball markets",
            body: (
              <>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Updated match winner, spread and totals</li>
                  <li>Next quarter winner and quarter totals</li>
                  <li>Race to 10/20 points</li>
                  <li>Winning margin bands and overtime markets</li>
                </ul>
                <p className="mt-2">
                  Cash out is available on selected markets, letting you settle a bet before the
                  final buzzer.
                </p>
              </>
            ),
          },
          {
            heading: "Plan your live bets",
            body: (
              <p>
                Check the{" "}
                <a href="/basketball/schedule" className="text-brand underline">
                  basketball schedule
                </a>{" "}
                for upcoming games, review form on{" "}
                <a href="/basketball/results" className="text-brand underline">
                  results
                </a>
                , and compare prices on{" "}
                <a href="/basketball/odds" className="text-brand underline">
                  odds
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
