import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

export const Route = createFileRoute("/cricket")({
  head: () => ({
    meta: [
      { title: "Cricket Betting — IPL, T20 & Live Odds | 1xBET India" },
      {
        name: "description",
        content:
          "Cricket betting at 1xBET India. Bet on IPL, T20 World Cup, Test matches, ODI series and domestic leagues. Live odds, in-play markets and fast INR payouts.",
      },
      { property: "og:title", content: "Cricket Betting — 1xBET India" },
      {
        property: "og:description",
        content:
          "Bet on IPL, international cricket and domestic leagues with live odds at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.1xbetindia.live/cricket" },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/cricket" }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Sports", url: "/sports" },
          { name: "Cricket", url: "/cricket" },
        ]}
      />
      <SEOPage
        title="Cricket Betting"
        description="Bet on IPL, international and domestic cricket with live odds"
        sections={[
          {
            heading: "Cricket coverage at 1xBET India",
            body: (
              <p>
                Cricket is India's favourite sport and the centrepiece of our{" "}
                <a href="/sports" className="text-brand underline">
                  sportsbook
                </a>
                . We cover every major competition — the Indian Premier League (IPL), ICC T20 and
                ODI World Cups, Test series, The Ashes, Big Bash League, SA20, Caribbean Premier
                League and India's domestic Ranji Trophy and Syed Mushtaq Ali Trophy.
              </p>
            ),
          },
          {
            heading: "Cricket betting markets",
            body: (
              <>
                <p>
                  Every match offers deep markets: match winner, toss winner, top batsman, top
                  bowler, total runs, total wickets, innings scores, over-by-over betting, player
                  performance, method of dismissal and many more. Live betting lets you react to
                  every ball — odds move with each boundary and wicket.
                </p>
                <p className="mt-2">
                  Build accumulators across matches or use our{" "}
                  <a href="/live" className="text-brand underline">
                    live betting
                  </a>{" "}
                  and cash out features to manage your position mid-game.
                </p>
              </>
            ),
          },
          {
            heading: "IPL betting",
            body: (
              <p>
                The IPL is the biggest cricket betting event of the year. We price every match weeks
                in advance with outright winner, top run-scorer and top wicket-taker markets
                alongside in-play betting on all 70+ games. Look out for IPL-specific bonuses and
                odds boosts on our{" "}
                <a href="/promotions" className="text-brand underline">
                  promotions
                </a>{" "}
                page during the season.
              </p>
            ),
          },
          {
            heading: "How to start betting on cricket",
            body: (
              <p>
                <a href="/registration" className="text-brand underline">
                  Register
                </a>{" "}
                an account in under a minute, deposit from ₹100 via{" "}
                <a href="/payments" className="text-brand underline">
                  UPI, Paytm or NetBanking
                </a>
                , and claim your 100% welcome bonus up to ₹10,000. Then head to the cricket section,
                pick your market, add it to the bet slip and confirm your stake.
              </p>
            ),
          },
          {
            heading: "Play responsibly",
            body: (
              <p>
                Cricket betting is for players 18+. Bet within your means and use the limits and
                self-exclusion tools on our{" "}
                <a href="/responsible-gaming" className="text-brand underline">
                  Responsible Gaming
                </a>{" "}
                page if needed.
              </p>
            ),
          },
        ]}
      />
    </>
  ),
});
