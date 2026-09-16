import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: "Online Games — 1xGames, Crash & Instant Win | 1xBET India" },
      {
        name: "description",
        content:
          "Play online games at 1xBET India. Exclusive 1xGames, crash games, instant win titles, slots and TV games. Play in INR on desktop and mobile.",
      },
      { property: "og:title", content: "Online Games — 1xBET India" },
      {
        property: "og:description",
        content: "1xGames, crash games, instant win games, slots and TV games at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.1xbetindia.live/games" },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/games" }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Games", url: "/games" },
        ]}
      />
      <SEOPage
        title="Online Games"
        description="Instant games, crash games and exclusive 1xGames at 1xBET India"
        sections={[
          {
            heading: "Games at 1xBET India",
            body: (
              <p>
                Beyond the sportsbook and{" "}
                <a href="/casino" className="text-brand underline">
                  casino
                </a>
                , 1xBET India offers a dedicated games section built for quick sessions and instant
                results. Every title plays in INR, runs on certified RNG software, and works on
                desktop and the{" "}
                <a href="/app" className="text-brand underline">
                  mobile app
                </a>
                .
              </p>
            ),
          },
          {
            heading: "1xGames — exclusive instant titles",
            body: (
              <p>
                Our exclusive{" "}
                <a href="/1xgames" className="text-brand underline">
                  1xGames
                </a>{" "}
                collection includes Crash — cash out before the multiplier stops — Apple of Fortune,
                Crystal, Spin & Win, Gems Odyssey, Burning Hot and Midgard Zombies. These games are
                designed for fast rounds and simple rules, ideal between matches.
              </p>
            ),
          },
          {
            heading: "TV games and game shows",
            body: (
              <p>
                Live-hosted wheel games, card shows and lottery-style draws run around the clock in
                the TV games section — a bridge between the{" "}
                <a href="/live-casino" className="text-brand underline">
                  live casino
                </a>{" "}
                and instant play.
              </p>
            ),
          },
          {
            heading: "Bonuses and payments",
            body: (
              <p>
                Games contribute to bonus wagering — check current offers on the{" "}
                <a href="/promotions" className="text-brand underline">
                  promotions
                </a>{" "}
                page. Deposits start at ₹100 via{" "}
                <a href="/payments" className="text-brand underline">
                  UPI, Paytm and cards
                </a>
                . Players must be 18+; tools are on the{" "}
                <a href="/responsible-gaming" className="text-brand underline">
                  Responsible Gaming
                </a>{" "}
                page.
              </p>
            ),
          },
        ]}
      />
    </>
  ),
});
