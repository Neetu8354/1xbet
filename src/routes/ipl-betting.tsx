import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Cricket Betting", url: "/cricket" },
  { name: "IPL Betting", url: "/ipl-betting" },
];

export const Route = createFileRoute("/ipl-betting")({
  head: () => ({
    meta: [
      { title: "IPL Betting India | Indian Premier League Odds & Markets | 1xBET" },
      {
        name: "description",
        content:
          "IPL betting in India at 1xBET. Live odds on every IPL match — match winner, top batsman, Orange Cap and outright markets with fast INR payouts.",
      },
      { property: "og:title", content: "IPL Betting India | 1xBET" },
      {
        property: "og:description",
        content:
          "Live IPL odds on every match — outrights, player markets and in-play betting in INR.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/ipl-betting` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-cricket.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/ipl-betting` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="IPL Betting India"
        description="Indian Premier League odds on every match — pre-match, live and outright markets in INR"
        breadcrumbs={breadcrumbItems}
        topContent={
          <img
            src="/assets/seo/ipl-betting-india.webp"
            alt="IPL betting India — Indian Premier League match, player and outright odds"
            width="1200"
            height="500"
            fetchPriority="high"
            decoding="async"
            className="mt-4 w-full rounded-lg border"
          />
        }
        sections={[
          {
            heading: "IPL Betting at 1xBET India",
            body: (
              <>
                <p>
                  The Indian Premier League is the world's biggest T20 competition and the busiest
                  cricket betting event of the year. IPL betting online at 1xBET India covers all
                  70+ matches — group stage, playoffs and the final — with markets priced weeks in
                  advance and updated ball-by-ball in play.
                </p>
                <p className="mt-2">
                  Check upcoming fixtures on the{" "}
                  <a href="/cricket-schedule" className="text-brand underline">
                    cricket schedule
                  </a>{" "}
                  and team form on the{" "}
                  <a href="/cricket-results" className="text-brand underline">
                    cricket results
                  </a>{" "}
                  page before the season.
                </p>
              </>
            ),
          },
          {
            heading: "Popular IPL Betting Markets",
            body: (
              <>
                <p>Every IPL match carries a deep market list:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Match winner, toss winner and super over markets</li>
                  <li>Top batsman and top bowler — per team and per match</li>
                  <li>Total runs, total sixes and total wickets over/under</li>
                  <li>Highest opening partnership and first-wicket method</li>
                  <li>Over-by-over and session betting in play</li>
                  <li>Outrights: IPL winner, Orange Cap, Purple Cap and finalist markets</li>
                </ul>
              </>
            ),
          },
          {
            heading: "IPL betting tips",
            body: (
              <p>
                T20 is high-variance — toss and dew often matter as much as team strength. Check
                venue scoring history, recent head-to-heads and team news, and compare prices on the{" "}
                <a href="/cricket-odds" className="text-brand underline">
                  cricket odds
                </a>{" "}
                page. Live markets reprice every over in the{" "}
                <a href="/cricket-live" className="text-brand underline">
                  live cricket betting
                </a>{" "}
                section.
              </p>
            ),
          },
          {
            heading: "More cricket betting",
            body: (
              <p>
                Return to the{" "}
                <a href="/cricket" className="text-brand underline">
                  cricket betting hub
                </a>{" "}
                for international and domestic coverage. Players must be 18+ — see{" "}
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
