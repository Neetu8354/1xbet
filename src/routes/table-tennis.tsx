import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Sports", url: "/sports" },
  { name: "Table Tennis Betting", url: "/table-tennis" },
];

export const Route = createFileRoute("/table-tennis")({
  head: () => ({
    meta: [
      { title: "Table Tennis Betting India | WTT & ITTF Odds | 1xBET" },
      {
        name: "description",
        content:
          "Table tennis betting in India at 1xBET. Live odds on WTT events, ITTF championships and daily matches — game handicap and totals in INR.",
      },
      { property: "og:title", content: "Table Tennis Betting India | 1xBET" },
      {
        property: "og:description",
        content: "Live table tennis odds on WTT and ITTF events. Bet in INR at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/table-tennis` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/table-tennis` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Table Tennis Betting India"
        description="WTT, ITTF championship and daily league odds — game and point markets, pre-match and live"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Table tennis betting at 1xBET India",
            body: (
              <p>
                Table tennis is one of the busiest sports on the book — WTT Grand Smashes and
                Champions events, ITTF World Championships, Olympic competition and daily league
                fixtures across Europe and Asia mean matches run around the clock.
              </p>
            ),
          },
          {
            heading: "Popular table tennis betting markets",
            body: (
              <>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Match winner — best-of-five or best-of-seven games</li>
                  <li>Game handicap — adjusted game advantage or deficit</li>
                  <li>Total points and total games over/under</li>
                  <li>Correct score in games — 3-0, 3-1, 3-2 and more</li>
                  <li>Race to X points and first-game winner</li>
                </ul>
              </>
            ),
          },
          {
            heading: "Live table tennis betting",
            body: (
              <p>
                Games run to 11 points and turn fast — live odds move on every rally. Bet in play in
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
                <a href="/badminton" className="text-brand underline">
                  badminton
                </a>{" "}
                and{" "}
                <a href="/tennis" className="text-brand underline">
                  tennis
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
