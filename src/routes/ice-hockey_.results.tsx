import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Ice Hockey Betting", url: "/ice-hockey" },
  { name: "Hockey Results", url: "/ice-hockey/results" },
];

export const Route = createFileRoute("/ice-hockey_/results")({
  head: () => ({
    meta: [
      { title: "Ice Hockey Results | NHL, KHL & IIHF Scores | 1xBET India" },
      {
        name: "description",
        content:
          "Latest ice hockey results and scores — NHL, KHL and IIHF World Championship outcomes, period scores and form guides at 1xBET India.",
      },
      { property: "og:title", content: "Ice Hockey Results | 1xBET India" },
      {
        property: "og:description",
        content: "NHL, KHL and IIHF hockey results — scores, period outcomes and form.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/ice-hockey/results` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-ice-hockey.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/ice-hockey/results` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Ice Hockey Results"
        description="Recent NHL, KHL and IIHF scores — period-by-period outcomes and form guides"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Latest hockey results",
            body: (
              <p>
                Recent scores across the NHL, KHL and international hockey — full-time results with
                period-by-period breakdowns, overtime and shootout outcomes. Results feed directly
                into form analysis for upcoming fixtures.
              </p>
            ),
          },
          {
            heading: "Using results for betting",
            body: (
              <p>
                Recent results reveal scoring trends (useful for totals), how often teams cover the
                puck line, home/away splits and back-to-back performance. Combine results with the{" "}
                <a href="/ice-hockey/schedule" className="text-brand underline">
                  hockey schedule
                </a>{" "}
                to spot tired teams, and with current{" "}
                <a href="/ice-hockey/odds" className="text-brand underline">
                  hockey odds
                </a>{" "}
                to find value.
              </p>
            ),
          },
          {
            heading: "More ice hockey betting",
            body: (
              <p>
                Also see{" "}
                <a href="/ice-hockey/nhl" className="text-brand underline">
                  NHL betting
                </a>
                ,{" "}
                <a href="/ice-hockey/khl" className="text-brand underline">
                  KHL betting
                </a>{" "}
                and{" "}
                <a href="/ice-hockey/live" className="text-brand underline">
                  live hockey
                </a>
                , or return to{" "}
                <a href="/ice-hockey" className="text-brand underline">
                  ice hockey betting
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
