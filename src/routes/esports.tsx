import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Sports", url: "/sports" },
  { name: "Esports Betting", url: "/esports" },
];

const faqs = [
  {
    q: "What is esports betting?",
    a: "Esports betting lets you place wagers on competitive video game matches and tournaments. Popular titles include CS2, Dota 2, League of Legends and Valorant, with markets such as match winner, map winner, handicaps and totals.",
  },
  {
    q: "Which esports games can I bet on?",
    a: "At 1xBET India you can bet on Counter-Strike 2, Dota 2, League of Legends, Valorant and other competitive titles such as PUBG/BGMI, Call of Duty, FIFA/eFootball and Rocket League, depending on the tournament schedule.",
  },
  {
    q: "Can I bet on CS2 tournaments?",
    a: "Yes. We price CS2 Majors, ESL Pro League, IEM and BLAST events with markets for match winner, map winner, map handicaps, total rounds and pistol rounds, pre-match and live.",
  },
  {
    q: "How does live esports betting work?",
    a: "Live esports betting lets you place bets while a match is in progress. Odds update in real time as rounds, maps and objectives change, and you can follow live statistics before confirming your selection.",
  },
  {
    q: "What esports betting markets are available?",
    a: "Common esports markets include match winner, map winner, correct map score, map handicap, total maps, total rounds/kills, first blood, pistol round winner and outright tournament winner. Availability varies by game and event.",
  },
];

const esportsEvents = [
  {
    name: "ESL Pro League 2026 Season (CS2)",
    sport: "Counter-Strike 2",
    startDate: "2026-09",
    organizer: "ESL",
    url: `${SITE_URL}/cs2-betting`,
  },
  {
    name: "The International 2026 (Dota 2)",
    sport: "Dota 2",
    startDate: "2026-09",
    organizer: "Valve",
    url: `${SITE_URL}/dota2-betting`,
  },
  {
    name: "League of Legends World Championship 2026",
    sport: "League of Legends",
    startDate: "2026-10",
    organizer: "Riot Games",
    url: `${SITE_URL}/lol-betting`,
  },
  {
    name: "Valorant Champions Tour 2027 Season",
    sport: "Valorant",
    startDate: "2027-01",
    organizer: "Riot Games",
    url: `${SITE_URL}/valorant-betting`,
  },
];

export const Route = createFileRoute("/esports")({
  head: () => ({
    meta: [
      { title: "Esports Betting India | CS2, Dota 2, LoL & Valorant Odds" },
      {
        name: "description",
        content:
          "Esports betting in India at 1xBET. Bet on CS2, Dota 2, LoL and Valorant tournaments with live esports odds, in-play markets and fast INR payouts.",
      },
      { property: "og:title", content: "Esports Betting India | CS2, Dota 2, LoL & Valorant Odds" },
      {
        property: "og:description",
        content:
          "Live esports odds on CS2, Dota 2, League of Legends and Valorant tournaments. Bet in INR at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/esports` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-esports.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        name: "twitter:title",
        content: "Esports Betting India | CS2, Dota 2, LoL & Valorant Odds",
      },
      {
        name: "twitter:description",
        content:
          "Live esports odds on CS2, Dota 2, LoL and Valorant tournaments. Bet in INR at 1xBET India.",
      },
      { name: "twitter:image", content: `${SITE_URL}/assets/seo/og-esports.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/esports` }],
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
          name: "Upcoming esports tournaments at 1xBET India",
          itemListElement: esportsEvents.map((e, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "SportsEvent",
              name: e.name,
              sport: e.sport,
              startDate: e.startDate,
              eventStatus: "https://schema.org/EventScheduled",
              location: { "@type": "VirtualLocation", url: `${SITE_URL}/esports` },
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
          headline: "Esports Betting India — CS2, Dota 2, LoL & Valorant Odds",
          dateModified: "2026-09-21",
          author: { "@type": "Organization", name: "1xBET Esports Content Team" },
          publisher: { "@id": `${SITE_URL}/#organization` },
          mainEntityOfPage: `${SITE_URL}/esports`,
          image: `${SITE_URL}/assets/seo/og-esports.png`,
        }),
      },
    ],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Esports Betting India – CS2, Dota 2, LoL & Valorant Odds"
        description="Live esports odds on CS2, Dota 2, League of Legends, Valorant and more — bet in INR on desktop or mobile"
        breadcrumbs={breadcrumbItems}
        topContent={
          <>
            <img
              src="/assets/seo/esports-betting-india.webp"
              alt="Esports betting India — CS2, Valorant, Dota 2 and League of Legends live odds"
              width="1200"
              height="500"
              fetchPriority="high"
              decoding="async"
              className="mt-4 w-full rounded-lg border"
            />
            <p className="mt-2 text-xs text-muted-foreground">
              Written by: 1xBET Esports Content Team · Last updated: 21 September 2026
            </p>
            <nav
              aria-label="Esports quick links"
              className="mt-4 grid grid-cols-1 gap-2 text-sm font-semibold sm:grid-cols-3"
            >
              <a
                href="/live"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                Live Esports Odds
              </a>
              <a
                href="/esports-schedule"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                Esports Schedule
              </a>
              <a
                href="/esports-results"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                Esports Results
              </a>
            </nav>
          </>
        }
        sections={[
          {
            heading: "Online Esports Betting in India",
            body: (
              <>
                <p>
                  Esports betting in India has grown rapidly as competitive gaming attracts millions
                  of viewers and fans. At 1xBET India you can bet on the biggest esports titles —
                  Counter-Strike 2, Dota 2, League of Legends and Valorant — with pre-match and live
                  markets on every major tournament, priced in INR.
                </p>
                <p className="mt-2">
                  Whether you follow CS2 Majors, The International, LoL Worlds or the Valorant
                  Champions Tour, online esports betting gives you access to match winner markets,
                  map markets, handicaps, totals and player props from your desktop or the{" "}
                  <a href="/app" className="text-brand underline">
                    mobile app
                  </a>
                  . Check the{" "}
                  <a href="/esports-schedule" className="text-brand underline">
                    esports schedule
                  </a>{" "}
                  for upcoming fixtures and the{" "}
                  <a href="/live" className="text-brand underline">
                    live betting
                  </a>{" "}
                  lobby for matches in play right now.
                </p>
              </>
            ),
          },
          {
            heading: "Popular Esports Betting Games",
            body: (
              <>
                <p>
                  Our esportsbook covers the leading competitive titles alongside a rotating
                  selection of regional and invitational events. The main esports betting games
                  available are:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    <a href="/cs2-betting" className="text-brand underline">
                      Counter-Strike 2 (CS2) betting
                    </a>{" "}
                    — Majors, ESL Pro League, IEM and BLAST events
                  </li>
                  <li>
                    <a href="/dota2-betting" className="text-brand underline">
                      Dota 2 betting
                    </a>{" "}
                    — The International and top-tier circuit events
                  </li>
                  <li>
                    <a href="/valorant-betting" className="text-brand underline">
                      Valorant betting
                    </a>{" "}
                    — VCT leagues, Masters and Champions
                  </li>
                  <li>
                    <a href="/lol-betting" className="text-brand underline">
                      League of Legends betting
                    </a>{" "}
                    — Worlds, LCK, LPL, LEC and regional playoffs
                  </li>
                  <li>
                    PUBG/BGMI, Call of Duty, FIFA/eFootball, Rocket League and more — depending on
                    the tournament calendar
                  </li>
                </ul>
                <p className="mt-2">
                  Each game has its own markets shaped by how it is played — round-based markets in
                  CS2 and Valorant, map series in Dota 2 and LoL — so the betting options differ
                  from title to title.
                </p>
              </>
            ),
          },
          {
            heading: "CS2 Betting Guide",
            body: (
              <>
                <img
                  src="/assets/seo/cs2-betting-india.webp"
                  alt="CS2 betting online India — Counter-Strike 2 Major and tournament odds"
                  width="1200"
                  height="500"
                  loading="lazy"
                  decoding="async"
                  className="mb-3 w-full rounded-lg border"
                />
                <p>
                  Counter-Strike 2 is the most bet-on esport in the world. CS2 betting in India
                  covers the Valve Majors, ESL Pro League, IEM stops and BLAST circuit, plus
                  hundreds of online and LAN matches every month.
                </p>
                <p className="mt-2">
                  Popular CS2 markets include match winner, map winner, map handicap (e.g. -1.5
                  maps), total maps, total rounds over/under, pistol round winner and correct map
                  score. Because CS2 is played round-by-round on a best-of-three map format, live
                  odds move quickly — economy rounds, force buys and momentum swings all shift
                  prices in real time.
                </p>
                <p className="mt-2">
                  Read our dedicated{" "}
                  <a href="/cs2-betting" className="text-brand underline">
                    CS2 betting guide
                  </a>{" "}
                  for tournament coverage, market explanations and live betting tips.
                </p>
              </>
            ),
          },
          {
            heading: "Dota 2 Betting Guide",
            body: (
              <>
                <img
                  src="/assets/seo/dota2-betting-india.webp"
                  alt="Dota 2 betting markets — The International and tournament odds in India"
                  width="1200"
                  height="500"
                  loading="lazy"
                  decoding="async"
                  className="mb-3 w-full rounded-lg border"
                />
                <p>
                  Dota 2 betting centres on best-of series between professional teams across the
                  global circuit — capped by The International, the richest tournament in esports.
                  Markets follow the game's objectives: match winner, map winner, first blood, first
                  Roshan, total kills and tower markets.
                </p>
                <p className="mt-2">
                  Drafts matter enormously in Dota 2 — hero picks, bans and lane match-ups can shift
                  a series before it starts, which is why pre-match and live Dota 2 odds can differ
                  sharply. Follow upcoming fixtures on the{" "}
                  <a href="/esports-schedule" className="text-brand underline">
                    esports schedule
                  </a>{" "}
                  and read the full{" "}
                  <a href="/dota2-betting" className="text-brand underline">
                    Dota 2 betting guide
                  </a>
                  .
                </p>
              </>
            ),
          },
          {
            heading: "Valorant Betting Guide",
            body: (
              <>
                <img
                  src="/assets/seo/valorant-betting-india.webp"
                  alt="Valorant betting India — VCT and Champions tournament odds"
                  width="1200"
                  height="500"
                  loading="lazy"
                  decoding="async"
                  className="mb-3 w-full rounded-lg border"
                />
                <p>
                  Valorant betting covers Riot Games' Valorant Champions Tour — regional leagues in
                  the Americas, EMEA, Pacific and China, plus Masters events and Valorant Champions,
                  the season-ending world championship.
                </p>
                <p className="mt-2">
                  Valorant markets mirror CS2's round structure: match winner, map winner, map
                  handicap, total rounds, pistol round and first blood. Agent compositions and map
                  veto phases can materially change a match-up, so check the veto before betting a
                  map winner. More detail in the{" "}
                  <a href="/valorant-betting" className="text-brand underline">
                    Valorant betting guide
                  </a>
                  .
                </p>
              </>
            ),
          },
          {
            heading: "League of Legends Betting Guide",
            body: (
              <>
                <img
                  src="/assets/seo/lol-betting-india.webp"
                  alt="LoL betting odds — League of Legends Worlds, LCK, LPL and LEC markets"
                  width="1200"
                  height="500"
                  loading="lazy"
                  decoding="async"
                  className="mb-3 w-full rounded-lg border"
                />
                <p>
                  LoL betting covers the world's most-watched esport: the LCK, LPL and LEC regional
                  leagues, MSI, and the League of Legends World Championship each autumn. Markets
                  include match winner, map winner, first blood, first dragon, first tower, total
                  kills and baron markets.
                </p>
                <p className="mt-2">
                  Best-of-one league matches and best-of-five playoff series price very differently
                  — upsets are more common in single maps. Our{" "}
                  <a href="/lol-betting" className="text-brand underline">
                    LoL betting guide
                  </a>{" "}
                  explains formats, regions and how to read LoL esports odds.
                </p>
              </>
            ),
          },
          {
            heading: "Esports Betting Markets Explained",
            body: (
              <>
                <p>
                  Esports odds work like traditional sports odds — they show the potential return on
                  a selection — but the markets are shaped by each game's format:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    <strong>Match winner</strong> — which team or player wins the series
                  </li>
                  <li>
                    <strong>Map winner</strong> — the winner of an individual map in a best-of
                    series
                  </li>
                  <li>
                    <strong>Map handicap</strong> — backing a team with a map advantage or deficit
                    (e.g. -1.5)
                  </li>
                  <li>
                    <strong>Correct map score</strong> — the exact series result, such as 2-0 or 2-1
                  </li>
                  <li>
                    <strong>Totals</strong> — over/under on total maps, rounds or kills
                  </li>
                  <li>
                    <strong>First blood / pistol round</strong> — who scores first in a map or round
                  </li>
                  <li>
                    <strong>Outright winner</strong> — the tournament or league champion
                  </li>
                </ul>
                <p className="mt-2">
                  Available markets vary by title, tournament stage and coverage level — always
                  check the market rules shown beside each selection before confirming a bet.
                </p>
              </>
            ),
          },
          {
            heading: "How Live Esports Betting Works",
            body: (
              <>
                <img
                  src="/assets/seo/live-esports-betting.webp"
                  alt="Live esports betting odds updating in play — map, round and kill markets"
                  width="1200"
                  height="500"
                  loading="lazy"
                  decoding="async"
                  className="mb-3 w-full rounded-lg border"
                />
                <p>
                  Live esports betting lets you place bets while a match is in progress. Esports is
                  especially suited to in-play markets because matches are built from discrete
                  rounds and maps — every pistol round, economy reset, dragon fight or Roshan kill
                  reprices the odds.
                </p>
                <p className="mt-2">
                  In the{" "}
                  <a href="/live" className="text-brand underline">
                    live betting
                  </a>{" "}
                  section you can follow match statistics, see odds update in real time and use cash
                  out on selected markets to settle a bet before the match ends. In-play markets
                  include next map winner, total maps and revised match winner prices.
                </p>
              </>
            ),
          },
          {
            heading: "Esports Betting Tips",
            body: (
              <>
                <p>
                  Esports rewards research — a few habits that experienced esports bettors follow:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    Check recent form and head-to-head records on the{" "}
                    <a href="/esports-results" className="text-brand underline">
                      esports results
                    </a>{" "}
                    page before betting
                  </li>
                  <li>
                    Understand the format — best-of-one matches are far more volatile than
                    best-of-three or best-of-five series
                  </li>
                  <li>Watch roster news: stand-ins and substitutions can change a team's odds</li>
                  <li>
                    In CS2 and Valorant, map veto advantages are real edges — check which maps a
                    team bans
                  </li>
                  <li>
                    Compare esports odds across markets — map handicaps often offer better value
                    than straight match winners for heavy favourites
                  </li>
                  <li>Set a budget per tournament and stick to it</li>
                </ul>
              </>
            ),
          },
          {
            heading: "Responsible Esports Betting",
            body: (
              <p>
                Esports betting should be entertainment, not a way to make guaranteed income. Only
                bet if you are 18 or older and eligible, set personal limits, never chase losses and
                take breaks when you need them. Visit{" "}
                <a href="/responsible-gaming" className="text-brand underline">
                  Responsible Gaming
                </a>{" "}
                for account controls and safer-gambling resources, and see{" "}
                <a href="/payments" className="text-brand underline">
                  payment methods
                </a>{" "}
                for INR deposit and withdrawal information.
              </p>
            ),
          },
        ]}
      >
        <section className="mt-10">
          <h2 className="text-xl font-bold sm:text-2xl">Esports Betting FAQs</h2>
          <div className="mt-4 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-lg border bg-card p-4">
                <summary className="cursor-pointer font-semibold">{f.q}</summary>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
        <nav aria-label="Esports betting resources" className="mt-10">
          <h2 className="text-xl font-bold sm:text-2xl">Esports betting resources</h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm font-semibold sm:grid-cols-3">
            <li>
              <a href="/cs2-betting" className="block rounded-md border p-3 hover:bg-accent">
                CS2 Betting
              </a>
            </li>
            <li>
              <a href="/dota2-betting" className="block rounded-md border p-3 hover:bg-accent">
                Dota 2 Betting
              </a>
            </li>
            <li>
              <a href="/valorant-betting" className="block rounded-md border p-3 hover:bg-accent">
                Valorant Betting
              </a>
            </li>
            <li>
              <a href="/lol-betting" className="block rounded-md border p-3 hover:bg-accent">
                LoL Betting
              </a>
            </li>
            <li>
              <a href="/esports-schedule" className="block rounded-md border p-3 hover:bg-accent">
                Esports Schedule
              </a>
            </li>
            <li>
              <a href="/esports-results" className="block rounded-md border p-3 hover:bg-accent">
                Esports Results
              </a>
            </li>
          </ul>
        </nav>
      </SEOPage>
    </>
  ),
});
