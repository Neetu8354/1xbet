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
    a: "At 1xBET India you can bet on the NBA, EuroLeague, Spain's ACB, Australia's NBL, FIBA World Cup, Olympic basketball and many other domestic leagues — pre-match and live.",
  },
  {
    q: "What is point spread betting in basketball?",
    a: "Point spread betting gives the favourite a points handicap and the underdog a head start — for example Lakers -6.5 means they must win by 7 or more for the bet to win.",
  },
  {
    q: "How does basketball over/under betting work?",
    a: "Over/under (totals) betting predicts whether the combined points scored by both teams will be above or below a set line, such as 224.5 total points.",
  },
  {
    q: "Does overtime count in basketball betting?",
    a: "In most basketball markets — including match winner, spreads and totals — overtime counts toward the result. Always check the market rules shown beside each selection.",
  },
  {
    q: "What are basketball player props?",
    a: "Player props are markets on individual player statistics — points scored, rebounds, assists, three-pointers made and combined stat lines.",
  },
  {
    q: "How does live basketball betting work?",
    a: "Live basketball betting lets you bet while a game is in progress. Odds update with every scoring run, timeout and quarter — markets include updated spread, totals and quarter-by-quarter betting.",
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
      { title: "Basketball Betting India | NBA & EuroLeague Odds | 1xBET" },
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
          headline: "Basketball Betting India — NBA & EuroLeague Odds",
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
        title="Basketball Betting India"
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
                  Basketball is one of the fastest-scoring sports on the sportsbook, with games
                  running almost every night of the year across multiple time zones. At 1xBET India
                  you can bet on the NBA, EuroLeague, top domestic leagues and international
                  tournaments — all priced in INR with pre-match and live markets.
                </p>
                <p className="mt-2">
                  Basketball's structure — four quarters, frequent scoring and timeouts — produces
                  deep market lists on every game, from point spreads and totals to player props and
                  quarter-by-quarter betting.
                </p>
              </>
            ),
          },
          {
            heading: "Latest Basketball Odds",
            body: (
              <p>
                Basketball odds move with injury news, rest days, back-to-back schedules and lineup
                confirmations — NBA teams resting starters can shift a spread by several points
                within hours. Check the{" "}
                <a href="/basketball/odds" className="text-brand underline">
                  basketball odds
                </a>{" "}
                page for current prices, the{" "}
                <a href="/basketball/schedule" className="text-brand underline">
                  schedule
                </a>{" "}
                for upcoming games and{" "}
                <a href="/basketball/results" className="text-brand underline">
                  results
                </a>{" "}
                for recent form.
              </p>
            ),
          },
          {
            heading: "NBA Betting India",
            body: (
              <p>
                The NBA is the world's premier basketball league — an 82-game regular season,
                play-in tournament and four playoff rounds ending in the NBA Finals. NBA betting
                covers every game with spreads, totals, player props and outright markets for
                champion, conference and division winners, plus awards like MVP. See the{" "}
                <a href="/basketball/nba" className="text-brand underline">
                  NBA betting guide
                </a>{" "}
                for season coverage and market detail.
              </p>
            ),
          },
          {
            heading: "EuroLeague Betting",
            body: (
              <p>
                The EuroLeague is Europe's elite club competition — 18 teams, a long regular season
                and playoffs culminating in the Final Four. EuroLeague betting offers a different
                rhythm to the NBA: lower-scoring games, tactical coaching and tighter spreads.
                Explore the{" "}
                <a href="/basketball/euroleague" className="text-brand underline">
                  EuroLeague betting guide
                </a>{" "}
                for markets and format.
              </p>
            ),
          },
          {
            heading: "International Basketball Betting",
            body: (
              <p>
                Beyond the NBA and EuroLeague, the sportsbook prices Spain's ACB, Australia's NBL,
                the VTB United League, FIBA Champions League, continental competitions and
                international tournaments — the FIBA World Cup, Olympic basketball and continental
                championships like EuroBasket and Asia Cup. National-team basketball produces
                different dynamics: shorter tournaments, tighter rotations and more variance.
              </p>
            ),
          },
          {
            heading: "Live Basketball Odds & Betting Guide",
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
                  Live basketball betting lets you bet while a game is in progress. Scoring runs
                  swing odds constantly — a 15-2 run can flip a spread in minutes — and markets
                  reprice on every timeout and quarter break. In-play options include updated match
                  winner, adjusted spreads and totals, next quarter winner and race-to-points
                  markets, with cash out on selected games.
                </p>
                <p className="mt-2">
                  Follow games in the{" "}
                  <a href="/basketball/live" className="text-brand underline">
                    live basketball
                  </a>{" "}
                  or{" "}
                  <a href="/live" className="text-brand underline">
                    live betting
                  </a>{" "}
                  sections, where scores and statistics update in real time.
                </p>
              </>
            ),
          },
          {
            heading: "Popular Basketball Betting Markets",
            body: (
              <>
                <h3 className="mt-2 font-semibold">Point Spread Betting</h3>
                <p>
                  The point spread is basketball's core market — the favourite gives a handicap and
                  the underdog gets a head start. Lakers -6.5 means they must win by 7+ for the bet
                  to land; Celtics +6.5 wins if they lose by 6 or fewer, or win outright.
                </p>
                <h3 className="mt-3 font-semibold">Over/Under Basketball Betting</h3>
                <p>
                  Totals markets predict whether combined points go over or under a line — e.g.
                  over/under 224.5. Pace of play, defensive matchups and overtime (which counts in
                  most totals markets) all move the number.
                </p>
                <h3 className="mt-3 font-semibold">Player Props Betting</h3>
                <p>
                  Player props cover individual stat lines — points, rebounds, assists,
                  three-pointers and combos. Props are sensitive to rotation news and matchup, so
                  check lineups close to tip-off.
                </p>
                <h3 className="mt-3 font-semibold">More markets</h3>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  <li>Match winner (moneyline), including overtime in most markets</li>
                  <li>Quarter and half betting — winner, spread and totals</li>
                  <li>Race to 10/20 points and winning margin bands</li>
                  <li>Outrights — champion, MVP, conference and division winners</li>
                </ul>
              </>
            ),
          },
          {
            heading: "How to Analyze Basketball Matches",
            body: (
              <>
                <p>Key factors that experienced basketball bettors check:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Rest and schedule — teams on back-to-backs perform measurably worse</li>
                  <li>Injury reports and rotation news close to tip-off</li>
                  <li>Pace ratings — fast teams push totals up, defensive teams pull them down</li>
                  <li>Home-court advantage and travel distance</li>
                  <li>Head-to-head and recent form on the results page</li>
                </ul>
              </>
            ),
          },
          {
            heading: "Basketball Betting Tips",
            body: (
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Check starting lineups before betting player props</li>
                <li>Compare spreads across markets — alternative lines price differently</li>
                <li>Watch for inflated lines on popular teams</li>
                <li>Consider quarter markets when teams start slow but finish strong</li>
                <li>Set a budget per week — NBA seasons are long</li>
              </ul>
            ),
          },
          {
            heading: "Responsible Basketball Betting",
            body: (
              <p>
                Basketball betting should be entertainment, not a way to make guaranteed income.
                Only bet if you are 18+ and eligible, set deposit and loss limits, and never chase
                losses. Use the account controls on{" "}
                <a href="/responsible-gaming" className="text-brand underline">
                  Responsible Gaming
                </a>
                , review the rules on{" "}
                <a href="/terms" className="text-brand underline">
                  Terms & Conditions
                </a>
                , data handling on{" "}
                <a href="/privacy" className="text-brand underline">
                  Privacy Policy
                </a>{" "}
                and reach{" "}
                <a href="/contact" className="text-brand underline">
                  support
                </a>{" "}
                24/7. INR options are listed on{" "}
                <a href="/payments" className="text-brand underline">
                  Payments
                </a>
                .
              </p>
            ),
          },
        ]}
      >
        <section className="mt-10">
          <h2 className="text-xl font-bold sm:text-2xl">Frequently Asked Questions</h2>
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
