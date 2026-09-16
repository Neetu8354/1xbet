import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

export const Route = createFileRoute("/promotions")({
  head: () => ({
    meta: [
      { title: "Promotions & Bonuses — Welcome Bonus ₹10,000 | 1xBET India" },
      {
        name: "description",
        content:
          "Latest promotions at 1xBET India. 100% welcome bonus up to ₹10,000, weekly cashback, free bets, accumulator boosts and loyalty rewards. Full terms apply.",
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
        description="Welcome bonus, cashback, free bets and loyalty rewards"
        sections={[
          {
            heading: "Welcome bonus — 100% up to ₹10,000",
            body: (
              <p>
                New players at 1xBET India receive a 100% first deposit bonus up to ₹10,000.{" "}
                <a href="/registration" className="text-brand underline">
                  Register
                </a>
                , deposit at least ₹100 via any{" "}
                <a href="/payments" className="text-brand underline">
                  payment method
                </a>
                , and the bonus is credited automatically.
              </p>
            ),
          },
          {
            heading: "Ongoing promotions",
            body: (
              <p>
                Regular offers include weekly cashback on sports betting, free bets on featured{" "}
                <a href="/cricket" className="text-brand underline">
                  cricket
                </a>{" "}
                and{" "}
                <a href="/football" className="text-brand underline">
                  football
                </a>{" "}
                matches, accumulator boosts that increase multi-bet winnings, loyalty rewards for
                regular players and a birthday bonus for verified accounts.
              </p>
            ),
          },
          {
            heading: "How to claim a promotion",
            body: (
              <p>
                Log in, open the promotions page, opt in to the offer you want, meet the qualifying
                deposit or betting requirement, and the bonus is credited automatically. Each
                promotion has its own wagering requirements, minimum odds and validity period —
                always read the full terms before participating.
              </p>
            ),
          },
          {
            heading: "Promotion terms",
            body: (
              <p>
                All bonuses are subject to the promotion-specific terms and our general{" "}
                <a href="/terms" className="text-brand underline">
                  Terms and Conditions
                </a>
                . Bonuses are for players aged 18+ and one per account/household unless stated. Play
                responsibly — see our{" "}
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
