import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

export const Route = createFileRoute("/live")({
  head: () => ({
    meta: [
      { title: "Live Betting — In-Play Odds on Cricket & Football | 1xBET India" },
      {
        name: "description",
        content:
          "Live in-play betting at 1xBET India. Real-time odds on live cricket, football, tennis and esports. Cash out, live stats and instant INR payouts.",
      },
      { property: "og:title", content: "Live Betting — 1xBET India" },
      {
        property: "og:description",
        content: "Real-time in-play betting on cricket, football and more at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.1xbetindia.live/live" },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/live" }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Live Betting", url: "/live" },
        ]}
      />
      <SEOPage
        title="Live Betting"
        description="In-play betting with real-time odds and cash out"
        sections={[
          {
            heading: "What is live betting?",
            body: (
              <p>
                Live (in-play) betting lets you place bets while a match is in progress. Odds update
                in real time to reflect the score, momentum and remaining time — every run, goal and
                point moves the market. It is the most dynamic way to bet at 1xBET India, with
                hundreds of live events available around the clock.
              </p>
            ),
          },
          {
            heading: "Live sports we cover",
            body: (
              <p>
                Our live section covers{" "}
                <a href="/cricket" className="text-brand underline">
                  cricket
                </a>
                ,{" "}
                <a href="/football" className="text-brand underline">
                  football
                </a>
                , tennis, basketball, table tennis, volleyball, ice hockey and{" "}
                <a href="/esports" className="text-brand underline">
                  esports
                </a>
                . Live markets include next scorer, next wicket, over/under totals, handicaps and
                match result — all repriced continuously.
              </p>
            ),
          },
          {
            heading: "Cash out and Multi-Live",
            body: (
              <p>
                Cash out lets you settle a bet before the event finishes — lock in profit when your
                team is ahead or reduce a loss when the game turns. With{" "}
                <a href="/multi-live" className="text-brand underline">
                  Multi-Live
                </a>
                , you can track and bet on several matches on one screen at the same time.
              </p>
            ),
          },
          {
            heading: "Live stats and results",
            body: (
              <p>
                Every live event includes real-time match statistics — possession, shots, runs,
                wickets and more — so you can make informed in-play decisions. Completed events are
                listed on the{" "}
                <a href="/results" className="text-brand underline">
                  results
                </a>{" "}
                page.
              </p>
            ),
          },
          {
            heading: "Bet live on mobile",
            body: (
              <p>
                The{" "}
                <a href="/app" className="text-brand underline">
                  1xBET app
                </a>{" "}
                is built for live betting — instant odds updates, one-tap bet placement and push
                notifications for goals and wickets. Deposits via{" "}
                <a href="/payments" className="text-brand underline">
                  UPI and e-wallets
                </a>{" "}
                are credited instantly so you never miss a price.
              </p>
            ),
          },
        ]}
      />
    </>
  ),
});
