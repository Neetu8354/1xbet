import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

export const Route = createFileRoute("/football_/odds")({
  head: () => ({
    meta: [
      { title: "Football Odds Explained — 1X2, Handicaps & Totals | 1xBET India" },
      {
        name: "description",
        content:
          "Football betting odds explained for Indian players. Learn how 1X2, over/under goals, Asian handicap, BTTS and accumulator odds work at 1xBET India.",
      },
      { property: "og:title", content: "Football Odds Explained — 1xBET India" },
      {
        property: "og:description",
        content: "How football betting odds and markets work — 1X2, handicaps, totals and more.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/football/odds` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/football/odds` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Football", url: "/football" },
          { name: "Football Odds", url: "/football/odds" },
        ]}
      />
      <SEOPage
        title="Football Odds Explained"
        description="How football betting odds and markets work at 1xBET India"
        sections={[
          {
            heading: "How decimal odds work",
            body: (
              <p>
                1xBET India displays decimal odds — the simplest format for Indian players. Your
                payout equals stake × odds: ₹100 at odds of 2.50 returns ₹250 (₹150 profit plus your
                stake back). Lower odds mean a more likely outcome; higher odds mean a bigger payout
                but a lower chance of winning.
              </p>
            ),
          },
          {
            heading: "1X2 — the match result market",
            body: (
              <p>
                The most popular{" "}
                <a href="/football" className="text-brand underline">
                  football betting
                </a>{" "}
                market. "1" is the home team to win, "X" is the draw and "2" is the away team.
                Double chance (1X, 12, X2) covers two of the three outcomes at lower odds — a safer
                option when a favourite looks vulnerable.
              </p>
            ),
          },
          {
            heading: "Over/under goals and BTTS",
            body: (
              <p>
                Totals markets ask whether the match will produce over or under a goal line —
                over/under 2.5 goals is the standard. Both teams to score (BTTS) wins if each side
                scores at least once, regardless of the result. These markets are ideal when you
                expect goals but can't pick a winner.
              </p>
            ),
          },
          {
            heading: "Handicap betting",
            body: (
              <p>
                Handicaps level mismatched fixtures: a -1.5 handicap means the favourite must win by
                two or more goals. Asian handicaps remove the draw and can refund half or all of
                your stake on exact margins — worth learning before betting big favourites at short
                odds.
              </p>
            ),
          },
          {
            heading: "Accumulators and combined odds",
            body: (
              <p>
                Accumulators multiply the odds of every selection — three picks at 2.00 each return
                8.00 combined. All legs must win, so keep accas small. Our{" "}
                <a href="/promotions" className="text-brand underline">
                  promotions
                </a>{" "}
                page often features accumulator boosts. Live odds move in real time — see the{" "}
                <a href="/live" className="text-brand underline">
                  live betting
                </a>{" "}
                section, and check{" "}
                <a href="/football/tips" className="text-brand underline">
                  betting tips
                </a>{" "}
                for strategy.
              </p>
            ),
          },
        ]}
      />
    </>
  ),
});
