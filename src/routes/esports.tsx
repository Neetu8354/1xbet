import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

export const Route = createFileRoute("/esports")({
  head: () => ({
    meta: [
      { title: "Esports Betting — CS2, Dota 2, LoL & Valorant | 1xBET India" },
      {
        name: "description",
        content:
          "Bet on esports at 1xBET India. CS2, Dota 2, League of Legends, Valorant and more. Live odds on all major tournaments with INR payouts.",
      },
      { property: "og:title", content: "Esports Betting — 1xBET India" },
      {
        property: "og:description",
        content: "Live odds on CS2, Dota 2, LoL and Valorant tournaments at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.1xbetindia.live/esports" },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/esports" }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Sports", url: "/sports" },
          { name: "Esports", url: "/esports" },
        ]}
      />
      <SEOPage
        title="Esports Betting"
        description="Bet on CS2, Dota 2, League of Legends, Valorant and more"
        sections={[
          {
            heading: "Esports coverage",
            body: (
              <p>
                Esports is one of the fastest-growing betting categories at 1xBET India. We cover
                Counter-Strike 2 (CS2), Dota 2, League of Legends, Valorant, PUBG/BGMI, Call of
                Duty, FIFA/eFootball and Rocket League — from regional qualifiers to world
                championships.
              </p>
            ),
          },
          {
            heading: "Tournaments we price",
            body: (
              <p>
                Bet on CS2 Majors and BLAST events, Dota 2's The International, LoL Worlds and LEC,
                Valorant Champions Tour, and ESL/IEM circuit events. Outright winner, map winner,
                map handicaps, total maps, first blood and pistol round markets are all available.
              </p>
            ),
          },
          {
            heading: "Live esports betting",
            body: (
              <p>
                Esports is ideal for in-play betting — rounds and maps create natural momentum
                swings. Our{" "}
                <a href="/live" className="text-brand underline">
                  live betting
                </a>{" "}
                section reprices every map in real time, and cash out is available on most markets.
              </p>
            ),
          },
          {
            heading: "Get started",
            body: (
              <p>
                <a href="/registration" className="text-brand underline">
                  Register
                </a>
                , deposit via{" "}
                <a href="/payments" className="text-brand underline">
                  UPI or e-wallets
                </a>{" "}
                and claim your welcome bonus. Bet on desktop or via the{" "}
                <a href="/app" className="text-brand underline">
                  mobile app
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
