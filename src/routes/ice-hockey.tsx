import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Sports", url: "/sports" },
  { name: "Ice Hockey Betting", url: "/ice-hockey" },
];

const faqs = [
  {
    q: "What ice hockey leagues can I bet on?",
    a: "You can bet on the NHL, KHL, IIHF World Championship, Olympic hockey, plus European domestic leagues such as Sweden's SHL, Finland's Liiga, the Czech Extraliga and Switzerland's National League.",
  },
  {
    q: "What is puck line betting in hockey?",
    a: "The puck line is hockey's version of a point spread, most commonly set at ±1.5 goals. The favourite must win by two or more goals; the underdog covers by winning outright or losing by a single goal.",
  },
  {
    q: "How does hockey totals betting work?",
    a: "Totals betting is an over/under market on the combined goals scored by both teams, usually around 5.5 or 6.5 goals in the NHL. Overtime and shootout-deciding goals normally count toward the total.",
  },
  {
    q: "Can I bet on NHL matches live?",
    a: "Yes — live NHL betting markets reprice after every goal, power play and period break. Because most NHL games are played overnight India time, live betting is often the most practical way to follow the action.",
  },
  {
    q: "What hockey tournaments are available?",
    a: "Beyond league play, you can bet on the Stanley Cup playoffs, the IIHF World Championship each May, Olympic hockey tournaments, the KHL's Gagarin Cup playoffs and various European league championships.",
  },
];

const hockeyEvents = [
  {
    name: "NHL 2026-27 Season & Stanley Cup Playoffs",
    sport: "Ice Hockey",
    startDate: "2026-10",
    organizer: "NHL",
    location: { "@type": "Country", name: "United States" },
    url: `${SITE_URL}/ice-hockey/nhl`,
  },
  {
    name: "KHL 2026-27 Season & Gagarin Cup",
    sport: "Ice Hockey",
    startDate: "2026-09",
    organizer: "KHL",
    location: { "@type": "Country", name: "Russia" },
    url: `${SITE_URL}/ice-hockey/khl`,
  },
  {
    name: "IIHF World Championship 2027",
    sport: "Ice Hockey",
    startDate: "2027-05",
    organizer: "IIHF",
    location: { "@type": "AdministrativeArea", name: "Europe" },
    url: `${SITE_URL}/ice-hockey`,
  },
];

export const Route = createFileRoute("/ice-hockey")({
  head: () => ({
    meta: [
      { title: "Ice Hockey Betting India | NHL, KHL & Live Hockey Odds | 1xBET" },
      {
        name: "description",
        content:
          "Ice hockey betting in India at 1xBET. Live odds on NHL, KHL and IIHF World Championship — puck line, totals, period and live markets in INR.",
      },
      {
        property: "og:title",
        content: "Ice Hockey Betting India | NHL & KHL Odds | 1xBET",
      },
      {
        property: "og:description",
        content:
          "Follow NHL, KHL and IIHF hockey odds with puck line, totals and live betting markets at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/ice-hockey` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-ice-hockey.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        name: "twitter:title",
        content: "Ice Hockey Betting India | NHL & KHL Odds | 1xBET",
      },
      {
        name: "twitter:description",
        content:
          "Follow NHL, KHL and IIHF hockey odds with puck line, totals and live betting markets at 1xBET India.",
      },
      { name: "twitter:image", content: `${SITE_URL}/assets/seo/og-ice-hockey.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/ice-hockey` }],
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
          name: "Ice hockey competitions covered at 1xBET India",
          itemListElement: hockeyEvents.map((e, i) => ({
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
          headline: "Ice Hockey Betting India — NHL, KHL & Live Hockey Odds",
          dateModified: "2026-09-21",
          author: { "@type": "Organization", name: "1xBET Hockey Content Team" },
          publisher: { "@id": `${SITE_URL}/#organization` },
          mainEntityOfPage: `${SITE_URL}/ice-hockey`,
          image: `${SITE_URL}/assets/seo/og-ice-hockey.png`,
        }),
      },
    ],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Ice Hockey Betting India"
        description="NHL, KHL and IIHF hockey odds — puck line, totals, period and live markets in INR"
        breadcrumbs={breadcrumbItems}
        topContent={
          <>
            <img
              src="/assets/seo/ice-hockey-betting-india.webp"
              alt="Ice hockey betting India NHL odds and live hockey markets"
              width="1200"
              height="500"
              fetchPriority="high"
              decoding="async"
              className="mt-4 w-full rounded-lg border"
            />
            <p className="mt-2 text-xs text-muted-foreground">
              Written by: 1xBET Hockey Content Team · Reviewed by our hockey analysts · Last
              updated: 21 September 2026
            </p>
            <nav
              aria-label="Ice hockey quick links"
              className="mt-4 grid grid-cols-1 gap-2 text-sm font-semibold sm:grid-cols-3"
            >
              <a
                href="/ice-hockey/live"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                Live Hockey Odds
              </a>
              <a
                href="/ice-hockey/nhl"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                NHL Betting
              </a>
              <a
                href="/ice-hockey/schedule"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                Hockey Schedule
              </a>
            </nav>
          </>
        }
        sections={[
          {
            heading: "Ice Hockey Betting Guide",
            body: (
              <>
                <p>
                  Ice hockey is one of the fastest sports in the world, and that speed translates
                  directly into its betting markets — momentum can swing on a single shift, power
                  play or goaltending change. At 1xBET India you can bet on the sport across the
                  full calendar: the{" "}
                  <a href="/ice-hockey/nhl" className="text-brand underline">
                    NHL
                  </a>{" "}
                  and its Stanley Cup playoffs, Russia's{" "}
                  <a href="/ice-hockey/khl" className="text-brand underline">
                    KHL
                  </a>
                  , the IIHF World Championship, Olympic hockey and Europe's top domestic leagues.
                </p>
                <p className="mt-2">
                  Pre-match and{" "}
                  <a href="/ice-hockey/live" className="text-brand underline">
                    live betting
                  </a>{" "}
                  are available on every competition, with markets spanning match winners, puck
                  lines, totals, period betting and outrights — all settled in INR.
                </p>
              </>
            ),
          },
          {
            heading: "Latest Ice Hockey Odds",
            body: (
              <p>
                Hockey odds move more than in most sports because goaltending announcements come
                late — a starting goalie confirmed an hour before puck drop can shift the moneyline
                by 20–30 points. Travel schedules, back-to-back games and injuries to top-six
                forwards all feed into pricing. Compare current prices on the{" "}
                <a href="/ice-hockey/odds" className="text-brand underline">
                  ice hockey odds
                </a>{" "}
                page and check recent form on{" "}
                <a href="/ice-hockey/results" className="text-brand underline">
                  hockey results
                </a>
                .
              </p>
            ),
          },
          {
            heading: "NHL Betting India",
            body: (
              <>
                <p>
                  The NHL is the world's premier hockey league: 32 teams playing an 82-game regular
                  season from October to April, followed by four rounds of Stanley Cup playoffs.
                  Popular NHL markets include:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Moneyline and regulation-time winner</li>
                  <li>Puck line (usually ±1.5 goals)</li>
                  <li>Total goals over/under</li>
                  <li>Period winners and period totals</li>
                  <li>Player props — goals, assists, points, saves</li>
                  <li>Stanley Cup, conference and division outrights</li>
                </ul>
                <p className="mt-2">
                  For India-based bettors, NHL games run overnight into early morning — live betting
                  during the second and third periods is the most practical way in. See the full{" "}
                  <a href="/ice-hockey/nhl" className="text-brand underline">
                    NHL betting guide
                  </a>
                  .
                </p>
              </>
            ),
          },
          {
            heading: "KHL Hockey Betting",
            body: (
              <>
                <p>
                  The KHL is the strongest league outside North America, with clubs across Russia
                  and neighbouring countries competing for the Gagarin Cup. KHL games run at
                  convenient evening times in India, and the league's tighter, lower-scoring style
                  makes puck line and under-totals markets particularly popular. Explore the{" "}
                  <a href="/ice-hockey/khl" className="text-brand underline">
                    KHL betting guide
                  </a>
                  .
                </p>
              </>
            ),
          },
          {
            heading: "IIHF Tournament Betting",
            body: (
              <p>
                The IIHF World Championship runs every May and brings together national teams from
                the top hockey nations — Canada, USA, Finland, Sweden, Czechia and more. Olympic
                hockey adds another major event every four years. Tournament markets include match
                winners, group standings, outright champion and top scorer, with live betting on
                every game.
              </p>
            ),
          },
          {
            heading: "Popular Ice Hockey Betting Markets",
            body: (
              <>
                <h3 className="mt-2 font-semibold">Puck Line Betting Explained</h3>
                <p>
                  The puck line is hockey's handicap market, most commonly set at ±1.5 goals. Back
                  the favourite and they must win by two or more; back the underdog and they cover
                  by winning or losing by a single goal. In low-scoring leagues like the KHL, the
                  +1.5 underdog covers often enough to carry real value.
                </p>
                <h3 className="mt-3 font-semibold">Hockey Totals Betting</h3>
                <p>
                  Totals are an over/under on combined goals — typically 5.5 or 6.5 in the NHL.
                  Goaltender matchups, power-play efficiency and recent scoring trends drive the
                  number. Overtime and the shootout-deciding goal usually count toward the total.
                </p>
                <h3 className="mt-3 font-semibold">Period Betting</h3>
                <p>
                  Hockey splits into three 20-minute periods, each with its own markets: period
                  winner, period totals and team to score first. Some teams are famously fast
                  starters or strong closers, which makes period betting a useful niche.
                </p>
                <h3 className="mt-3 font-semibold">Stanley Cup Betting</h3>
                <p>
                  Outright markets run all season — Stanley Cup champion, conference winners,
                  division winners and individual awards like the Hart and Conn Smythe trophies.
                  Prices shift dramatically once the playoff bracket is set.
                </p>
              </>
            ),
          },
          {
            heading: "Live Hockey Betting",
            body: (
              <>
                <img
                  src="/assets/seo/live-ice-hockey-betting.webp"
                  alt="Live ice hockey betting — in-play puck line and totals markets on NHL and KHL games"
                  width="1200"
                  height="500"
                  loading="lazy"
                  decoding="async"
                  className="mb-3 w-full rounded-lg border"
                />
                <p>
                  Live hockey betting reprices after every goal, penalty and power play — and the
                  empty-net finish makes the last two minutes uniquely volatile. A team trailing by
                  one late will pull its goalie, which swings both the match-winner and totals
                  markets in seconds.
                </p>
                <p className="mt-2">
                  In-play markets include next-goal scorer (team), live puck line, updated totals,
                  period results and match winner. Follow every game on the{" "}
                  <a href="/ice-hockey/live" className="text-brand underline">
                    live hockey betting
                  </a>{" "}
                  page.
                </p>
              </>
            ),
          },
          {
            heading: "How to Analyse Hockey Matches",
            body: (
              <>
                <h3 className="mt-2 font-semibold">Goaltending</h3>
                <p>
                  The starting goalie is the single biggest variable — check confirmed starters and
                  save-percentage form before any puck-line or totals bet.
                </p>
                <h3 className="mt-3 font-semibold">Schedule and travel</h3>
                <p>
                  Back-to-back games and long road trips measurably hurt performance, especially in
                  the NHL's compressed schedule.
                </p>
                <h3 className="mt-3 font-semibold">Special teams</h3>
                <p>
                  Power-play and penalty-kill percentages decide tight games — a top-five power play
                  against a weak penalty kill is a genuine edge.
                </p>
                <h3 className="mt-3 font-semibold">Head-to-head and home/away</h3>
                <p>
                  Divisional rivals play each other often, and home-ice advantage remains real in
                  hockey — check both before pricing a match winner.
                </p>
              </>
            ),
          },
          {
            heading: "Ice Hockey Betting Tips",
            body: (
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Always confirm the starting goaltender before betting.</li>
                <li>Compare puck-line prices with the moneyline — the +1.5 often offers value.</li>
                <li>Factor in rest days, back-to-backs and travel distance.</li>
                <li>Check the hockey schedule for divisional and rivalry games.</li>
                <li>Set personal betting limits and make responsible decisions.</li>
              </ul>
            ),
          },
          {
            heading: "Responsible Hockey Betting",
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
            heading: "Explore Ice Hockey Betting Markets",
            body: (
              <p>
                Follow the NHL, KHL and international hockey with a full range of markets — puck
                line, totals, period betting and outrights. Deposit and withdraw in INR via{" "}
                <a href="/payments" className="text-brand underline">
                  supported payment methods
                </a>
                , check today's games on the{" "}
                <a href="/ice-hockey/schedule" className="text-brand underline">
                  hockey schedule
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
        <nav aria-label="Ice hockey betting resources" className="mt-10">
          <h2 className="text-xl font-bold sm:text-2xl">Ice hockey betting resources</h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm font-semibold sm:grid-cols-3">
            <li>
              <a href="/ice-hockey/nhl" className="block rounded-md border p-3 hover:bg-accent">
                NHL Betting
              </a>
            </li>
            <li>
              <a href="/ice-hockey/khl" className="block rounded-md border p-3 hover:bg-accent">
                KHL Betting
              </a>
            </li>
            <li>
              <a href="/ice-hockey/live" className="block rounded-md border p-3 hover:bg-accent">
                Live Hockey
              </a>
            </li>
            <li>
              <a href="/ice-hockey/odds" className="block rounded-md border p-3 hover:bg-accent">
                Hockey Odds
              </a>
            </li>
            <li>
              <a href="/ice-hockey/results" className="block rounded-md border p-3 hover:bg-accent">
                Hockey Results
              </a>
            </li>
            <li>
              <a
                href="/ice-hockey/schedule"
                className="block rounded-md border p-3 hover:bg-accent"
              >
                Hockey Schedule
              </a>
            </li>
          </ul>
        </nav>
      </SEOPage>
    </>
  ),
});
