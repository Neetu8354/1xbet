import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Sports", url: "/sports" },
  { name: "Basketball Betting", url: "/basketball" },
];

const faqs = [
  {
    q: "What basketball competitions can I bet on?",
    a: "You can explore basketball betting markets across competitions such as NBA, EuroLeague, FIBA tournaments, and international leagues.",
  },
  {
    q: "What is point spread betting in basketball?",
    a: "Point spread betting gives one team a points advantage or disadvantage, creating a more balanced betting market.",
  },
  {
    q: "How does basketball over/under betting work?",
    a: "Over/under betting focuses on whether the total points scored in a game will be higher or lower than the selected total.",
  },
  {
    q: "Does overtime count in basketball betting?",
    a: "Overtime rules depend on the specific betting market and competition terms.",
  },
  {
    q: "What are basketball player props?",
    a: "Player props allow betting on individual statistics such as points, rebounds, assists, and other performances.",
  },
];

const basketballEvents = [
  {
    name: "NBA 2026-27 Season",
    sport: "Basketball",
    startDate: "2026-10",
    organizer: "NBA",
    location: { "@type": "Country", name: "United States" },
    url: `${SITE_URL}/basketball/nba`,
  },
  {
    name: "EuroLeague 2026-27 Season",
    sport: "Basketball",
    startDate: "2026-10",
    organizer: "EuroLeague",
    location: { "@type": "AdministrativeArea", name: "Europe" },
    url: `${SITE_URL}/basketball/euroleague`,
  },
  {
    name: "FIBA Basketball World Cup 2027",
    sport: "Basketball",
    startDate: "2027-08",
    organizer: "FIBA",
    location: { "@type": "Country", name: "Qatar" },
    url: `${SITE_URL}/basketball`,
  },
];

export const Route = createFileRoute("/basketball")({
  head: () => ({
    meta: [
      {
        title: "Basketball Betting India | NBA, EuroLeague & Live Basketball Odds | 1xBET",
      },
      {
        name: "description",
        content:
          "Basketball betting in India at 1xBET. Live odds on NBA, EuroLeague and international games — spreads, totals, player props and quarter markets in INR.",
      },
      {
        property: "og:title",
        content: "Basketball Betting India | NBA & EuroLeague Odds | 1xBET",
      },
      {
        property: "og:description",
        content:
          "Explore NBA, EuroLeague and international basketball betting odds, spreads, totals and live markets at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/basketball` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-basketball.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        name: "twitter:title",
        content: "Basketball Betting India | NBA & EuroLeague Odds | 1xBET",
      },
      {
        name: "twitter:description",
        content:
          "Explore NBA, EuroLeague and international basketball betting odds, spreads, totals and live markets at 1xBET India.",
      },
      { name: "twitter:image", content: `${SITE_URL}/assets/seo/og-basketball.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/basketball` }],
    scripts: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Upcoming basketball competitions at 1xBET India",
          itemListElement: basketballEvents.map((e, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "SportsEvent",
              name: e.name,
              sport: e.sport,
              startDate: e.startDate,
              eventStatus: "https://schema.org/EventScheduled",
              location: e.location,
              organizer: { "@type": "Organization", name: e.organizer },
              url: e.url,
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Basketball Betting India — NBA, EuroLeague & Live Basketball Odds",
          dateModified: "2026-09-21",
          author: { "@type": "Organization", name: "1xBET Basketball Content Team" },
          publisher: { "@id": `${SITE_URL}/#organization` },
          mainEntityOfPage: `${SITE_URL}/basketball`,
          image: `${SITE_URL}/assets/seo/og-basketball.png`,
        }),
      },
    ],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Basketball Betting India - NBA, EuroLeague & Live Basketball Odds"
        description="NBA, EuroLeague and international basketball odds — spreads, totals, props and live markets in INR"
        breadcrumbs={breadcrumbItems}
        topContent={
          <>
            <img
              src="/assets/seo/basketball-betting-india.webp"
              alt="Basketball betting India — NBA odds and live markets on EuroLeague and international games"
              width="1200"
              height="500"
              fetchPriority="high"
              decoding="async"
              className="mt-4 w-full rounded-lg border"
            />
            <p className="mt-2 text-xs text-muted-foreground">
              Written by: 1xBET Basketball Content Team · Reviewed by our basketball analysts · Last
              updated: 21 September 2026
            </p>
            <nav
              aria-label="Basketball quick links"
              className="mt-4 grid grid-cols-1 gap-2 text-sm font-semibold sm:grid-cols-3"
            >
              <a
                href="/basketball/live"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                Live Basketball Odds
              </a>
              <a
                href="/basketball/nba"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                NBA Betting
              </a>
              <a
                href="/basketball/schedule"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                Basketball Schedule
              </a>
            </nav>
          </>
        }
        sections={[
          {
            heading: "Basketball Betting at 1xBET India",
            body: (
              <>
                <p>
                  Basketball is one of the fastest-growing sports worldwide, offering exciting
                  betting opportunities throughout the year. At 1xBET India, basketball fans can
                  explore betting markets across major competitions including the{" "}
                  <a href="/basketball/nba" className="text-brand underline">
                    NBA
                  </a>
                  ,{" "}
                  <a href="/basketball/euroleague" className="text-brand underline">
                    EuroLeague
                  </a>
                  , FIBA tournaments, international leagues, and professional basketball events.
                </p>
                <p className="mt-2">
                  With pre-match and{" "}
                  <a href="/basketball/live" className="text-brand underline">
                    live betting
                  </a>{" "}
                  options available, users can follow basketball games and explore different markets
                  including match winners, point spreads, totals, quarter markets, player
                  statistics, and tournament outcomes.
                </p>
              </>
            ),
          },
          {
            heading: "Latest Basketball Betting Odds",
            body: (
              <p>
                Basketball odds are influenced by several factors including team performance, player
                availability, recent form, injuries, home advantage, and historical statistics.
                Understanding these factors can help users analyse available markets before
                selecting a betting option. Compare current prices on the{" "}
                <a href="/basketball/odds" className="text-brand underline">
                  basketball odds
                </a>{" "}
                page.
              </p>
            ),
          },
          {
            heading: "NBA Betting India",
            body: (
              <>
                <p>
                  The NBA is the most popular basketball league in the world and attracts millions
                  of fans every season. NBA betting includes regular-season games, playoffs,
                  conference finals, and the NBA Finals.
                </p>
                <p className="mt-2">Popular NBA betting markets include:</p>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  <li>Match winner and moneyline betting</li>
                  <li>Point spread betting</li>
                  <li>Total points over/under</li>
                  <li>Quarter and half-time markets</li>
                  <li>Player props including points, rebounds, assists, and three-pointers</li>
                  <li>NBA championship and conference winner markets</li>
                </ul>
                <p className="mt-2">
                  Following team form, player performance, injuries, and recent statistics can
                  provide valuable insights when analysing NBA games. See the{" "}
                  <a href="/basketball/nba" className="text-brand underline">
                    NBA betting guide
                  </a>
                  .
                </p>
              </>
            ),
          },
          {
            heading: "EuroLeague Basketball Betting",
            body: (
              <>
                <p>
                  EuroLeague brings together some of the strongest basketball clubs from Europe. The
                  competition features teams with different playing styles, strategies, and tactical
                  approaches.
                </p>
                <p className="mt-2">
                  EuroLeague betting markets include match winners, handicaps, totals, quarter
                  markets, and tournament winner selections — explore the{" "}
                  <a href="/basketball/euroleague" className="text-brand underline">
                    EuroLeague betting guide
                  </a>
                  .
                </p>
              </>
            ),
          },
          {
            heading: "International Basketball Betting",
            body: (
              <p>
                Apart from NBA and EuroLeague, basketball fans can explore international
                competitions including FIBA events, national leagues, and major tournaments.
                International basketball markets provide opportunities across different leagues and
                competitions throughout the season.
              </p>
            ),
          },
          {
            heading: "Popular Basketball Betting Markets",
            body: (
              <>
                <h3 className="mt-2 font-semibold">Match Winner Betting</h3>
                <p>
                  Match winner betting allows users to select which team will win a basketball game.
                  This is one of the most common basketball betting markets.
                </p>
                <h3 className="mt-3 font-semibold">Point Spread Betting</h3>
                <p>
                  Point spread betting creates a handicap between two teams. The selected team must
                  win or stay within the assigned spread for the bet to be successful.
                </p>
                <h3 className="mt-3 font-semibold">Total Points Betting</h3>
                <p>
                  Total points betting focuses on the combined score of both teams. Users can select
                  whether the total points scored will be over or under a given number.
                </p>
                <h3 className="mt-3 font-semibold">Quarter and Half-Time Betting</h3>
                <p>
                  Basketball games are divided into quarters, creating multiple betting
                  opportunities. Users can bet on quarter winners, half-time results, and quarter
                  totals.
                </p>
                <h3 className="mt-3 font-semibold">Player Props Betting</h3>
                <p>
                  Player props allow users to explore individual player performances, including
                  points scored, rebounds, assists, steals, and three-pointers.
                </p>
                <h3 className="mt-3 font-semibold">Tournament Winner Betting</h3>
                <p>
                  Users can select teams expected to perform strongly throughout major competitions
                  such as the NBA season, playoffs, and international tournaments.
                </p>
              </>
            ),
          },
          {
            heading: "Live Basketball Betting",
            body: (
              <>
                <img
                  src="/assets/seo/live-basketball-betting.webp"
                  alt="Live basketball betting odds — quarter-by-quarter in-play markets on every game"
                  width="1200"
                  height="500"
                  loading="lazy"
                  decoding="async"
                  className="mb-3 w-full rounded-lg border"
                />
                <p>
                  Live basketball betting allows users to follow matches while they are happening
                  and explore changing odds during different stages of the game.
                </p>
                <p className="mt-2">
                  Basketball is known for quick momentum changes. A strong scoring run, defensive
                  performance, player substitutions, or foul situations can influence the direction
                  of a game within minutes.
                </p>
                <p className="mt-2">
                  Live betting markets may include quarter winners, live spreads, totals, and match
                  outcomes — follow the action in the{" "}
                  <a href="/basketball/live" className="text-brand underline">
                    live basketball
                  </a>{" "}
                  section.
                </p>
              </>
            ),
          },
          {
            heading: "How to Analyse Basketball Matches Before Betting",
            body: (
              <>
                <h3 className="mt-2 font-semibold">Team Performance</h3>
                <p>
                  Review recent results, scoring averages, defensive records, and overall team
                  consistency.
                </p>
                <h3 className="mt-3 font-semibold">Player Availability</h3>
                <p>
                  Important players can significantly influence basketball games. Check injury
                  updates, suspensions, and lineup changes.
                </p>
                <h3 className="mt-3 font-semibold">Head-to-Head Records</h3>
                <p>Previous meetings between teams can provide useful historical information.</p>
                <h3 className="mt-3 font-semibold">Home and Away Performance</h3>
                <p>
                  Some teams perform differently depending on whether they play at home or away.
                </p>
                <h3 className="mt-3 font-semibold">Playing Style</h3>
                <p>
                  Offensive pace, defensive strength, shooting efficiency, and rebounding ability
                  can affect match performance.
                </p>
              </>
            ),
          },
          {
            heading: "Basketball Betting Tips",
            body: (
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Research team and player statistics before selecting markets.</li>
                <li>
                  Compare different betting markets instead of focusing only on match winners.
                </li>
                <li>Consider current form, injuries, and team motivation.</li>
                <li>Follow basketball news and competition updates.</li>
                <li>Set personal betting limits and make responsible decisions.</li>
              </ul>
            ),
          },
          {
            heading: "Responsible Basketball Betting",
            body: (
              <p>
                Sports betting should always be approached responsibly. Understand the risks
                involved, set personal limits, and participate only if you meet the legal age
                requirements in your location. Visit{" "}
                <a href="/responsible-gaming" className="text-brand underline">
                  Responsible Gaming
                </a>{" "}
                for account controls and safer-gambling resources.
              </p>
            ),
          },
          {
            heading: "Explore Basketball Betting Markets",
            body: (
              <p>
                Follow NBA, EuroLeague, and international basketball competitions with a wide range
                of betting options. Explore basketball{" "}
                <a href="/basketball/odds" className="text-brand underline">
                  odds
                </a>
                , live markets, spreads, totals, and player-focused betting markets at 1xBET India —
                deposit and withdraw in INR via{" "}
                <a href="/payments" className="text-brand underline">
                  supported payment methods
                </a>
                .
              </p>
            ),
          },
        ]}
      >
        <section className="mt-10">
          <h2 className="text-xl font-bold sm:text-2xl">Basketball Betting FAQ</h2>
          <div className="mt-4 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-lg border bg-card p-4">
                <summary className="cursor-pointer font-semibold">{f.q}</summary>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
        <nav aria-label="Basketball betting resources" className="mt-10">
          <h2 className="text-xl font-bold sm:text-2xl">Basketball betting resources</h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm font-semibold sm:grid-cols-3">
            <li>
              <a href="/basketball/nba" className="block rounded-md border p-3 hover:bg-accent">
                NBA Betting
              </a>
            </li>
            <li>
              <a
                href="/basketball/euroleague"
                className="block rounded-md border p-3 hover:bg-accent"
              >
                EuroLeague Betting
              </a>
            </li>
            <li>
              <a href="/basketball/live" className="block rounded-md border p-3 hover:bg-accent">
                Live Basketball
              </a>
            </li>
            <li>
              <a href="/basketball/odds" className="block rounded-md border p-3 hover:bg-accent">
                Basketball Odds
              </a>
            </li>
            <li>
              <a href="/basketball/results" className="block rounded-md border p-3 hover:bg-accent">
                Basketball Results
              </a>
            </li>
            <li>
              <a
                href="/basketball/schedule"
                className="block rounded-md border p-3 hover:bg-accent"
              >
                Basketball Schedule
              </a>
            </li>
          </ul>
        </nav>
      </SEOPage>
    </>
  ),
});
