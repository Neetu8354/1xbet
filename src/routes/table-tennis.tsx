import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Sports", url: "/sports" },
  { name: "Table Tennis Betting", url: "/table-tennis" },
];

const faqs = [
  {
    q: "What table tennis tournaments can I bet on?",
    a: "You can bet on WTT events (Grand Smash, Champions, Star Contender), ITTF World Championships, Olympic table tennis, and professional leagues including China's Super League, the German Bundesliga and Eastern European leagues.",
  },
  {
    q: "How does table tennis handicap betting work?",
    a: "Handicap betting applies a game or points advantage to one player — a -1.5 game handicap means the favourite must win 3-0 or 3-1, while a points handicap works like a spread on total points won.",
  },
  {
    q: "Can I bet on live table tennis matches?",
    a: "Yes — table tennis is one of the busiest live betting sports. Matches are short and markets reprice after every point and game, with set winners, handicaps and totals available in-play.",
  },
  {
    q: "What are WTT betting markets?",
    a: "WTT betting markets include match winner, game handicap, total games, total points, correct score and outright tournament winner across Grand Smash, Champions and Contender events.",
  },
  {
    q: "How many games are played in professional table tennis?",
    a: "Professional matches are usually best-of-five games (first to three) or best-of-seven (first to four) in major events like WTT Grand Smash finals and the Olympics. Each game is played to 11 points, win by two.",
  },
];

const tableTennisEvents = [
  {
    name: "WTT Grand Smash 2027",
    sport: "Table Tennis",
    startDate: "2027-02",
    organizer: "WTT",
    location: { "@type": "AdministrativeArea", name: "Worldwide" },
    url: `${SITE_URL}/table-tennis/wtt`,
  },
  {
    name: "ITTF World Table Tennis Championships 2027",
    sport: "Table Tennis",
    startDate: "2027-05",
    organizer: "ITTF",
    location: { "@type": "AdministrativeArea", name: "Worldwide" },
    url: `${SITE_URL}/table-tennis/ittf`,
  },
  {
    name: "WTT Champions Series 2026-27",
    sport: "Table Tennis",
    startDate: "2026-10",
    organizer: "WTT",
    location: { "@type": "AdministrativeArea", name: "Worldwide" },
    url: `${SITE_URL}/table-tennis`,
  },
];

export const Route = createFileRoute("/table-tennis")({
  head: () => ({
    meta: [
      { title: "Table Tennis Betting India | WTT, ITTF & Live Odds | 1xBET" },
      {
        name: "description",
        content:
          "Table tennis betting in India at 1xBET. Live odds on WTT, ITTF championships and pro leagues — game handicaps, totals, correct score and live markets in INR.",
      },
      {
        property: "og:title",
        content: "Table Tennis Betting India | WTT & ITTF Odds | 1xBET",
      },
      {
        property: "og:description",
        content:
          "Follow WTT, ITTF and daily table tennis odds with handicaps, totals, point markets and live betting options at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/table-tennis` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-table-tennis.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        name: "twitter:title",
        content: "Table Tennis Betting India | WTT & ITTF Odds | 1xBET",
      },
      {
        name: "twitter:description",
        content:
          "Follow WTT, ITTF and daily table tennis odds with handicaps, totals, point markets and live betting options at 1xBET India.",
      },
      { name: "twitter:image", content: `${SITE_URL}/assets/seo/og-table-tennis.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/table-tennis` }],
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
          name: "Table tennis competitions covered at 1xBET India",
          itemListElement: tableTennisEvents.map((e, i) => ({
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
          headline: "Table Tennis Betting India — WTT, ITTF & Live Odds",
          dateModified: "2026-09-21",
          author: { "@type": "Organization", name: "1xBET Table Tennis Content Team" },
          publisher: { "@id": `${SITE_URL}/#organization` },
          mainEntityOfPage: `${SITE_URL}/table-tennis`,
          image: `${SITE_URL}/assets/seo/og-table-tennis.png`,
        }),
      },
    ],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Table Tennis Betting India"
        description="WTT, ITTF and league table tennis odds — handicaps, totals, correct score and live markets in INR"
        breadcrumbs={breadcrumbItems}
        topContent={
          <>
            <img
              src="/assets/seo/table-tennis-betting-india.webp"
              alt="Table tennis betting India WTT odds and live table tennis markets"
              width="1200"
              height="500"
              fetchPriority="high"
              decoding="async"
              className="mt-4 w-full rounded-lg border"
            />
            <p className="mt-2 text-xs text-muted-foreground">
              Written by: 1xBET Table Tennis Content Team · Reviewed by our table tennis analysts ·
              Last updated: 21 September 2026
            </p>
            <nav
              aria-label="Table tennis quick links"
              className="mt-4 grid grid-cols-1 gap-2 text-sm font-semibold sm:grid-cols-3"
            >
              <a
                href="/table-tennis/live"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                Live Table Tennis Odds
              </a>
              <a
                href="/table-tennis/wtt"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                WTT Betting
              </a>
              <a
                href="/table-tennis/schedule"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                Table Tennis Schedule
              </a>
            </nav>
          </>
        }
        sections={[
          {
            heading: "Table Tennis Betting Guide",
            body: (
              <>
                <p>
                  Table tennis is one of the highest-volume betting sports in the world — matches
                  run almost every day of the year across the{" "}
                  <a href="/table-tennis/wtt" className="text-brand underline">
                    WTT circuit
                  </a>
                  ,{" "}
                  <a href="/table-tennis/ittf" className="text-brand underline">
                    ITTF championships
                  </a>
                  , Olympic tournaments and professional leagues in China, Germany and Eastern
                  Europe. With matches lasting 20–40 minutes, table tennis produces more live
                  betting opportunities per day than almost any other sport.
                </p>
                <p className="mt-2">
                  Pre-match and{" "}
                  <a href="/table-tennis/live" className="text-brand underline">
                    live betting
                  </a>{" "}
                  are available across every competition, with markets covering match winners, game
                  handicaps, totals, correct scores and outrights — all settled in INR.
                </p>
              </>
            ),
          },
          {
            heading: "Latest Table Tennis Betting Odds",
            body: (
              <p>
                Table tennis odds are driven by world ranking, recent form, head-to-head records and
                playing style — a defensive chopper matched against an aggressive looper creates
                very different pricing than two attacking players. Because match frequency is so
                high, fatigue and same-day scheduling also matter. Compare current prices on the{" "}
                <a href="/table-tennis/odds" className="text-brand underline">
                  table tennis odds
                </a>{" "}
                page and check recent form on{" "}
                <a href="/table-tennis/results" className="text-brand underline">
                  results
                </a>
                .
              </p>
            ),
          },
          {
            heading: "WTT Betting India",
            body: (
              <>
                <p>
                  World Table Tennis (WTT) is the sport's professional tour — Grand Smash events,
                  Champions tournaments and Star Contender stops run year-round with the world's top
                  players. Popular WTT markets include:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Match winner</li>
                  <li>Game handicap (±1.5 games)</li>
                  <li>Total games over/under</li>
                  <li>Total points over/under</li>
                  <li>Correct score — 3-0, 3-1, 3-2 (or 4-x in best-of-seven)</li>
                  <li>Outright tournament winner</li>
                </ul>
                <p className="mt-2">
                  See the full{" "}
                  <a href="/table-tennis/wtt" className="text-brand underline">
                    WTT betting guide
                  </a>
                  .
                </p>
              </>
            ),
          },
          {
            heading: "ITTF Table Tennis Betting",
            body: (
              <p>
                The ITTF World Table Tennis Championships — team and individual events alternating
                each year — are the sport's most prestigious titles alongside the Olympics. Markets
                cover every match plus outright winners, and the depth of the Chinese, Japanese,
                Korean and European squads makes early-round handicaps and totals particularly
                active. Full coverage on the{" "}
                <a href="/table-tennis/ittf" className="text-brand underline">
                  ITTF betting page
                </a>
                .
              </p>
            ),
          },
          {
            heading: "Olympic Table Tennis Betting",
            body: (
              <p>
                Olympic table tennis features five events — men's and women's singles, team events
                and mixed doubles — played in best-of-seven format. Olympic markets include match
                winners, medal outrights and nation specials, with pricing reflecting the sport's
                ranking hierarchy and China's historic dominance.
              </p>
            ),
          },
          {
            heading: "Professional Table Tennis Leagues",
            body: (
              <p>
                Domestic leagues provide daily betting volume: China's Super League, the German
                Bundesliga, Russia's league and Eastern European competitions (Czech, Polish,
                Ukrainian leagues) run busy schedules. These leagues are the backbone of daily table
                tennis betting — high match counts, frequent live markets and plenty of data on
                recurring player matchups.
              </p>
            ),
          },
          {
            heading: "Popular Table Tennis Betting Markets",
            body: (
              <>
                <h3 className="mt-2 font-semibold">Game Handicap Betting</h3>
                <p>
                  The core table tennis market — a -1.5 game handicap means the favourite must win
                  3-0 or 3-1 in a best-of-five. Points handicaps (e.g. -4.5 points) work like a
                  spread on total points won.
                </p>
                <h3 className="mt-3 font-semibold">Total Points Betting</h3>
                <p>
                  Over/under on the combined points played in a match or a single game — useful when
                  you expect a tight, deuce-heavy contest without picking a winner.
                </p>
                <h3 className="mt-3 font-semibold">Correct Score Betting</h3>
                <p>
                  Predict the exact game score — 3-0, 3-1 or 3-2 in best-of-five, 4-x in
                  best-of-seven. Pays well on dominant favourites when you expect a sweep.
                </p>
                <h3 className="mt-3 font-semibold">Race to Points Betting</h3>
                <p>
                  Bet on which player reaches a points threshold first within a game — race to 3, 5
                  or 11 points. Popular in live betting where each rally reprices the market.
                </p>
              </>
            ),
          },
          {
            heading: "Live Table Tennis Betting",
            body: (
              <>
                <img
                  src="/assets/seo/live-table-tennis-betting.webp"
                  alt="Live table tennis betting — point-by-point in-play odds on WTT and league matches"
                  width="1200"
                  height="500"
                  loading="lazy"
                  decoding="async"
                  className="mb-3 w-full rounded-lg border"
                />
                <p>
                  Live table tennis betting reprices after every point — games are short (first to
                  11, win by two), so a single service run can flip game-winner odds in under a
                  minute. In-play markets include match winner, next-game winner, live handicaps,
                  totals and race-to-points.
                </p>
                <p className="mt-2">
                  Because matches finish quickly, live betting on table tennis rewards watching the
                  flow of play rather than pre-match stats alone. Follow every match on the{" "}
                  <a href="/table-tennis/live" className="text-brand underline">
                    live table tennis
                  </a>{" "}
                  page.
                </p>
              </>
            ),
          },
          {
            heading: "How to Analyse Table Tennis Matches",
            body: (
              <>
                <h3 className="mt-2 font-semibold">World ranking and recent form</h3>
                <p>
                  Rankings are a strong baseline, but recent tournament results matter more —
                  players peak and slump quickly on the tour.
                </p>
                <h3 className="mt-3 font-semibold">Head-to-head records</h3>
                <p>
                  Style matchups repeat: some players consistently struggle against choppers or
                  left-handers regardless of ranking.
                </p>
                <h3 className="mt-3 font-semibold">Playing style</h3>
                <p>
                  Aggressive loopers, blockers and defensive choppers create predictable matchup
                  dynamics — check styles before betting handicaps.
                </p>
                <h3 className="mt-3 font-semibold">Schedule and fatigue</h3>
                <p>
                  Players often compete in multiple matches per day — late-round fatigue is a real
                  factor in league play.
                </p>
              </>
            ),
          },
          {
            heading: "Responsible Table Tennis Betting",
            body: (
              <p>
                Sports betting should always be approached responsibly. Understand the risks
                involved, set personal limits, and participate only if you meet the legal age
                requirements in your location. Visit{" "}
                <a href="/responsible-gaming" className="text-brand underline">
                  Responsible Gaming
                </a>{" "}
                for deposit limits, self-exclusion tools and safer-gambling resources, or{" "}
                <a href="/contact" className="text-brand underline">
                  contact support
                </a>{" "}
                for account help.
              </p>
            ),
          },
          {
            heading: "Explore Table Tennis Betting Markets",
            body: (
              <p>
                Follow WTT, ITTF championships, Olympic table tennis and professional leagues with a
                full range of markets — handicaps, totals, correct scores and race-to-points.
                Deposit and withdraw in INR via{" "}
                <a href="/payments" className="text-brand underline">
                  supported payment methods
                </a>
                , check fixtures on the{" "}
                <a href="/table-tennis/schedule" className="text-brand underline">
                  table tennis schedule
                </a>
                , and review our{" "}
                <a href="/terms" className="text-brand underline">
                  Terms &amp; Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy-policy" className="text-brand underline">
                  Privacy Policy
                </a>
                .
              </p>
            ),
          },
        ]}
      >
        <section className="mt-10">
          <h2 className="text-xl font-bold sm:text-2xl">Table Tennis Betting FAQ</h2>
          <div className="mt-4 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-lg border bg-card p-4">
                <summary className="cursor-pointer font-semibold">{f.q}</summary>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
        <nav aria-label="Table tennis betting resources" className="mt-10">
          <h2 className="text-xl font-bold sm:text-2xl">Table tennis betting resources</h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm font-semibold sm:grid-cols-3">
            <li>
              <a href="/table-tennis/wtt" className="block rounded-md border p-3 hover:bg-accent">
                WTT Betting
              </a>
            </li>
            <li>
              <a href="/table-tennis/ittf" className="block rounded-md border p-3 hover:bg-accent">
                ITTF Betting
              </a>
            </li>
            <li>
              <a href="/table-tennis/live" className="block rounded-md border p-3 hover:bg-accent">
                Live Table Tennis
              </a>
            </li>
            <li>
              <a href="/table-tennis/odds" className="block rounded-md border p-3 hover:bg-accent">
                Table Tennis Odds
              </a>
            </li>
            <li>
              <a
                href="/table-tennis/results"
                className="block rounded-md border p-3 hover:bg-accent"
              >
                Table Tennis Results
              </a>
            </li>
            <li>
              <a
                href="/table-tennis/schedule"
                className="block rounded-md border p-3 hover:bg-accent"
              >
                Table Tennis Schedule
              </a>
            </li>
          </ul>
        </nav>
      </SEOPage>
    </>
  ),
});
