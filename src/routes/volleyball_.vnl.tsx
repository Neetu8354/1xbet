import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Volleyball Betting", url: "/volleyball" },
  { name: "VNL Betting", url: "/volleyball/vnl" },
];

export const Route = createFileRoute("/volleyball_/vnl")({
  head: () => ({
    meta: [
      { title: "VNL Betting India | Volleyball Nations League Odds | 1xBET" },
      {
        name: "description",
        content:
          "Volleyball Nations League betting in India at 1xBET. Odds on every VNL match — set betting, handicaps, totals and outrights in INR.",
      },
      { property: "og:title", content: "VNL Betting India | 1xBET" },
      {
        property: "og:description",
        content: "Volleyball Nations League odds — set betting, handicaps and totals in INR.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/volleyball/vnl` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-volleyball.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/volleyball/vnl` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="VNL Betting India"
        description="Volleyball Nations League odds on every match — set betting, handicaps and totals in INR"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "VNL betting at 1xBET India",
            body: (
              <p>
                The Volleyball Nations League is the biggest annual national-team tournament — 16
                men's and 16 women's teams playing a multi-week preliminary phase across host
                cities, followed by the finals. With several matches per day through the summer, the
                VNL is the busiest volleyball betting window of the year.
              </p>
            ),
          },
          {
            heading: "Popular VNL betting markets",
            body: (
              <>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Match winner</li>
                  <li>Set handicap — ±1.5 sets</li>
                  <li>Correct set score — 3-0, 3-1, 3-2</li>
                  <li>Total points over/under</li>
                  <li>Individual set winners and set totals</li>
                  <li>VNL outright winner</li>
                </ul>
                <p className="mt-2">
                  Squad rotation is the key VNL factor — coaches rest starters during the long
                  preliminary round, especially against weaker opponents. Check announced lineups
                  before betting set handicaps or correct scores.
                </p>
              </>
            ),
          },
          {
            heading: "More volleyball betting",
            body: (
              <p>
                Also see{" "}
                <a href="/volleyball/world-championship" className="text-brand underline">
                  World Championship betting
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
