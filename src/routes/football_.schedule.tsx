import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

export const Route = createFileRoute("/football_/schedule")({
  head: () => ({
    meta: [
      { title: "Football Schedule — Fixtures & Kick-Off Times | 1xBET India" },
      {
        name: "description",
        content:
          "Football fixture schedule at 1xBET India. Upcoming EPL, Champions League, La Liga, Serie A and ISL matches with kick-off times and live odds.",
      },
      { property: "og:title", content: "Football Schedule — 1xBET India" },
      {
        property: "og:description",
        content: "Upcoming football fixtures and kick-off times at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/football/schedule` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/football/schedule` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Football", url: "/football" },
          { name: "Schedule", url: "/football/schedule" },
        ]}
      />
      <SEOPage
        title="Football Schedule"
        description="Upcoming fixtures and kick-off times across all major leagues"
        sections={[
          {
            heading: "Today's and upcoming fixtures",
            body: (
              <p>
                The football fixture list at 1xBET India covers every major competition — the{" "}
                <a href="/football" className="text-brand underline">
                  football betting
                </a>{" "}
                section lists today's matches, tomorrow's games and the weeks ahead with kick-off
                times in IST, pre-match odds and market counts for every fixture.
              </p>
            ),
          },
          {
            heading: "Weekend league schedule",
            body: (
              <p>
                Saturdays and Sundays are peak football days: Premier League, La Liga, Serie A,
                Bundesliga and ISL fixtures run from afternoon through late night IST. Midweek is
                Champions League and Europa League time. Filter by league or date to build your
                coupon in advance.
              </p>
            ),
          },
          {
            heading: "Follow matches live",
            body: (
              <p>
                Once a match kicks off it moves to the{" "}
                <a href="/live" className="text-brand underline">
                  live betting
                </a>{" "}
                section with real-time odds, match stats and cash out. Finished games appear on the{" "}
                <a href="/results" className="text-brand underline">
                  results
                </a>{" "}
                page, and form data is always available in{" "}
                <a href="/statistics" className="text-brand underline">
                  statistics
                </a>
                .
              </p>
            ),
          },
          {
            heading: "Plan your bets",
            body: (
              <p>
                Check the schedule early for the best pre-match prices, compare markets in our{" "}
                <a href="/football/odds" className="text-brand underline">
                  odds guide
                </a>
                , and read{" "}
                <a href="/football/tips" className="text-brand underline">
                  betting tips
                </a>{" "}
                before staking. Odds shown are indicative and update in real time.
              </p>
            ),
          },
        ]}
      />
    </>
  ),
});
