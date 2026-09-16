import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

export const Route = createFileRoute("/1xgames")({
  head: () => ({
    meta: [
      { title: "1xGames — Exclusive Instant & Crash Games | 1xBET India" },
      {
        name: "description",
        content:
          "Play exclusive 1xGames at 1xBET India. Crash, Apple of Fortune, Spin & Win, Gems Odyssey and more. Fast instant-win games playable in INR.",
      },
      { property: "og:title", content: "1xGames — 1xBET India" },
      {
        property: "og:description",
        content: "Exclusive crash and instant-win games at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.1xbetindia.live/1xgames" },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/1xgames" }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "1xGames", url: "/1xgames" },
        ]}
      />
      <SEOPage
        title="1xGames"
        description="Exclusive instant-win and crash games at 1xBET India"
        sections={[
          {
            heading: "What are 1xGames?",
            body: (
              <p>
                1xGames is our exclusive collection of fast-paced instant games you won't find on
                other platforms. Rounds last seconds, rules are simple, and results are instant —
                perfect between{" "}
                <a href="/live" className="text-brand underline">
                  live bets
                </a>{" "}
                or alongside the{" "}
                <a href="/casino" className="text-brand underline">
                  casino
                </a>
                .
              </p>
            ),
          },
          {
            heading: "Popular titles",
            body: (
              <p>
                <b>Crash</b> — watch the multiplier climb and cash out before it stops.{" "}
                <b>Apple of Fortune</b> — climb the grid picking apples and avoid the rotten ones.{" "}
                <b>Spin &amp; Win</b>, <b>Crystal</b>, <b>Gems Odyssey</b>, <b>Burning Hot</b>,{" "}
                <b>Mayan Tomb</b> and <b>Midgard Zombies</b> round out the collection. All games
                play in INR with stakes from just a few rupees.
              </p>
            ),
          },
          {
            heading: "Play anywhere",
            body: (
              <p>
                Every 1xGame runs in your browser on desktop and mobile — no download needed — or
                inside the{" "}
                <a href="/app" className="text-brand underline">
                  1xBET app
                </a>
                . Deposit instantly via{" "}
                <a href="/payments" className="text-brand underline">
                  UPI or e-wallets
                </a>{" "}
                and check current game bonuses on the{" "}
                <a href="/promotions" className="text-brand underline">
                  promotions
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
