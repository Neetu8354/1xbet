import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Volleyball Betting", url: "/volleyball" },
  { name: "World Championship Betting", url: "/volleyball/world-championship" },
];

export const Route = createFileRoute("/volleyball_/world-championship")({
  head: () => ({
    meta: [
      { title: "Volleyball World Championship Betting | Odds & Tips | 1xBET India" },
      {
        name: "description",
        content:
          "FIVB Volleyball World Championship betting in India at 1xBET. Match odds, set betting, totals and outright winner markets in INR.",
      },
      { property: "og:title", content: "Volleyball World Championship Betting | 1xBET India" },
      {
        property: "og:description",
        content: "World Championship volleyball odds — match markets, set betting and outrights.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/volleyball/world-championship` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-volleyball.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/volleyball/world-championship` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Volleyball World Championship Betting"
        description="FIVB World Championship odds — match markets, set betting, totals and outrights in INR"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "World Championship betting at 1xBET India",
            body: (
              <p>
                The FIVB Volleyball World Championship is the sport's premier national-team
                tournament, held every four years with the world's top-ranked men's and women's
                sides. Group-stage matches, knockout rounds, outright winner and top-scorer markets
                are priced throughout the event.
              </p>
            ),
          },
          {
            heading: "World Championship betting markets",
            body: (
              <>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Match winner and set handicap</li>
                  <li>Correct set score</li>
                  <li>Total points over/under</li>
                  <li>Group winners and qualification markets</li>
                  <li>Tournament outright winner</li>
                  <li>Top scorer and MVP specials</li>
                </ul>
                <p className="mt-2">
                  Coaches rotate heavily in early group games against lower-ranked teams — a key
                  angle for set handicap and correct-score markets.
                </p>
              </>
            ),
          },
          {
            heading: "More volleyball betting",
            body: (
              <p>
                Also see{" "}
                <a href="/volleyball/vnl" className="text-brand underline">
                  VNL betting
                </a>
                ,{" "}
                <a href="/volleyball/live" className="text-brand underline">
                  live volleyball
                </a>
                ,{" "}
                <a href="/volleyball/odds" className="text-brand underline">
                  odds
                </a>
                ,{" "}
                <a href="/volleyball/schedule" className="text-brand underline">
                  schedule
                </a>{" "}
                and{" "}
                <a href="/volleyball/results" className="text-brand underline">
                  results
                </a>
                , or return to{" "}
                <a href="/volleyball" className="text-brand underline">
                  volleyball betting
                </a>
                . Players must be 18+ — see{" "}
                <a href="/responsible-gaming" className="text-brand underline">
                  Responsible Gaming
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
