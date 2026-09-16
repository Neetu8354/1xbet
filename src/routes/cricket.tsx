import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/cricket")({
  head: () => ({
    meta: [
      { title: "Cricket Betting — 1xBET India" },
      {
        name: "description",
        content:
          "Cricket betting at 1xBET India. Bet on IPL, international cricket, T20, ODI and Test matches. Best odds, live betting and instant payouts.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/cricket/" }],
  }),
  component: () => (
    <SEOPage
      title="Cricket Betting"
      description="Bet on cricket matches at 1xBET India"
      content={`
1xBET India offers the best cricket betting experience for Indian players. From IPL to international Test matches, we cover all formats of the game.

Cricket betting options at 1xBET India:
- IPL and domestic T20 leagues
- International cricket (India, Australia, England)
- Test matches, ODIs and T20s
- Player performance markets
- Live in-play cricket betting

Get competitive odds on every match and enjoy fast payouts with our trusted platform.
      `}
    />
  ),
});
