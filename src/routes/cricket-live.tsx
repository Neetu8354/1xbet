import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Cricket Betting", url: "/cricket" },
  { name: "Live Cricket Betting", url: "/cricket-live" },
];

export const Route = createFileRoute("/cricket-live")({
  head: () => ({
    meta: [
      { title: "Live Cricket Betting | In-Play Odds Ball-by-Ball | 1xBET India" },
      {
        name: "description",
        content:
          "Live cricket betting at 1xBET India. Ball-by-ball in-play odds on IPL, T20, ODI and Test matches — next wicket, over runs and cash out in INR.",
      },
      { property: "og:title", content: "Live Cricket Betting | 1xBET India" },
      {
        property: "og:description",
        content: "Ball-by-ball live cricket odds on IPL and international matches. Bet in INR.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/cricket-live` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-cricket.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/cricket-live` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Live Cricket Betting"
        description="Ball-by-ball in-play odds on IPL, T20, ODI and Test cricket — with cash out in INR"
        breadcrumbs={breadcrumbItems}
        topContent={
          <img
            src="/assets/seo/live-cricket-betting.webp"
            alt="Live cricket betting odds — ball-by-ball in-play markets on every over"
            width="1200"
            height="500"
            fetchPriority="high"
            decoding="async"
            className="mt-4 w-full rounded-lg border"
          />
        }
        sections={[
          {
            heading: "How live cricket betting works",
            body: (
              <>
                <p>
                  Live cricket betting lets you place bets while a match is in progress. Odds update
                  ball-by-ball — every boundary, wicket and bowling change reprices the match winner
                  market instantly. In T20 cricket a single big over can flip favourites; in Test
                  cricket prices drift with sessions, partnerships and the new ball.
                </p>
                <p className="mt-2">
                  Live cricket matches are grouped in the{" "}
                  <a href="/live" className="text-brand underline">
                    live betting
                  </a>{" "}
                  lobby alongside other in-play sports, with real-time statistics beside each
                  market.
                </p>
              </>
            ),
          },
          {
            heading: "Popular in-play cricket markets",
            body: (
              <>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Match winner — repriced after every ball</li>
                  <li>Next over runs and next wicket method</li>
                  <li>Innings totals and session betting</li>
                  <li>Top batsman and partnership markets</li>
                  <li>Runs at fall of next wicket, milestones and player props</li>
                </ul>
                <p className="mt-2">
                  Cash out is available on selected markets, letting you settle a bet before the
                  match ends.
                </p>
              </>
            ),
          },
          {
            heading: "Plan your live bets",
            body: (
              <p>
                Check the{" "}
                <a href="/cricket-schedule" className="text-brand underline">
                  cricket schedule
                </a>{" "}
                for upcoming matches, review form on{" "}
                <a href="/cricket-results" className="text-brand underline">
                  cricket results
                </a>
                , and compare prices on{" "}
                <a href="/cricket-odds" className="text-brand underline">
                  cricket odds
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
