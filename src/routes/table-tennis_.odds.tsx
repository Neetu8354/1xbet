import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Table Tennis Betting", url: "/table-tennis" },
  { name: "Table Tennis Odds", url: "/table-tennis/odds" },
];

export const Route = createFileRoute("/table-tennis_/odds")({
  head: () => ({
    meta: [
      { title: "Table Tennis Odds | WTT, ITTF & League Lines | 1xBET India" },
      {
        name: "description",
        content:
          "Latest table tennis odds at 1xBET India — match winner, game handicap and totals on WTT, ITTF and league matches, updated pre-match and live in INR.",
      },
      { property: "og:title", content: "Table Tennis Odds | 1xBET India" },
      {
        property: "og:description",
        content: "WTT, ITTF and league table tennis odds — handicaps, totals and correct score.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/table-tennis/odds` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-table-tennis.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/table-tennis/odds` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Table Tennis Odds"
        description="Match winner, game handicap and totals on WTT, ITTF and league matches"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "How table tennis odds work",
            body: (
              <p>
                Table tennis odds are shown in decimal format — stake × price = total return. With
                no draws and two-way markets, favourites price short, so most value sits in game
                handicaps, correct scores and totals. Odds move on ranking gaps, head-to-head
                records and same-day scheduling.
              </p>
            ),
          },
          {
            heading: "Reading the main table tennis lines",
            body: (
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Match winner — two-way, no draw</li>
                <li>Game handicap — usually ±1.5 games</li>
                <li>Correct score — exact game result (3-0, 3-1, 3-2)</li>
                <li>Total games and total points over/under</li>
                <li>Race-to-points — first to 3, 5 or 11 in a game</li>
              </ul>
            ),
          },
          {
            heading: "Pre-match vs live odds",
            body: (
              <p>
                Matches are short, so{" "}
                <a href="/table-tennis/live" className="text-brand underline">
                  live odds
                </a>{" "}
                dominate the action — repricing after every point. Check the{" "}
                <a href="/table-tennis/schedule" className="text-brand underline">
                  table tennis schedule
                </a>{" "}
                for today's matches and{" "}
                <a href="/table-tennis/results" className="text-brand underline">
                  results
                </a>{" "}
                for recent form. Return to{" "}
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
