import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Basketball Betting", url: "/basketball" },
  { name: "Basketball Schedule", url: "/basketball/schedule" },
];

export const Route = createFileRoute("/basketball_/schedule")({
  head: () => ({
    meta: [
      { title: "Basketball Schedule | Upcoming NBA & EuroLeague Fixtures | 1xBET" },
      {
        name: "description",
        content:
          "Upcoming basketball fixtures at 1xBET India. NBA, EuroLeague and international game schedules and start times for basketball betting.",
      },
      { property: "og:title", content: "Basketball Schedule | 1xBET India" },
      {
        property: "og:description",
        content: "Upcoming NBA, EuroLeague and international basketball fixtures and dates.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/basketball/schedule` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/basketball/schedule` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Basketball Schedule"
        description="Upcoming fixtures across NBA, EuroLeague and international basketball"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Upcoming basketball fixtures",
            body: (
              <p>
                Plan your basketball betting with the fixture list across every major competition —
                NBA regular season and playoffs, EuroLeague rounds, domestic leagues and FIBA
                tournaments. Pre-match markets open ahead of each game with tip-off times shown in
                IST.
              </p>
            ),
          },
          {
            heading: "Major basketball competitions",
            body: (
              <>
                <p>The headline events on the basketball calendar include:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    <a href="/basketball/nba" className="text-brand underline">
                      NBA
                    </a>{" "}
                    — October to June, plus the play-in tournament and Finals
                  </li>
                  <li>
                    <a href="/basketball/euroleague" className="text-brand underline">
                      EuroLeague
                    </a>{" "}
                    — October to the Final Four in May
                  </li>
                  <li>FIBA World Cup, Olympic basketball and continental championships</li>
                  <li>Spain ACB, Australia NBL and other domestic leagues</li>
                </ul>
              </>
            ),
          },
          {
            heading: "From schedule to bet slip",
            body: (
              <p>
                Found a game? Check recent form on{" "}
                <a href="/basketball/results" className="text-brand underline">
                  basketball results
                </a>
                , compare prices on{" "}
                <a href="/basketball/odds" className="text-brand underline">
                  odds
                </a>
                , or wait for tip-off and bet in play via{" "}
                <a href="/basketball/live" className="text-brand underline">
                  live basketball betting
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
