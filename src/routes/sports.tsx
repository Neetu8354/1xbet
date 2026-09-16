import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

export const Route = createFileRoute("/sports")({
  head: () => ({
    meta: [
      { title: "Sports Betting — 1xBET India" },
      {
        name: "description",
        content:
          "Bet on sports online at 1xBET India. Cricket, football, tennis, basketball, esports and more. Live odds, in-play betting and competitive markets in INR.",
      },
      { property: "og:title", content: "Sports Betting — 1xBET India" },
      {
        property: "og:description",
        content:
          "Bet on sports online at 1xBET India. Cricket, football, tennis, basketball, esports and more.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.1xbetindia.live/sports" },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/sports" }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Sports", url: "/sports" },
        ]}
      />
      <SEOPage
        title="Sports Betting"
        description="Place bets on 30+ sports with competitive odds at 1xBET India"
        sections={[
          {
            heading: "Bet on every major sport",
            body: (
              <>
                <p>
                  The 1xBET India sportsbook covers more than 30 sports with thousands of markets
                  every day. Whether you follow{" "}
                  <a href="/cricket" className="text-brand underline">
                    cricket
                  </a>
                  ,{" "}
                  <a href="/football" className="text-brand underline">
                    football
                  </a>
                  , tennis, basketball, volleyball, ice hockey or table tennis, you will find
                  pre-match and in-play markets with competitive odds priced in Indian Rupees.
                </p>
                <p className="mt-2">
                  Our{" "}
                  <a href="/live" className="text-brand underline">
                    live betting
                  </a>{" "}
                  section updates odds in real time as the action unfolds, with cash out available
                  on most markets so you can settle your bet before the final whistle.
                </p>
              </>
            ),
          },
          {
            heading: "Popular betting markets",
            body: (
              <>
                <p>
                  Every event offers a wide choice of markets — match winner (1X2), double chance,
                  totals (over/under), handicaps, both teams to score, correct score, player props
                  and hundreds of event-specific options. Accumulator betting lets you combine
                  selections for bigger returns, and our accumulator boost{" "}
                  <a href="/promotions" className="text-brand underline">
                    promotions
                  </a>{" "}
                  increase winnings on multi-bets.
                </p>
              </>
            ),
          },
          {
            heading: "Cricket, football and esports",
            body: (
              <>
                <p>
                  <a href="/cricket" className="text-brand underline">
                    Cricket betting
                  </a>{" "}
                  covers the IPL, international Test series, ODIs and T20 leagues with ball-by-ball
                  live markets.{" "}
                  <a href="/football" className="text-brand underline">
                    Football betting
                  </a>{" "}
                  includes the Premier League, Champions League, La Liga, Serie A, Bundesliga and
                  the ISL. For gaming fans, our{" "}
                  <a href="/esports" className="text-brand underline">
                    esports
                  </a>{" "}
                  coverage features CS2, Dota 2, League of Legends and Valorant tournaments.
                </p>
              </>
            ),
          },
          {
            heading: "Why bet with 1xBET India",
            body: (
              <>
                <p>
                  Competitive odds, fast INR payouts via{" "}
                  <a href="/payments" className="text-brand underline">
                    UPI, Paytm and NetBanking
                  </a>
                  , a dedicated{" "}
                  <a href="/app" className="text-brand underline">
                    mobile app
                  </a>
                  , and 24/7 customer support make 1xBET India a complete sports betting platform.
                  New players can claim a 100% welcome bonus up to ₹10,000 after{" "}
                  <a href="/registration" className="text-brand underline">
                    registration
                  </a>
                  .
                </p>
              </>
            ),
          },
          {
            heading: "Bet responsibly",
            body: (
              <p>
                Sports betting is for players aged 18+. Set deposit limits and take breaks using the
                tools on our{" "}
                <a href="/responsible-gaming" className="text-brand underline">
                  Responsible Gaming
                </a>{" "}
                page. Common questions are answered in our{" "}
                <a href="/faq" className="text-brand underline">
                  FAQ
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
