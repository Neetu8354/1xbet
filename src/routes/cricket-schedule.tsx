import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Cricket Betting", url: "/cricket" },
  { name: "Cricket Schedule", url: "/cricket-schedule" },
];

export const Route = createFileRoute("/cricket-schedule")({
  head: () => ({
    meta: [
      { title: "Cricket Schedule | Upcoming IPL & International Fixtures | 1xBET India" },
      {
        name: "description",
        content:
          "Upcoming cricket fixtures at 1xBET India. IPL, T20, ODI and Test match schedules, tournament dates and start times for cricket betting.",
      },
      { property: "og:title", content: "Cricket Schedule | 1xBET India" },
      {
        property: "og:description",
        content: "Upcoming IPL and international cricket fixtures and tournament dates.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/cricket-schedule` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/cricket-schedule` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Cricket Schedule"
        description="Upcoming fixtures and tournament dates across IPL, T20, ODI and Test cricket"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Upcoming cricket fixtures",
            body: (
              <p>
                Plan your cricket betting with the fixture list across every format — IPL and
                franchise T20 leagues, bilateral ODI and T20I series, Test championships and ICC
                tournaments. Pre-match markets open ahead of each game, with start times shown in
                IST.
              </p>
            ),
          },
          {
            heading: "Major cricket tournaments",
            body: (
              <>
                <p>The headline events on the cricket calendar include:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    <a href="/ipl-betting" className="text-brand underline">
                      Indian Premier League
                    </a>{" "}
                    — March to May each year
                  </li>
                  <li>ICC Cricket World Cup and T20 World Cup</li>
                  <li>The Ashes and bilateral Test series</li>
                  <li>Big Bash League, SA20 and Caribbean Premier League</li>
                  <li>Ranji Trophy and India's domestic season</li>
                </ul>
              </>
            ),
          },
          {
            heading: "From schedule to bet slip",
            body: (
              <p>
                Found a fixture? Check recent form on{" "}
                <a href="/cricket-results" className="text-brand underline">
                  cricket results
                </a>
                , compare prices on{" "}
                <a href="/cricket-odds" className="text-brand underline">
                  cricket odds
                </a>
                , or wait for the first ball and bet in play via{" "}
                <a href="/cricket-live" className="text-brand underline">
                  live cricket betting
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
