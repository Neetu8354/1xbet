import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Ice Hockey Betting", url: "/ice-hockey" },
  { name: "Hockey Schedule", url: "/ice-hockey/schedule" },
];

export const Route = createFileRoute("/ice-hockey_/schedule")({
  head: () => ({
    meta: [
      { title: "Ice Hockey Schedule | NHL, KHL & IIHF Fixtures | 1xBET India" },
      {
        name: "description",
        content:
          "Ice hockey schedule and upcoming fixtures — NHL, KHL and IIHF World Championship game dates and start times at 1xBET India.",
      },
      { property: "og:title", content: "Ice Hockey Schedule | 1xBET India" },
      {
        property: "og:description",
        content: "Upcoming NHL, KHL and IIHF hockey fixtures — dates and start times.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/ice-hockey/schedule` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-ice-hockey.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/ice-hockey/schedule` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Ice Hockey Schedule"
        description="Upcoming NHL, KHL and IIHF fixtures — dates, start times and key matchups"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Upcoming hockey fixtures",
            body: (
              <p>
                The hockey calendar runs nearly year-round: the KHL season starts in September, the
                NHL in October, and the IIHF World Championship lands each May after the Stanley Cup
                playoffs begin. Check daily listings for puck-drop times, starting goalies and
                market availability.
              </p>
            ),
          },
          {
            heading: "Key dates in the hockey calendar",
            body: (
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>September — KHL regular season begins</li>
                <li>October — NHL regular season begins</li>
                <li>December–January — IIHF World Junior Championship</li>
                <li>March — Gagarin Cup playoffs; NHL trade deadline</li>
                <li>April–June — Stanley Cup playoffs</li>
                <li>May — IIHF World Championship</li>
              </ul>
            ),
          },
          {
            heading: "Planning your betting",
            body: (
              <p>
                The schedule matters for hockey analysis — teams on back-to-backs or long road trips
                underperform their season averages. Pair fixtures with{" "}
                <a href="/ice-hockey/results" className="text-brand underline">
                  recent results
                </a>{" "}
                and current{" "}
                <a href="/ice-hockey/odds" className="text-brand underline">
                  odds
                </a>
                , or bet in-play on{" "}
                <a href="/ice-hockey/live" className="text-brand underline">
                  live hockey
                </a>
                . Return to{" "}
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
