import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

export const Route = createFileRoute("/football_/tips")({
  head: () => ({
    meta: [
      { title: "Football Betting Tips — Strategy Guide for India | 1xBET India" },
      {
        name: "description",
        content:
          "Football betting tips and strategy for Indian players. Bankroll management, value betting, research methods and responsible gambling advice at 1xBET India.",
      },
      { property: "og:title", content: "Football Betting Tips — 1xBET India" },
      {
        property: "og:description",
        content: "Practical football betting strategy: bankroll, value, research and discipline.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/football/tips` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/football/tips` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Football", url: "/football" },
          { name: "Betting Tips", url: "/football/tips" },
        ]}
      />
      <SEOPage
        title="Football Betting Tips"
        description="Practical strategy for betting on football at 1xBET India"
        sections={[
          {
            heading: "Manage your bankroll",
            body: (
              <p>
                Decide your betting budget before you start and never stake more than 1–5% of it on
                a single bet. A disciplined bankroll survives losing streaks; chasing losses with
                bigger stakes is the fastest way to go broke. Set deposit limits via our{" "}
                <a href="/responsible-gaming" className="text-brand underline">
                  Responsible Gaming
                </a>{" "}
                tools.
              </p>
            ),
          },
          {
            heading: "Bet with research, not emotion",
            body: (
              <p>
                Check recent form, head-to-head records, injuries, suspensions, fixture congestion
                and motivation before every bet. Our{" "}
                <a href="/statistics" className="text-brand underline">
                  statistics
                </a>{" "}
                and{" "}
                <a href="/results" className="text-brand underline">
                  results
                </a>{" "}
                pages provide the data — backing your favourite team blindly is a losing strategy.
              </p>
            ),
          },
          {
            heading: "Look for value, not winners",
            body: (
              <p>
                Long-term profit comes from betting when the odds are bigger than the true
                probability — not from picking the most winners. Compare prices across markets and
                learn how each one works in our{" "}
                <a href="/football/odds" className="text-brand underline">
                  football odds guide
                </a>
                .
              </p>
            ),
          },
          {
            heading: "Use live betting and cash out wisely",
            body: (
              <p>
                <a href="/live" className="text-brand underline">
                  Live betting
                </a>{" "}
                rewards watching the match — a team dominating without scoring can offer value. Cash
                out locks in profit or cuts losses, but cashing out every winner early also caps
                your returns. Use it when the game has genuinely turned, not from nerves.
              </p>
            ),
          },
          {
            heading: "Keep records and stay disciplined",
            body: (
              <p>
                Track every bet — market, odds, stake and result — to learn which strategies work
                for you. Specialise in leagues you follow, avoid betting every match on the{" "}
                <a href="/football/schedule" className="text-brand underline">
                  schedule
                </a>
                , and never bet money you need for essentials. Betting is for players 18+.
              </p>
            ),
          },
        ]}
      />
    </>
  ),
});
