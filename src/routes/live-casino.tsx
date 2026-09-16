import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

export const Route = createFileRoute("/live-casino")({
  head: () => ({
    meta: [
      { title: "Live Casino — Real Dealers, Roulette & Blackjack | 1xBET India" },
      {
        name: "description",
        content:
          "Play live casino games at 1xBET India. Real dealers host blackjack, roulette, baccarat, poker and game shows in HD, 24/7. Play in INR.",
      },
      { property: "og:title", content: "Live Casino — 1xBET India" },
      {
        property: "og:description",
        content: "Real-dealer blackjack, roulette, baccarat and game shows at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.1xbetindia.live/live-casino" },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/live-casino" }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Live Casino", url: "/live-casino" },
        ]}
      />
      <SEOPage
        title="Live Casino"
        description="Real dealers, real tables, streamed in HD — 24/7"
        sections={[
          {
            heading: "The live casino experience",
            body: (
              <p>
                1xBET India's live casino brings a real casino floor to your screen. Professional
                dealers host tables streamed in HD around the clock — join a seat, place your bets
                in INR and interact with the dealer and other players in real time.
              </p>
            ),
          },
          {
            heading: "Live games on offer",
            body: (
              <p>
                Our live lobby includes blackjack, roulette, baccarat, casino poker variants, Andar
                Bahar, Teen Patti, Sic Bo, dragon tiger and wheel-based game shows. Tables run 24/7
                with a range of stakes to suit casual players and high rollers alike. For instant
                alternatives, try{" "}
                <a href="/1xgames" className="text-brand underline">
                  1xGames
                </a>{" "}
                or our main{" "}
                <a href="/casino" className="text-brand underline">
                  casino
                </a>{" "}
                lobby.
              </p>
            ),
          },
          {
            heading: "Play live casino on mobile",
            body: (
              <p>
                Every live table is optimised for mobile — download the{" "}
                <a href="/app" className="text-brand underline">
                  1xBET app
                </a>{" "}
                for Android or iOS, or play directly in your browser with no installation. Streams
                adapt to your connection for smooth play even on 4G.
              </p>
            ),
          },
          {
            heading: "Payments and fair play",
            body: (
              <p>
                Live casino play uses the same wallet as the sportsbook — deposit instantly via{" "}
                <a href="/payments" className="text-brand underline">
                  UPI, Paytm or NetBanking
                </a>
                . All live games come from licensed providers with certified dealing procedures.
                Players must be 18+; set limits on our{" "}
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
