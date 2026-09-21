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
    a: "Esports betting involves predicting possible outcomes of competitive gaming matches and tournaments through different available markets.",
  },
  {
    q: "Which esports games can I bet on?",
    a: "Popular esports betting games include CS2, Dota 2, League of Legends, Valorant, PUBG/BGMI, Call of Duty, FIFA/eFootball, and Rocket League.",
  },
  {
    q: "Can I bet on CS2 tournaments?",
    a: "Yes, CS2 tournaments may include different betting markets such as match winner, map winner, round markets, and tournament outcomes.",
  },
  {
    q: "How does live esports betting work?",
    a: "Live esports betting allows users to explore markets while matches are being played with updated odds based on current game situations.",
  },
  {
    q: "What esports betting markets are available?",
    a: "Available markets may include match winners, map winners, handicaps, totals, first blood, and tournament winners.",
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
      {
        property: "og:title",
        content: "Esports Betting India | CS2, Dota 2, LoL & Valorant Odds",
      },
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
            heading: "Esports Betting at 1xBET India",
            body: (
              <>
                <p>
                  Esports has become one of the fastest-growing competitive gaming categories
                  worldwide. Millions of players and fans follow professional tournaments across
                  games like Counter-Strike 2 (CS2), Dota 2, League of Legends, Valorant, PUBG/BGMI,
                  Call of Duty, FIFA/eFootball, and Rocket League.
                </p>
                <p className="mt-2">
                  1xBET India provides esports betting markets covering major tournaments,
                  professional leagues, and competitive gaming events. Users can explore different
                  esports betting options with match markets, tournament odds, and{" "}
                  <a href="/live" className="text-brand underline">
                    live betting
                  </a>{" "}
                  opportunities.
                </p>
              </>
            ),
          },
          {
            heading: "Esports Coverage at 1xBET India",
            body: (
              <>
                <p>
                  The esports section covers popular competitive gaming titles and international
                  events, including:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    <a href="/cs2-betting" className="text-brand underline">
                      Counter-Strike 2 (CS2)
                    </a>
                  </li>
                  <li>
                    <a href="/dota2-betting" className="text-brand underline">
                      Dota 2
                    </a>
                  </li>
                  <li>
                    <a href="/lol-betting" className="text-brand underline">
                      League of Legends (LoL)
                    </a>
                  </li>
                  <li>
                    <a href="/valorant-betting" className="text-brand underline">
                      Valorant
                    </a>
                  </li>
                  <li>PUBG/BGMI</li>
                  <li>Call of Duty</li>
                  <li>FIFA/eFootball</li>
                  <li>Rocket League</li>
                </ul>
                <p className="mt-2">
                  From regional qualifiers to global championships, esports fans can follow major
                  competitions on the{" "}
                  <a href="/esports-schedule" className="text-brand underline">
                    esports schedule
                  </a>{" "}
                  and explore available betting markets.
                </p>
              </>
            ),
          },
          {
            heading: "Popular Esports Betting Games",
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
                <h3 className="mt-2 font-semibold">CS2 Betting</h3>
                <p>
                  Counter-Strike 2 is one of the most popular esports titles with professional teams
                  competing in international tournaments. CS2 betting markets may include match
                  winner, map winner, round winner, handicap markets, total rounds, and tournament
                  outcomes.
                </p>
                <p className="mt-2">
                  Before selecting a market, users should consider team performance, recent results,
                  player form, map statistics, and tournament history. Read the dedicated{" "}
                  <a href="/cs2-betting" className="text-brand underline">
                    CS2 betting guide
                  </a>{" "}
                  for more detail.
                </p>
                <img
                  src="/assets/seo/dota2-betting-india.webp"
                  alt="Dota 2 betting markets — The International and tournament odds in India"
                  width="1200"
                  height="500"
                  loading="lazy"
                  decoding="async"
                  className="mb-3 mt-4 w-full rounded-lg border"
                />
                <h3 className="mt-2 font-semibold">Dota 2 Betting</h3>
                <p>
                  Dota 2 features strategic gameplay with professional teams competing in events
                  such as The International and other major tournaments.
                </p>
                <p className="mt-2">Common Dota 2 betting markets include:</p>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  <li>Match winner</li>
                  <li>Series winner</li>
                  <li>Map winner</li>
                  <li>First blood</li>
                  <li>Total kills</li>
                  <li>Handicap markets</li>
                </ul>
                <p className="mt-2">
                  Understanding team strategies, player performance, and previous tournament records
                  can help users better understand available markets — see the{" "}
                  <a href="/dota2-betting" className="text-brand underline">
                    Dota 2 betting guide
                  </a>
                  .
                </p>
                <img
                  src="/assets/seo/valorant-betting-india.webp"
                  alt="Valorant betting India — VCT and Champions tournament odds"
                  width="1200"
                  height="500"
                  loading="lazy"
                  decoding="async"
                  className="mb-3 mt-4 w-full rounded-lg border"
                />
                <h3 className="mt-2 font-semibold">Valorant Betting</h3>
                <p>
                  Valorant has quickly become a leading tactical esports game with professional
                  leagues and global tournaments.
                </p>
                <p className="mt-2">Valorant betting markets may include:</p>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  <li>Match winner</li>
                  <li>Map winner</li>
                  <li>Round handicap</li>
                  <li>Total rounds</li>
                  <li>Tournament winner</li>
                </ul>
                <p className="mt-2">
                  Users should review team lineups, recent performances, and map statistics before
                  exploring betting options — see the{" "}
                  <a href="/valorant-betting" className="text-brand underline">
                    Valorant betting guide
                  </a>
                  .
                </p>
                <img
                  src="/assets/seo/lol-betting-india.webp"
                  alt="LoL betting odds — League of Legends Worlds, LCK, LPL and LEC markets"
                  width="1200"
                  height="500"
                  loading="lazy"
                  decoding="async"
                  className="mb-3 mt-4 w-full rounded-lg border"
                />
                <h3 className="mt-2 font-semibold">League of Legends Betting</h3>
                <p>
                  League of Legends is one of the largest esports games globally, featuring
                  professional leagues and international championships.
                </p>
                <p className="mt-2">
                  Available markets may include match winners, tournament outcomes, map results, and
                  other competitive events — see the{" "}
                  <a href="/lol-betting" className="text-brand underline">
                    LoL betting guide
                  </a>
                  .
                </p>
              </>
            ),
          },
          {
            heading: "Esports Betting Markets Explained",
            body: (
              <>
                <p>
                  Esports betting provides different markets based on match outcomes and game
                  situations. Popular markets include:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    <strong>Match Winner</strong> — predict which esports team will win a specific
                    match or series
                  </li>
                  <li>
                    <strong>Map Winner</strong> — choose the team expected to win an individual map
                  </li>
                  <li>
                    <strong>Handicap Betting</strong> — compare teams with adjusted advantages or
                    disadvantages
                  </li>
                  <li>
                    <strong>Total Maps or Rounds</strong> — predict whether the total number of maps
                    or rounds will be higher or lower than a selected number
                  </li>
                  <li>
                    <strong>Tournament Winner</strong> — select the team expected to win a complete
                    esports tournament
                  </li>
                </ul>
              </>
            ),
          },
          {
            heading: "Live Esports Betting",
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
                  Live esports betting allows users to follow matches while they are in progress.
                  Esports matches can change quickly due to team strategies, round results, player
                  performances, and tactical decisions.
                </p>
                <p className="mt-2">Live betting markets may consider:</p>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  <li>Current score</li>
                  <li>Map progress</li>
                  <li>Round results</li>
                  <li>Team momentum</li>
                  <li>Player performance</li>
                </ul>
                <p className="mt-2">
                  Users should always review updated information and current odds before making any
                  betting decisions. Visit the{" "}
                  <a href="/live" className="text-brand underline">
                    live betting
                  </a>{" "}
                  section for matches in play.
                </p>
              </>
            ),
          },
          {
            heading: "How to Start Esports Betting",
            body: (
              <>
                <p>Getting started with esports betting involves a few simple steps:</p>
                <ol className="mt-2 list-decimal space-y-1 pl-5">
                  <li>Create an account.</li>
                  <li>
                    Select a preferred{" "}
                    <a href="/payments" className="text-brand underline">
                      payment method
                    </a>
                    .
                  </li>
                  <li>Open the esports betting section.</li>
                  <li>Choose a tournament or match.</li>
                  <li>Review available markets and odds.</li>
                  <li>Confirm your selection.</li>
                </ol>
                <p className="mt-2">Users should understand each market before placing a bet.</p>
              </>
            ),
          },
          {
            heading: "Why Choose 1xBET India for Esports Betting",
            body: (
              <>
                <p>
                  1xBET India provides access to esports competitions, betting markets, and live
                  match options. Key features include:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Coverage of major esports games</li>
                  <li>CS2, Dota 2, LoL, and Valorant markets</li>
                  <li>Live esports betting options</li>
                  <li>Updated tournament odds</li>
                  <li>
                    Mobile and desktop betting access via the{" "}
                    <a href="/app" className="text-brand underline">
                      app
                    </a>
                  </li>
                  <li>
                    <a href="/help" className="text-brand underline">
                      Customer support
                    </a>{" "}
                    assistance
                  </li>
                </ul>
              </>
            ),
          },
          {
            heading: "Responsible Esports Betting",
            body: (
              <>
                <p>
                  Esports betting should always be approached responsibly. Users should be 18 years
                  or older and follow responsible gaming practices.
                </p>
                <p className="mt-2">Responsible betting includes:</p>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  <li>Setting personal limits</li>
                  <li>Managing betting budgets</li>
                  <li>Avoiding chasing losses</li>
                  <li>Understanding risks</li>
                  <li>Taking regular breaks</li>
                </ul>
                <p className="mt-2">
                  Responsible gaming helps maintain a controlled and balanced experience — visit{" "}
                  <a href="/responsible-gaming" className="text-brand underline">
                    Responsible Gaming
                  </a>{" "}
                  for account controls and safer-gambling resources.
                </p>
              </>
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
