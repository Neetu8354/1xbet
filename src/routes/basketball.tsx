import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Sports", url: "/sports" },
  { name: "Basketball Betting", url: "/basketball" },
];

export const Route = createFileRoute("/basketball")({
  head: () => ({
    meta: [
      { title: "Basketball Betting India | NBA, EuroLeague Odds | 1xBET" },
      {
        name: "description",
        content:
          "Basketball betting in India at 1xBET. Live odds on NBA, EuroLeague and international games — spreads, totals and quarter markets in INR.",
      },
      { property: "og:title", content: "Basketball Betting India | 1xBET" },
      {
        property: "og:description",
        content: "Live basketball odds on NBA and EuroLeague. Spreads and totals in INR at 1xBET.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/basketball` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/basketball` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Basketball Betting India"
        description="NBA, EuroLeague and international basketball odds — spreads, totals and quarter markets"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Basketball betting at 1xBET India",
            body: (
              <p>
                Basketball betting covers the NBA season from tip-off to the Finals, the EuroLeague,
                Spain's ACB, Australia's NBL, FIBA World Cup and Olympic tournaments — with
                pre-match and live markets on games almost every night of the year.
              </p>
            ),
          },
          {
            heading: "Popular basketball betting markets",
            body: (
              <>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Match winner including overtime</li>
                  <li>Point spread — backing a team with a points handicap</li>
                  <li>Total points over/under</li>
                  <li>Quarter and half markets — winner, spread and totals</li>
                  <li>Player props — points, rebounds and assists</li>
                  <li>Outrights — NBA champion, MVP and conference winners</li>
                </ul>
              </>
            ),
          },
          {
            heading: "Live basketball betting",
            body: (
              <p>
                Basketball's scoring runs make it one of the fastest-moving in-play sports — a 12-0
                run can swing the spread in minutes. Bet quarter-by-quarter in the{" "}
                <a href="/live" className="text-brand underline">
                  live betting
                </a>{" "}
                section. Players must be 18+ — see{" "}
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
                <a href="/tennis" className="text-brand underline">
                  tennis
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
