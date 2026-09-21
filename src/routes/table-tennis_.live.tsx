import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Table Tennis Betting", url: "/table-tennis" },
  { name: "Live Table Tennis Betting", url: "/table-tennis/live" },
];

export const Route = createFileRoute("/table-tennis_/live")({
  head: () => ({
    meta: [
      { title: "Live Table Tennis Betting | In-Play WTT & League Odds | 1xBET India" },
      {
        name: "description",
        content:
          "Live table tennis betting in India — in-play odds on WTT and league matches. Game winners, handicaps, totals and race-to-points updated live.",
      },
      { property: "og:title", content: "Live Table Tennis Betting | 1xBET India" },
      {
        property: "og:description",
        content: "In-play table tennis odds — game winners, handicaps and race-to-points live.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/table-tennis/live` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-table-tennis.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/table-tennis/live` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Live Table Tennis Betting"
        description="In-play odds on WTT and league table tennis — repriced point by point"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Live table tennis betting at 1xBET India",
            body: (
              <>
                <img
                  src="/assets/seo/live-table-tennis-betting.webp"
                  alt="Live table tennis betting — point-by-point in-play odds"
                  width="1200"
                  height="500"
                  fetchPriority="high"
                  decoding="async"
                  className="mb-3 w-full rounded-lg border"
                />
                <p>
                  Table tennis is one of the fastest live betting sports — games run to 11 points in
                  minutes, and a single service run can flip game-winner odds instantly. Markets
                  reprice after every rally and reset between games.
                </p>
              </>
            ),
          },
          {
            heading: "In-play table tennis markets",
            body: (
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Live match winner</li>
                <li>Next-game winner</li>
                <li>Live game and points handicaps</li>
                <li>Total points over/under</li>
                <li>Race to 3, 5 or 11 points</li>
              </ul>
            ),
          },
          {
            heading: "When to bet live",
            body: (
              <p>
                The cleanest windows are between games, when prices reset, and after an early
                underdog lead — favourites who drop the first game are often still overpriced
                in-play. Check the{" "}
                <a href="/table-tennis/schedule" className="text-brand underline">
                  table tennis schedule
                </a>{" "}
                for today's matches.
              </p>
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
                <a href="/table-tennis/ittf" className="text-brand underline">
                  ITTF betting
                </a>
                ,{" "}
                <a href="/table-tennis/odds" className="text-brand underline">
                  odds
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
