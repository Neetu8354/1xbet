import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Esports Betting", url: "/esports" },
  { name: "Dota 2 Betting", url: "/dota2-betting" },
];

export const Route = createFileRoute("/dota2-betting")({
  head: () => ({
    meta: [
      { title: "Dota 2 Betting India | The International & TI Odds | 1xBET" },
      {
        name: "description",
        content:
          "Dota 2 betting in India at 1xBET. Live odds on The International and top-tier circuit events. Match winner, first blood and total kills markets in INR.",
      },
      { property: "og:title", content: "Dota 2 Betting India | 1xBET" },
      {
        property: "og:description",
        content:
          "Live Dota 2 odds on The International and circuit events. Bet in INR at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/dota2-betting` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-esports.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/dota2-betting` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Dota 2 Betting India"
        description="Dota 2 odds on The International and the global circuit — match, map and objective markets in INR"
        breadcrumbs={breadcrumbItems}
        topContent={
          <img
            src="/assets/seo/dota2-betting-india.webp"
            alt="Dota 2 betting markets — The International and tournament odds in India"
            width="1200"
            height="500"
            fetchPriority="high"
            decoding="async"
            className="mt-4 w-full rounded-lg border"
          />
        }
        sections={[
          {
            heading: "Dota 2 Betting in India",
            body: (
              <>
                <p>
                  Dota 2 betting covers the full professional circuit — regional leagues,
                  third-party tournaments and The International, the richest event in esports.
                  Series are played best-of-two or best-of-three in the regular season and
                  best-of-five in grand finals, which shapes how markets are priced.
                </p>
                <p className="mt-2">
                  Upcoming Dota 2 fixtures are listed on the{" "}
                  <a href="/esports-schedule" className="text-brand underline">
                    esports schedule
                  </a>
                  , with recent results and form on the{" "}
                  <a href="/esports-results" className="text-brand underline">
                    esports results
                  </a>{" "}
                  page.
                </p>
              </>
            ),
          },
          {
            heading: "Popular Dota 2 Betting Markets",
            body: (
              <>
                <p>Dota 2's objectives create distinctive markets on every map:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Match winner and map winner across the series</li>
                  <li>First blood, first Roshan and first tower markets</li>
                  <li>Total kills over/under per map</li>
                  <li>Map handicap and correct map score</li>
                  <li>Outright tournament winner — The International and majors</li>
                </ul>
                <p className="mt-2">
                  Draft phases matter: hero picks, bans and lane match-ups can move odds before the
                  first creep wave spawns — worth checking before locking in a map winner.
                </p>
              </>
            ),
          },
          {
            heading: "Live Dota 2 Betting",
            body: (
              <p>
                Dota 2 matches swing on team fights, buybacks and Roshan attempts — live odds update
                in real time in the{" "}
                <a href="/live" className="text-brand underline">
                  live betting
                </a>{" "}
                section, where you can follow kill counts, net worth leads and objective markets as
                they develop.
              </p>
            ),
          },
          {
            heading: "More esports betting",
            body: (
              <p>
                Also explore{" "}
                <a href="/cs2-betting" className="text-brand underline">
                  CS2 betting
                </a>
                ,{" "}
                <a href="/valorant-betting" className="text-brand underline">
                  Valorant betting
                </a>{" "}
                and{" "}
                <a href="/lol-betting" className="text-brand underline">
                  LoL betting
                </a>
                , or return to the{" "}
                <a href="/esports" className="text-brand underline">
                  esports betting hub
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
