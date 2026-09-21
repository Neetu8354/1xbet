import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Volleyball Betting", url: "/volleyball" },
  { name: "Volleyball Schedule", url: "/volleyball/schedule" },
];

export const Route = createFileRoute("/volleyball_/schedule")({
  head: () => ({
    meta: [
      { title: "Volleyball Schedule | VNL & International Fixtures | 1xBET India" },
      {
        name: "description",
        content:
          "Volleyball schedule and upcoming fixtures — VNL, World Championship, club league and beach volleyball match dates at 1xBET India.",
      },
      { property: "og:title", content: "Volleyball Schedule | 1xBET India" },
      {
        property: "og:description",
        content: "Upcoming VNL, club and international volleyball fixtures and start times.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/volleyball/schedule` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-volleyball.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/volleyball/schedule` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Volleyball Schedule"
        description="Upcoming VNL, World Championship, club and beach volleyball fixtures"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Upcoming volleyball fixtures",
            body: (
              <p>
                Volleyball runs nearly year-round — club leagues play through autumn and spring, the
                VNL fills the summer window, and World Championships and Olympic tournaments anchor
                the international calendar. Check daily listings for start times, lineups and market
                availability.
              </p>
            ),
          },
          {
            heading: "Key dates in the volleyball calendar",
            body: (
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>October–April — European club league seasons (SuperLega, PlusLiga)</li>
                <li>December — FIVB Club World Championship</li>
                <li>May–July — Volleyball Nations League</li>
                <li>Summer — Beach Pro Tour stops</li>
                <li>August–September — World Championship / continental championships</li>
              </ul>
            ),
          },
          {
            heading: "Planning your betting",
            body: (
              <p>
                Congested VNL weeks and club double-fixtures create rotation and fatigue spots worth
                targeting. Pair fixtures with{" "}
                <a href="/volleyball/results" className="text-brand underline">
                  recent results
                </a>{" "}
                and current{" "}
                <a href="/volleyball/odds" className="text-brand underline">
                  odds
                </a>
                , or bet in-play on{" "}
                <a href="/volleyball/live" className="text-brand underline">
                  live volleyball
                </a>
                . Return to{" "}
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
