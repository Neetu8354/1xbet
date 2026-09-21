import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Sports", url: "/sports" },
  { name: "Ice Hockey Betting", url: "/ice-hockey" },
];

export const Route = createFileRoute("/ice-hockey")({
  head: () => ({
    meta: [
      { title: "Ice Hockey Betting India | NHL & KHL Odds | 1xBET" },
      {
        name: "description",
        content:
          "Ice hockey betting in India at 1xBET. Live odds on NHL, KHL and IIHF World Championship — puck line, totals and period markets in INR.",
      },
      { property: "og:title", content: "Ice Hockey Betting India | 1xBET" },
      {
        property: "og:description",
        content: "Live ice hockey odds on NHL, KHL and Worlds. Puck line and totals in INR.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/ice-hockey` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/ice-hockey` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Ice Hockey Betting India"
        description="NHL, KHL and IIHF World Championship odds — puck line, totals and period betting"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Ice hockey betting at 1xBET India",
            body: (
              <p>
                Ice hockey betting covers the NHL's 82-game season and Stanley Cup playoffs,
                Russia's KHL, the IIHF World Championship and Olympic tournaments — fast,
                low-scoring games with markets priced pre-match and live.
              </p>
            ),
          },
          {
            heading: "Popular ice hockey betting markets",
            body: (
              <>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Match winner — regulation time or including overtime/shootout</li>
                  <li>Puck line — the hockey equivalent of a point spread (usually ±1.5)</li>
                  <li>Total goals over/under</li>
                  <li>Period betting — winner and totals per period</li>
                  <li>Both teams to score and correct score</li>
                  <li>Outrights — Stanley Cup, conference and division winners</li>
                </ul>
              </>
            ),
          },
          {
            heading: "Live ice hockey betting",
            body: (
              <p>
                Power plays, pulled goalies and empty-net goals make late-game hockey volatile —
                follow live odds in the{" "}
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
                <a href="/basketball" className="text-brand underline">
                  basketball
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
