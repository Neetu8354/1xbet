import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Ice Hockey Betting", url: "/ice-hockey" },
  { name: "Live Hockey Betting", url: "/ice-hockey/live" },
];

export const Route = createFileRoute("/ice-hockey_/live")({
  head: () => ({
    meta: [
      { title: "Live Ice Hockey Betting | In-Play NHL & KHL Odds | 1xBET India" },
      {
        name: "description",
        content:
          "Live ice hockey betting in India — in-play odds on NHL, KHL and IIHF games. Puck line, totals and next-goal markets updated in real time.",
      },
      { property: "og:title", content: "Live Ice Hockey Betting | 1xBET India" },
      {
        property: "og:description",
        content: "In-play hockey odds on NHL, KHL and IIHF games — updated in real time.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/ice-hockey/live` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-ice-hockey.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/ice-hockey/live` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Live Ice Hockey Betting"
        description="In-play odds on NHL, KHL and IIHF hockey — updated goal by goal"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Live hockey betting at 1xBET India",
            body: (
              <>
                <img
                  src="/assets/seo/live-ice-hockey-betting.webp"
                  alt="Live ice hockey betting — in-play puck line and totals markets"
                  width="1200"
                  height="500"
                  fetchPriority="high"
                  decoding="async"
                  className="mb-3 w-full rounded-lg border"
                />
                <p>
                  Live hockey betting reprices after every goal, penalty and power play. Momentum
                  swings fast — a single shift can flip the in-play moneyline, and the empty-net
                  finish makes the final two minutes the most volatile stretch in any sport's live
                  markets.
                </p>
              </>
            ),
          },
          {
            heading: "In-play hockey markets",
            body: (
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Live match winner and next team to score</li>
                <li>Live puck line and updated totals</li>
                <li>Current-period winner and period totals</li>
                <li>Power-play and penalty-related specials</li>
                <li>Rest-of-match and comeback markets</li>
              </ul>
            ),
          },
          {
            heading: "When to bet live",
            body: (
              <p>
                The most useful in-play windows are after the first goal (early favourites often get
                overpriced), during power plays (totals and next-goal markets shift), and in the
                final minutes when the trailing team pulls its goalie. For NHL games played
                overnight India time, second- and third-period live betting is the practical entry
                point — check the{" "}
                <a href="/ice-hockey/schedule" className="text-brand underline">
                  hockey schedule
                </a>{" "}
                for start times.
              </p>
            ),
          },
          {
            heading: "More ice hockey betting",
            body: (
              <p>
                Also see{" "}
                <a href="/ice-hockey/nhl" className="text-brand underline">
                  NHL betting
                </a>
                ,{" "}
                <a href="/ice-hockey/khl" className="text-brand underline">
                  KHL betting
                </a>
                ,{" "}
                <a href="/ice-hockey/odds" className="text-brand underline">
                  odds
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
