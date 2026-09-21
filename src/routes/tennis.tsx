import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Sports", url: "/sports" },
  { name: "Tennis Betting", url: "/tennis" },
];

export const Route = createFileRoute("/tennis")({
  head: () => ({
    meta: [
      { title: "Tennis Betting India | ATP, WTA & Grand Slam Odds | 1xBET" },
      {
        name: "description",
        content:
          "Tennis betting in India at 1xBET. Live odds on Grand Slams, ATP and WTA tours — match winner, set betting and total games markets in INR.",
      },
      { property: "og:title", content: "Tennis Betting India | 1xBET" },
      {
        property: "og:description",
        content: "Live tennis odds on Grand Slams, ATP and WTA events. Bet in INR at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/tennis` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/tennis` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Tennis Betting India"
        description="Grand Slam, ATP and WTA odds — match, set and game markets, pre-match and live"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Tennis betting at 1xBET India",
            body: (
              <p>
                Tennis runs nearly year-round, making it one of the deepest sports on the
                sportsbook. We cover the four Grand Slams — Australian Open, Roland Garros,
                Wimbledon and US Open — plus the full ATP and WTA tours, Challenger events, Davis
                Cup and Billie Jean King Cup ties.
              </p>
            ),
          },
          {
            heading: "Popular tennis betting markets",
            body: (
              <>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Match winner — who wins the match</li>
                  <li>Set betting — exact set score such as 2-0 or 2-1</li>
                  <li>Total games and set handicaps</li>
                  <li>First set winner and tie-break markets</li>
                  <li>Outright tournament winner</li>
                </ul>
                <p className="mt-2">
                  Surface matters: clay, grass and hard courts favour very different playing styles,
                  so check head-to-head records by surface before betting.
                </p>
              </>
            ),
          },
          {
            heading: "Live tennis betting",
            body: (
              <p>
                Tennis reprices on every point — breaks of serve, tie-breaks and medical timeouts
                all move odds. Follow matches in play in the{" "}
                <a href="/live" className="text-brand underline">
                  live betting
                </a>{" "}
                section, with cash out on selected markets. Players must be 18+ — see{" "}
                <a href="/responsible-gaming" className="text-brand underline">
                  Responsible Gaming
                </a>
                .
              </p>
            ),
          },
          {
            heading: "More sports",
            body: (
              <p>
                Explore{" "}
                <a href="/cricket" className="text-brand underline">
                  cricket
                </a>
                ,{" "}
                <a href="/football" className="text-brand underline">
                  football
                </a>{" "}
                and{" "}
                <a href="/esports" className="text-brand underline">
                  esports
                </a>
                , or browse all markets on the{" "}
                <a href="/sports" className="text-brand underline">
                  sports betting hub
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
