import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Tennis Betting", url: "/tennis" },
  { name: "Tennis Schedule", url: "/tennis/schedule" },
];

export const Route = createFileRoute("/tennis_/schedule")({
  head: () => ({
    meta: [
      { title: "Tennis Schedule | Upcoming ATP, WTA & Grand Slam Fixtures | 1xBET" },
      {
        name: "description",
        content:
          "Upcoming tennis fixtures at 1xBET India. ATP, WTA and Grand Slam match schedules, tournament dates and start times for tennis betting.",
      },
      { property: "og:title", content: "Tennis Schedule | 1xBET India" },
      {
        property: "og:description",
        content: "Upcoming ATP, WTA and Grand Slam fixtures and tournament dates.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/tennis/schedule` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/tennis/schedule` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Tennis Schedule"
        description="Upcoming fixtures and tournament dates across ATP, WTA and Grand Slam events"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Upcoming tennis fixtures",
            body: (
              <p>
                Plan your tennis betting with the fixture list across the ATP and WTA tours,
                Challenger events and the Grand Slams. Pre-match markets open ahead of each match,
                with daily orders of play published once draws are made.
              </p>
            ),
          },
          {
            heading: "Major tennis tournaments",
            body: (
              <>
                <p>The headline events on the tennis calendar include:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    <a href="/tennis/grand-slams" className="text-brand underline">
                      Grand Slams
                    </a>{" "}
                    — Australian Open, Roland Garros, Wimbledon, US Open
                  </li>
                  <li>
                    <a href="/tennis/atp" className="text-brand underline">
                      ATP
                    </a>{" "}
                    — Masters 1000 series, ATP 500/250 events and the ATP Finals
                  </li>
                  <li>
                    <a href="/tennis/wta" className="text-brand underline">
                      WTA
                    </a>{" "}
                    — WTA 1000, 500 and 250 events and the WTA Finals
                  </li>
                  <li>Davis Cup and Billie Jean King Cup team competitions</li>
                </ul>
              </>
            ),
          },
          {
            heading: "From schedule to bet slip",
            body: (
              <p>
                Found a fixture? Check recent form on{" "}
                <a href="/tennis/results" className="text-brand underline">
                  tennis results
                </a>
                , compare markets on the{" "}
                <a href="/tennis" className="text-brand underline">
                  tennis betting hub
                </a>
                , or wait for first serve and bet in play via{" "}
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
