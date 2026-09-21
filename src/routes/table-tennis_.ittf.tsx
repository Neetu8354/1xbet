import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Table Tennis Betting", url: "/table-tennis" },
  { name: "ITTF Betting", url: "/table-tennis/ittf" },
];

export const Route = createFileRoute("/table-tennis_/ittf")({
  head: () => ({
    meta: [
      { title: "ITTF Betting India | World Championships Odds | 1xBET" },
      {
        name: "description",
        content:
          "ITTF World Table Tennis Championships betting in India at 1xBET. Match odds, handicaps, totals and outright markets in INR.",
      },
      { property: "og:title", content: "ITTF Betting India | 1xBET" },
      {
        property: "og:description",
        content: "ITTF World Championships odds — match markets, handicaps and outrights.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/table-tennis/ittf` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-table-tennis.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/table-tennis/ittf` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="ITTF Table Tennis Betting"
        description="World Championships and ITTF event odds — handicaps, totals and outrights in INR"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "ITTF betting at 1xBET India",
            body: (
              <p>
                The ITTF World Table Tennis Championships — alternating between team and individual
                events each year — are the sport's most prestigious titles alongside the Olympics.
                World Cups, continental championships and youth events complete the ITTF calendar.
              </p>
            ),
          },
          {
            heading: "Popular ITTF betting markets",
            body: (
              <>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Match winner and game handicap</li>
                  <li>Total games and total points</li>
                  <li>Correct score</li>
                  <li>Team event match markets</li>
                  <li>Outright champion and medal markets</li>
                </ul>
                <p className="mt-2">
                  Early rounds pit top seeds against qualifiers — set handicaps and correct-score
                  markets are the popular angles on heavy favourites.
                </p>
              </>
            ),
          },
          {
            heading: "More table tennis betting",
            body: (
              <p>
                Also see{" "}
                <a href="/table-tennis/wtt" className="text-brand underline">
                  WTT betting
                </a>
                ,{" "}
                <a href="/table-tennis/live" className="text-brand underline">
                  live table tennis
                </a>
                ,{" "}
                <a href="/table-tennis/odds" className="text-brand underline">
                  odds
                </a>
                ,{" "}
                <a href="/table-tennis/schedule" className="text-brand underline">
                  schedule
                </a>{" "}
                and{" "}
                <a href="/table-tennis/results" className="text-brand underline">
                  results
                </a>
                , or return to{" "}
                <a href="/table-tennis" className="text-brand underline">
                  table tennis betting
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
