import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

export const Route = createFileRoute("/football")({
  head: () => ({
    meta: [
      { title: "Football Betting — EPL, Champions League & ISL | 1xBET India" },
      {
        name: "description",
        content:
          "Football betting at 1xBET India. Bet on Premier League, Champions League, La Liga, Serie A, Bundesliga, ISL and World Cup. Live odds and in-play markets.",
      },
      { property: "og:title", content: "Football Betting — 1xBET India" },
      {
        property: "og:description",
        content:
          "Bet on Premier League, Champions League, ISL and international football at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.1xbetindia.live/football" },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/football" }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Sports", url: "/sports" },
          { name: "Football", url: "/football" },
        ]}
      />
      <SEOPage
        title="Football Betting"
        description="Bet on football leagues and tournaments worldwide"
        sections={[
          {
            heading: "Football leagues we cover",
            body: (
              <p>
                1xBET India covers football from every corner of the world: the English Premier
                League, UEFA Champions League and Europa League, La Liga, Serie A, Bundesliga, Ligue
                1, the Indian Super League (ISL), I-League, FIFA World Cup, continental
                championships and hundreds of domestic leagues and cups.
              </p>
            ),
          },
          {
            heading: "Football betting markets",
            body: (
              <>
                <p>
                  Each match offers 1X2, double chance, both teams to score, over/under goals, Asian
                  and European handicaps, correct score, half-time/full-time, first goalscorer,
                  corners, cards and player specials. Outright markets cover league winners, top
                  scorers and relegation.
                </p>
                <p className="mt-2">
                  Follow the action in our{" "}
                  <a href="/live" className="text-brand underline">
                    live betting
                  </a>{" "}
                  section where odds update in real time, or combine picks into accumulators for
                  bigger returns.
                </p>
              </>
            ),
          },
          {
            heading: "Live football betting",
            body: (
              <p>
                In-play betting is where football comes alive. Bet on the next goal, next corner, or
                the match result while watching the game unfold. Cash out is available on most live
                markets, letting you lock in a profit or cut a loss before full time.
              </p>
            ),
          },
          {
            heading: "Getting started",
            body: (
              <p>
                <a href="/registration" className="text-brand underline">
                  Create an account
                </a>
                , deposit in INR using{" "}
                <a href="/payments" className="text-brand underline">
                  UPI, cards or e-wallets
                </a>
                , and claim your welcome bonus. You can also bet on the go with our{" "}
                <a href="/app" className="text-brand underline">
                  mobile app
                </a>
                . For the full experience, follow match data on our{" "}
                <a href="/statistics" className="text-brand underline">
                  statistics
                </a>{" "}
                and{" "}
                <a href="/results" className="text-brand underline">
                  results
                </a>{" "}
                pages.
              </p>
            ),
          },
        ]}
      />
    </>
  ),
});
