import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Sports", url: "/sports" },
  { name: "Boxing & MMA Betting", url: "/boxing" },
];

export const Route = createFileRoute("/boxing")({
  head: () => ({
    meta: [
      { title: "Boxing & MMA Betting India | UFC & Fight Night Odds | 1xBET" },
      {
        name: "description",
        content:
          "Boxing and MMA betting in India at 1xBET. Live odds on UFC, title fights and major cards — method of victory, rounds and outrights in INR.",
      },
      { property: "og:title", content: "Boxing & MMA Betting India | 1xBET" },
      {
        property: "og:description",
        content: "Live boxing and UFC odds — method of victory and round markets in INR.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/boxing` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/boxing` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Boxing & MMA Betting India"
        description="UFC, boxing title fights and major combat sports cards — method of victory and round markets"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Boxing & MMA betting at 1xBET India",
            body: (
              <p>
                Combat sports betting covers UFC fight nights and pay-per-view cards, major boxing
                title fights across the heavyweight and lower divisions, plus Bellator, ONE
                Championship and kickboxing events.
              </p>
            ),
          },
          {
            heading: "Popular fight betting markets",
            body: (
              <>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Fight winner — moneyline on each bout</li>
                  <li>Method of victory — KO/TKO, submission, decision or draw</li>
                  <li>Round betting — which round the fight ends in</li>
                  <li>Total rounds over/under and fight to go the distance</li>
                  <li>Fight of the night and card outrights</li>
                </ul>
              </>
            ),
          },
          {
            heading: "Live fight betting",
            body: (
              <p>
                One punch can end it — live odds swing on knockdowns, takedowns and scorecards in
                the{" "}
                <a href="/live" className="text-brand underline">
                  live betting
                </a>{" "}
                section. Players must be 18+ — see{" "}
                <a href="/responsible-gaming" className="text-brand underline">
                  Responsible Gaming
                </a>
                .
              </p>
            ),
          },
          {
            heading: "More sports",
            body: (
              <p>
                Explore{" "}
                <a href="/cricket" className="text-brand underline">
                  cricket
                </a>
                ,{" "}
                <a href="/football" className="text-brand underline">
                  football
                </a>{" "}
                and{" "}
                <a href="/esports" className="text-brand underline">
                  esports
                </a>
                , or browse all markets on the{" "}
                <a href="/sports" className="text-brand underline">
                  sports betting hub
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
