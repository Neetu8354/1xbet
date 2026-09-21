import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Esports Betting", url: "/esports" },
  { name: "Esports Schedule", url: "/esports-schedule" },
];

export const Route = createFileRoute("/esports-schedule")({
  head: () => ({
    meta: [
      { title: "Esports Schedule | Upcoming CS2, Dota 2, LoL & Valorant Fixtures | 1xBET" },
      {
        name: "description",
        content:
          "Upcoming esports fixtures at 1xBET India. CS2, Dota 2, League of Legends and Valorant match schedules, tournaments and start times.",
      },
      { property: "og:title", content: "Esports Schedule | 1xBET India" },
      {
        property: "og:description",
        content: "Upcoming CS2, Dota 2, LoL and Valorant fixtures and tournament schedules.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/esports-schedule` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/esports-schedule` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Esports Schedule"
        description="Upcoming fixtures and tournament dates for CS2, Dota 2, LoL and Valorant"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Upcoming esports fixtures",
            body: (
              <p>
                Plan your esports betting with upcoming fixtures across Counter-Strike 2, Dota 2,
                League of Legends and Valorant — from daily league matches to Majors, The
                International, Worlds and Valorant Champions. Match start times are shown with
                pre-match markets opening ahead of each series.
              </p>
            ),
          },
          {
            heading: "Major esports tournaments",
            body: (
              <>
                <p>The headline events on the esports calendar include:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    <a href="/cs2-betting" className="text-brand underline">
                      CS2
                    </a>{" "}
                    — ESL Pro League, IEM, BLAST Premier and the Valve Majors
                  </li>
                  <li>
                    <a href="/dota2-betting" className="text-brand underline">
                      Dota 2
                    </a>{" "}
                    — The International and the season's top-tier circuit
                  </li>
                  <li>
                    <a href="/lol-betting" className="text-brand underline">
                      League of Legends
                    </a>{" "}
                    — LCK, LPL, LEC, MSI and the World Championship
                  </li>
                  <li>
                    <a href="/valorant-betting" className="text-brand underline">
                      Valorant
                    </a>{" "}
                    — VCT international leagues, Masters and Champions
                  </li>
                </ul>
              </>
            ),
          },
          {
            heading: "From schedule to bet slip",
            body: (
              <p>
                Found a fixture? Check recent form on the{" "}
                <a href="/esports-results" className="text-brand underline">
                  esports results
                </a>{" "}
                page, compare pre-match prices on the{" "}
                <a href="/esports" className="text-brand underline">
                  esports betting hub
                </a>
                , or wait for the series to start and bet in play via{" "}
                <a href="/live" className="text-brand underline">
                  live betting
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
