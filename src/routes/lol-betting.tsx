import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Esports Betting", url: "/esports" },
  { name: "LoL Betting", url: "/lol-betting" },
];

export const Route = createFileRoute("/lol-betting")({
  head: () => ({
    meta: [
      { title: "LoL Betting India | League of Legends Worlds Odds | 1xBET" },
      {
        name: "description",
        content:
          "League of Legends betting in India at 1xBET. Live odds on Worlds, LCK, LPL and LEC. Match winner, first dragon and total kills markets in INR.",
      },
      { property: "og:title", content: "LoL Betting India | 1xBET" },
      {
        property: "og:description",
        content: "Live LoL odds on Worlds, LCK, LPL and LEC. Bet in INR at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/lol-betting` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-esports.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/lol-betting` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="League of Legends Betting India"
        description="LoL odds on Worlds, LCK, LPL and LEC — match, map and objective markets in INR"
        breadcrumbs={breadcrumbItems}
        topContent={
          <img
            src="/assets/seo/lol-betting-india.webp"
            alt="LoL betting odds — League of Legends Worlds, LCK, LPL and LEC markets"
            width="1200"
            height="500"
            fetchPriority="high"
            decoding="async"
            className="mt-4 w-full rounded-lg border"
          />
        }
        sections={[
          {
            heading: "LoL Betting in India",
            body: (
              <>
                <p>
                  League of Legends is the most-watched esport in the world, and LoL betting covers
                  every major competition: the LCK and LPL domestic leagues, the LEC, MSI and the
                  League of Legends World Championship each autumn.
                </p>
                <p className="mt-2">
                  Upcoming fixtures are on the{" "}
                  <a href="/esports-schedule" className="text-brand underline">
                    esports schedule
                  </a>
                  , with form and recent results on the{" "}
                  <a href="/esports-results" className="text-brand underline">
                    esports results
                  </a>{" "}
                  page.
                </p>
              </>
            ),
          },
          {
            heading: "Popular LoL Betting Markets",
            body: (
              <>
                <p>LoL's objective-driven gameplay produces distinctive markets:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Match winner and map winner across the series</li>
                  <li>First blood, first dragon and first tower</li>
                  <li>Total kills over/under per map</li>
                  <li>Baron and inhibitor markets</li>
                  <li>Map handicap, correct map score and outright winner</li>
                </ul>
                <p className="mt-2">
                  Formats matter: best-of-one league matches produce more upsets than best-of-five
                  playoff series, so odds differ sharply between stages of the same competition.
                </p>
              </>
            ),
          },
          {
            heading: "Live LoL Betting",
            body: (
              <p>
                Team fights, objective trades and baron calls reprice LoL matches constantly —
                follow live odds and gold-lead statistics in the{" "}
                <a href="/live" className="text-brand underline">
                  live betting
                </a>{" "}
                section, with cash out available on selected markets.
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
                <a href="/dota2-betting" className="text-brand underline">
                  Dota 2 betting
                </a>{" "}
                and{" "}
                <a href="/valorant-betting" className="text-brand underline">
                  Valorant betting
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
