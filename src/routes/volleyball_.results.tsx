import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Volleyball Betting", url: "/volleyball" },
  { name: "Volleyball Results", url: "/volleyball/results" },
];

export const Route = createFileRoute("/volleyball_/results")({
  head: () => ({
    meta: [
      { title: "Volleyball Results | VNL, World & Club Scores | 1xBET India" },
      {
        name: "description",
        content:
          "Latest volleyball results and scores — VNL, World Championship and club league outcomes with set-by-set breakdowns at 1xBET India.",
      },
      { property: "og:title", content: "Volleyball Results | 1xBET India" },
      {
        property: "og:description",
        content: "VNL, World Championship and club volleyball results — set-by-set scores.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/volleyball/results` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-volleyball.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/volleyball/results` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Volleyball Results"
        description="Recent VNL, World Championship and club league scores — set-by-set outcomes and form guides"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Latest volleyball results",
            body: (
              <p>
                Recent scores across the VNL, World Championships, club leagues and beach volleyball
                — full match results with set-by-set breakdowns. Results feed directly into form
                analysis for upcoming fixtures.
              </p>
            ),
          },
          {
            heading: "Using results for betting",
            body: (
              <p>
                Set differentials reveal more than win-loss records — a team losing 2-3 repeatedly
                is stronger than its results suggest, which matters for handicap and totals markets.
                Combine results with the{" "}
                <a href="/volleyball/schedule" className="text-brand underline">
                  volleyball schedule
                </a>{" "}
                to spot fatigue spots, and with current{" "}
                <a href="/volleyball/odds" className="text-brand underline">
                  volleyball odds
                </a>{" "}
                to find value.
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
                </a>{" "}
                and{" "}
                <a href="/volleyball/live" className="text-brand underline">
                  live volleyball
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
