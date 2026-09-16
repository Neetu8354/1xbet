import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/promo")({
  head: () => ({
    meta: [
      { title: "Promotions — 1xBET India" },
      {
        name: "description",
        content:
          "Exclusive promotions and bonuses at 1xBET India. Welcome bonus, cashback offers, free bets and special promotions.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/promo" }],
  }),
  component: () => (
    <SEOPage
      title="Promotions"
      description="Exclusive bonuses and promotions at 1xBET India"
      content={`
Take advantage of exclusive promotions at 1xBET India. We offer generous bonuses for new and existing players.

Current promotions include:
- Welcome bonus up to ₹10,000
- Weekly cashback offers
- Free bets on selected matches
- Accumulator boost bonuses
- Referral rewards

Check back regularly for the latest promotional offers.
      `}
    />
  ),
});
