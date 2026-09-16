import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: "Online Games — 1xBET India" },
      {
        name: "description",
        content:
          "Play online games at 1xBET India. 1xGames, crash games, instant win games, slots, TV games and more with real-money play in INR.",
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
        content={`
The 1xBET India games section offers fast-paced instant entertainment alongside our sportsbook and casino. All games are available in INR with instant payouts.

Game categories:
- 1xGames: exclusive instant-win titles like Apple of Fortune, Crash and Crystal
- Crash games: cash out before the multiplier stops
- Slots: hundreds of video slots with free spins and jackpots
- TV games: live game shows and wheel games
- Card games: poker, blackjack and solitaire variants

Popular titles include Crash, Apple of Fortune, Spin & Win, Gems Odyssey, Burning Hot and Midgard Zombies. New games are added regularly.

All games use certified random number generators and are playable on desktop and mobile.
        `}
      />
    </>
  ),
});
