import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Volleyball Betting", url: "/volleyball" },
  { name: "Live Volleyball Betting", url: "/volleyball/live" },
];

export const Route = createFileRoute("/volleyball_/live")({
  head: () => ({
    meta: [
      { title: "Live Volleyball Betting | In-Play VNL & League Odds | 1xBET India" },
      {
        name: "description",
        content:
          "Live volleyball betting in India — in-play odds on VNL, club leagues and international matches. Set winners, handicaps and totals updated point by point.",
      },
      { property: "og:title", content: "Live Volleyball Betting | 1xBET India" },
      {
        property: "og:description",
        content: "In-play volleyball odds — set winners, handicaps and totals updated live.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/volleyball/live` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-volleyball.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/volleyball/live` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Live Volleyball Betting"
        description="In-play odds on VNL, club and international volleyball — updated point by point"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Live volleyball betting at 1xBET India",
            body: (
              <>
                <img
                  src="/assets/seo/live-volleyball-betting.webp"
                  alt="Live volleyball betting — in-play set betting and totals markets"
                  width="1200"
                  height="500"
                  fetchPriority="high"
                  decoding="async"
                  className="mb-3 w-full rounded-lg border"
                />
                <p>
                  Live volleyball betting reprices after every set and during scoring runs — a
                  service run of four or five points can flip set-winner prices quickly. Odds reset
                  between sets, creating clean entry points throughout the match.
                </p>
              </>
            ),
          },
          {
            heading: "In-play volleyball markets",
            body: (
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Live match winner</li>
                <li>Next-set winner and set totals</li>
                <li>Live handicaps and updated total points</li>
                <li>Race-to-X points markets</li>
                <li>Correct set score updates</li>
              </ul>
            ),
          },
          {
            heading: "When to bet live",
            body: (
              <p>
                The best windows are between sets, when prices reset, and mid-set after a momentum
                swing — favourites who drop the first set are often still overpriced in-play. Check
                the{" "}
                <a href="/volleyball/schedule" className="text-brand underline">
                  volleyball schedule
                </a>{" "}
                for today's matches.
              </p>
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
                <a href="/volleyball/world-championship" className="text-brand underline">
                  World Championship betting
                </a>
                ,{" "}
                <a href="/volleyball/odds" className="text-brand underline">
                  odds
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
