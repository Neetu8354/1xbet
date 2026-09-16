import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/toto")({
  head: () => ({
    meta: [
      { title: "Toto — 1xBET India" },
      {
        name: "description",
        content:
          "Play Toto pools at 1xBET India. Predict match outcomes and win big with our lottery-style betting games.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/toto" }],
  }),
  component: () => (
    <SEOPage
      title="Toto"
      description="Toto pools and lottery betting at 1xBET India"
      content={`
Try your luck with Toto at 1xBET India. Predict match outcomes and win big prizes.

Toto betting options:
- Football pool predictions
- Correct score challenges
- Weekly jackpot draws
- Multiple entry options

Join our Toto pools for a chance to win big.
      `}
    />
  ),
});
