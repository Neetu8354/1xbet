import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Table Tennis Betting", url: "/table-tennis" },
  { name: "WTT Betting", url: "/table-tennis/wtt" },
];

export const Route = createFileRoute("/table-tennis_/wtt")({
  head: () => ({
    meta: [
      { title: "WTT Betting India | Grand Smash & Champions Odds | 1xBET" },
      {
        name: "description",
        content:
          "WTT betting in India at 1xBET. Odds on Grand Smash, Champions and Contender events — handicaps, totals, correct score and outrights in INR.",
      },
      { property: "og:title", content: "WTT Betting India | 1xBET" },
      {
        property: "og:description",
        content: "WTT Grand Smash and Champions odds — handicaps, totals and outrights in INR.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/table-tennis/wtt` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-table-tennis.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/table-tennis/wtt` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="WTT Betting India"
        description="World Table Tennis odds — Grand Smash, Champions and Contender markets in INR"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "WTT betting at 1xBET India",
            body: (
              <p>
                World Table Tennis is the sport's professional tour — Grand Smash majors, Champions
                events for the top 32, and Star Contender/Contender stops filling out a year-round
                calendar. With ranking points and prize money on the line at every event, the WTT
                circuit is the centre of professional table tennis betting.
              </p>
            ),
          },
          {
            heading: "Popular WTT betting markets",
            body: (
              <>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Match winner</li>
                  <li>Game handicap — ±1.5 games</li>
                  <li>Total games and total points over/under</li>
                  <li>Correct score — 3-0, 3-1, 3-2 (4-x in best-of-seven)</li>
                  <li>Race-to-points markets</li>
                  <li>Outright tournament winner</li>
                </ul>
                <p className="mt-2">
                  Grand Smash events use best-of-seven from the quarterfinals onward — format
                  matters when pricing handicaps and totals.
                </p>
              </>
            ),
          },
          {
            heading: "More table tennis betting",
            body: (
              <p>
                Also see{" "}
                <a href="/table-tennis/ittf" className="text-brand underline">
                  ITTF betting
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
