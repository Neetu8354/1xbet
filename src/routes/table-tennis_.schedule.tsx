import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Table Tennis Betting", url: "/table-tennis" },
  { name: "Table Tennis Schedule", url: "/table-tennis/schedule" },
];

export const Route = createFileRoute("/table-tennis_/schedule")({
  head: () => ({
    meta: [
      { title: "Table Tennis Schedule | WTT & ITTF Fixtures | 1xBET India" },
      {
        name: "description",
        content:
          "Table tennis schedule and upcoming fixtures — WTT events, ITTF championships and league match dates and start times at 1xBET India.",
      },
      { property: "og:title", content: "Table Tennis Schedule | 1xBET India" },
      {
        property: "og:description",
        content: "Upcoming WTT, ITTF and league table tennis fixtures — dates and start times.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/table-tennis/schedule` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-table-tennis.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/table-tennis/schedule` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Table Tennis Schedule"
        description="Upcoming WTT, ITTF and league fixtures — dates, start times and key matchups"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Upcoming table tennis fixtures",
            body: (
              <p>
                Table tennis runs almost every day — the WTT circuit, ITTF events and domestic
                leagues in China, Germany and Eastern Europe keep a rolling calendar of matches.
                Check daily listings for start times and market availability.
              </p>
            ),
          },
          {
            heading: "Key events in the table tennis calendar",
            body: (
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Year-round — WTT Grand Smash, Champions and Contender events</li>
                <li>Year-round — domestic leagues (China, Germany, Eastern Europe)</li>
                <li>Annual — ITTF World Championships (team and individual, alternating)</li>
                <li>Annual — ITTF World Cup and continental championships</li>
                <li>Every four years — Olympic table tennis</li>
              </ul>
            ),
          },
          {
            heading: "Planning your betting",
            body: (
              <p>
                Players often compete in multiple matches per day — the schedule directly affects
                fatigue and results. Pair fixtures with{" "}
                <a href="/table-tennis/results" className="text-brand underline">
                  recent results
                </a>{" "}
                and current{" "}
                <a href="/table-tennis/odds" className="text-brand underline">
                  odds
                </a>
                , or bet in-play on{" "}
                <a href="/table-tennis/live" className="text-brand underline">
                  live table tennis
                </a>
                . Return to{" "}
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
