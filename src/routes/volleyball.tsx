import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Sports", url: "/sports" },
  { name: "Volleyball Betting", url: "/volleyball" },
];

export const Route = createFileRoute("/volleyball")({
  head: () => ({
    meta: [
      { title: "Volleyball Betting India | VNL & World Championship Odds | 1xBET" },
      {
        name: "description",
        content:
          "Volleyball betting in India at 1xBET. Live odds on Nations League, world championships and club events — set handicap and totals in INR.",
      },
      { property: "og:title", content: "Volleyball Betting India | 1xBET" },
      {
        property: "og:description",
        content: "Live volleyball odds on VNL and world championships. Bet in INR at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/volleyball` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/volleyball` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Volleyball Betting India"
        description="Nations League, world championship and club volleyball odds — set and point markets"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Volleyball betting at 1xBET India",
            body: (
              <p>
                Volleyball betting covers the FIVB Nations League, World Championships, Olympic
                tournaments, Club World Championships and top domestic leagues across Italy, Brazil,
                Poland and Turkey — plus beach volleyball events.
              </p>
            ),
          },
          {
            heading: "Popular volleyball betting markets",
            body: (
              <>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Match winner — best-of-five set series</li>
                  <li>Set handicap — backing a team with a set advantage or deficit</li>
                  <li>Total points and total sets over/under</li>
                  <li>Set winner and correct set score</li>
                  <li>Outright tournament winner</li>
                </ul>
              </>
            ),
          },
          {
            heading: "Live volleyball betting",
            body: (
              <p>
                Sets and technical timeouts create constant in-play swings — follow live odds in the{" "}
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
                <a href="/table-tennis" className="text-brand underline">
                  table tennis
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
