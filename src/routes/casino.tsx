import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

export const Route = createFileRoute("/casino")({
  head: () => ({
    meta: [
      { title: "Online Casino — Slots, Roulette & Blackjack | 1xBET India" },
      {
        name: "description",
        content:
          "Play online casino games at 1xBET India. Hundreds of slots, roulette, blackjack, baccarat and jackpot games. Exclusive bonuses and fast INR payouts.",
      },
      { property: "og:title", content: "Online Casino — 1xBET India" },
      {
        property: "og:description",
        content: "Slots, roulette, blackjack, baccarat and jackpots at 1xBET India casino.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.1xbetindia.live/casino" },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/casino" }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Casino", url: "/casino" },
        ]}
      />
      <SEOPage
        title="Online Casino"
        description="Hundreds of slots and table games at 1xBET India"
        sections={[
          {
            heading: "Casino games at 1xBET India",
            body: (
              <p>
                Our casino lobby features hundreds of titles from leading providers: video slots,
                classic slots, progressive jackpots, roulette, blackjack, baccarat, poker and
                instant-win games. Every game runs on certified random number generators, plays in
                INR, and works on both desktop and the{" "}
                <a href="/app" className="text-brand underline">
                  mobile app
                </a>
                .
              </p>
            ),
          },
          {
            heading: "Slots and jackpots",
            body: (
              <p>
                Spin popular slots with free spins, bonus rounds, multipliers and progressive
                jackpots. New titles are added weekly, and favourites like Burning Hot, Gems Odyssey
                and Mayan Tomb are available instantly. For something different, our exclusive{" "}
                <a href="/1xgames" className="text-brand underline">
                  1xGames
                </a>{" "}
                such as Crash and Apple of Fortune offer fast-paced instant wins.
              </p>
            ),
          },
          {
            heading: "Table games and live dealers",
            body: (
              <p>
                Prefer the felt? Play roulette, blackjack, baccarat and poker against the computer,
                or step into our{" "}
                <a href="/live-casino" className="text-brand underline">
                  live casino
                </a>{" "}
                where real dealers host HD-streamed tables 24/7 — including game shows and TV games.
              </p>
            ),
          },
          {
            heading: "Casino bonuses",
            body: (
              <p>
                New players get a 100% welcome bonus up to ₹10,000 usable on casino games, plus
                regular free spins, cashback and tournament promotions — see the{" "}
                <a href="/promotions" className="text-brand underline">
                  promotions
                </a>{" "}
                page for current offers and wagering terms.
              </p>
            ),
          },
          {
            heading: "Deposits, withdrawals and responsible play",
            body: (
              <p>
                Fund your account instantly with{" "}
                <a href="/payments" className="text-brand underline">
                  UPI, Paytm, PhonePe or cards
                </a>{" "}
                — minimum deposit ₹100. Casino play is for players 18+; set limits via our{" "}
                <a href="/responsible-gaming" className="text-brand underline">
                  Responsible Gaming
                </a>{" "}
                tools.
              </p>
            ),
          },
        ]}
      />
    </>
  ),
});
