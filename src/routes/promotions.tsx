import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

export const Route = createFileRoute("/promotions")({
  head: () => ({
    meta: [
      { title: "Promotions & Bonuses — 1xBET India" },
      {
        name: "description",
        content:
          "Latest promotions and bonuses at 1xBET India. 100% welcome bonus up to ₹10,000, cashback offers, free bets, accumulator boosts and loyalty rewards.",
      },
      { property: "og:title", content: "Promotions & Bonuses — 1xBET India" },
      {
        property: "og:description",
        content: "Welcome bonus, cashback, free bets and special offers at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.1xbetindia.live/promotions" },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/promotions" }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Promotions", url: "/promotions" },
        ]}
      />
      <SEOPage
        title="Promotions & Bonuses"
        description="Exclusive bonuses and promotional offers at 1xBET India"
        content={`
Take advantage of exclusive promotions at 1xBET India. We offer generous bonuses for new and existing players.

Current promotions:
- Welcome bonus: 100% first deposit bonus up to ₹10,000
- Weekly cashback on sports betting losses
- Free bets on selected cricket and football matches
- Accumulator boost: increased odds on multi-bets
- Loyalty program with exclusive rewards
- Birthday bonus for verified accounts

How to claim:
1. Register or log in to your 1xBET India account
2. Opt in to the promotion on the Promotions page
3. Meet the qualifying deposit or betting requirements
4. The bonus is credited automatically

All promotions are subject to terms and conditions, including wagering requirements and minimum odds. Please read the full terms on each offer before participating. Players must be 18 or older.
        `}
      />
    </>
  ),
});
