import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const faqs = [
  {
    q: "What is football betting?",
    a: "Football betting allows users to select outcomes from football matches using different markets such as match winner, goals and player performances.",
  },
  {
    q: "Which football leagues are available?",
    a: "Popular leagues include Premier League, Champions League, La Liga, Serie A, Bundesliga and ISL.",
  },
  {
    q: "What is live football betting?",
    a: "Live football betting allows users to select markets while a match is happening with changing odds.",
  },
  {
    q: "What football betting markets are available?",
    a: "Markets include match winner, goals, handicap, corners, cards, correct score and player specials.",
  },
  {
    q: "Can football betting be accessed on mobile devices?",
    a: "Users can access football betting platforms through mobile-friendly websites and applications.",
  },
];

export const Route = createFileRoute("/football")({
  head: () => ({
    meta: [
      { title: "Football Betting India | Live Odds, EPL & Champions League Betting" },
      {
        name: "description",
        content:
          "Football betting India at 1xBET. Live football odds on EPL, Champions League, ISL and World Cup matches. Bet on football markets via mobile with INR payment options.",
      },
      {
        property: "og:title",
        content: "Football Betting India | Live Odds, EPL & Champions League Betting",
      },
      {
        property: "og:description",
        content:
          "Live football odds on EPL, Champions League, ISL and more. Mobile betting with INR payments at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/football` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/football` }],
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
          name: "Upcoming football events at 1xBET India",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "SportsEvent",
                name: "English Premier League 2026-27 Season",
                sport: "Soccer",
                startDate: "2026-08",
                eventStatus: "https://schema.org/EventScheduled",
                location: { "@type": "Country", name: "United Kingdom" },
                organizer: { "@type": "Organization", name: "Premier League" },
                url: `${SITE_URL}/football`,
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "SportsEvent",
                name: "UEFA Champions League 2026-27 Season",
                sport: "Soccer",
                startDate: "2026-09",
                eventStatus: "https://schema.org/EventScheduled",
                location: { "@type": "AdministrativeArea", name: "Europe" },
                organizer: { "@type": "Organization", name: "UEFA" },
                url: `${SITE_URL}/football`,
              },
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@type": "SportsEvent",
                name: "Indian Super League 2026-27 Season",
                sport: "Soccer",
                startDate: "2026-09",
                eventStatus: "https://schema.org/EventScheduled",
                location: { "@type": "Country", name: "India" },
                organizer: { "@type": "Organization", name: "Indian Super League" },
                url: `${SITE_URL}/football`,
              },
            },
          ],
        }),
      },
    ],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Sports", url: "/sports" },
          { name: "Football Betting", url: "/football" },
        ]}
      />
      <SEOPage
        title="Football Betting India"
        description="Live odds on the EPL, Champions League, ISL and more — bet in INR on mobile or desktop"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Sports", url: "/sports" },
          { name: "Football Betting", url: "/football" },
        ]}
        topContent={
          <>
            <img
              src="/assets/seo/football-betting-india.svg"
              alt="Football betting markets available in India — EPL, Champions League and ISL odds"
              width="800"
              height="300"
              decoding="async"
              className="mt-4 w-full rounded-lg border"
            />
            <nav
              aria-label="Football quick links"
              className="mt-4 grid grid-cols-1 gap-2 text-sm font-semibold sm:grid-cols-3"
            >
              <a
                href="/live"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                Live Odds
              </a>
              <a
                href="/football/schedule"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                Today's Matches
              </a>
              <a
                href="/sports"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                Popular Football Leagues
              </a>
            </nav>
          </>
        }
        sections={[
          {
            heading: "Football Betting in India",
            body: (
              <>
                <p>
                  Football betting has become one of the most popular ways for football fans to
                  follow matches and explore different betting markets. 1xBET India provides access
                  to football competitions from around the world, including the English Premier
                  League, UEFA Champions League, La Liga, Serie A, Bundesliga, Indian Super League
                  and international tournaments.
                </p>
                <p className="mt-2">
                  Users can explore pre-match and{" "}
                  <a href="/live" className="text-brand underline">
                    live football betting
                  </a>{" "}
                  options, check match statistics, compare available markets and follow changing
                  odds throughout the game. With multiple football markets available, fans can
                  choose from different betting options based on their understanding of teams,
                  players and match conditions.
                </p>
                <p className="mt-2">
                  Football has a growing audience in India, with fans following international
                  leagues as well as domestic competitions. Online football betting platforms allow
                  users to access football markets from desktop and{" "}
                  <a href="/app" className="text-brand underline">
                    mobile devices
                  </a>
                  . Popular football betting options include match winner markets, goal-based
                  markets, team performance markets and live in-play betting. Understanding{" "}
                  <a href="/football/odds" className="text-brand underline">
                    football odds
                  </a>{" "}
                  and different markets helps users make informed selections.
                </p>
              </>
            ),
          },
          {
            heading: "Popular Football Leagues Available",
            body: (
              <>
                <h3 className="mt-2 font-semibold">Premier League Betting</h3>
                <p>
                  The English Premier League is one of the most followed football competitions
                  worldwide. Users can explore betting markets for major clubs, match outcomes,
                  goals, corners and player performances.
                </p>
                <h3 className="mt-3 font-semibold">UEFA Champions League Betting</h3>
                <p>
                  The UEFA Champions League brings together leading European clubs. Football fans
                  can explore markets for group stages, knockout rounds and important tournament
                  matches.
                </p>
                <h3 className="mt-3 font-semibold">La Liga Betting</h3>
                <p>
                  La Liga features some of the most recognised football clubs and players. Betting
                  markets include match results, goals, handicaps and player-related options.
                </p>
                <h3 className="mt-3 font-semibold">Serie A and Bundesliga Betting</h3>
                <p>
                  Italian Serie A and German Bundesliga provide additional football markets
                  throughout the season, allowing fans to follow domestic competitions and team
                  performances.
                </p>
                <h3 className="mt-3 font-semibold">Indian Super League (ISL) Betting</h3>
                <p>
                  The Indian Super League connects football betting with the Indian football
                  audience. Fans can explore match markets, team results and other football betting
                  options.
                </p>
              </>
            ),
          },
          {
            heading: "Football Betting Markets Explained",
            body: (
              <>
                <h3 className="mt-2 font-semibold">Match Winner (1X2)</h3>
                <p>
                  The 1X2 market allows users to select the possible match result: 1 — home team
                  win, X — draw, 2 — away team win.
                </p>
                <h3 className="mt-3 font-semibold">Double Chance</h3>
                <p>
                  Double chance provides two possible outcomes in one selection, such as home win or
                  draw.
                </p>
                <h3 className="mt-3 font-semibold">Both Teams To Score</h3>
                <p>This market focuses on whether both teams will score during the match.</p>
                <h3 className="mt-3 font-semibold">Over/Under Goals</h3>
                <p>
                  Users select whether the total number of goals will be above or below a chosen
                  number.
                </p>
                <h3 className="mt-3 font-semibold">Handicap Betting</h3>
                <p>
                  Handicap markets adjust the starting advantage between teams and provide
                  additional betting options.
                </p>
                <h3 className="mt-3 font-semibold">Correct Score</h3>
                <p>
                  Correct score markets allow users to predict the final score of a match. Learn
                  more in our{" "}
                  <a href="/football/odds" className="text-brand underline">
                    football odds guide
                  </a>
                  .
                </p>
              </>
            ),
          },
          {
            heading: "Live Football Betting",
            body: (
              <>
                <p>
                  Live football betting allows users to explore markets while a match is in
                  progress. Odds can change based on match events such as goals, red cards,
                  possession changes and team performance. Follow every game in our{" "}
                  <a href="/live" className="text-brand underline">
                    live betting
                  </a>{" "}
                  section.
                </p>
                <p className="mt-2">
                  Popular live betting markets include: next goal, next corner, match result, total
                  goals, cards and player performance.
                </p>
              </>
            ),
          },
          {
            heading: "How To Bet On Football Online",
            body: (
              <>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    <a href="/registration" className="text-brand underline">
                      Create an account
                    </a>{" "}
                    on the platform.
                  </li>
                  <li>Select a football match or competition.</li>
                  <li>Review available betting markets and odds.</li>
                  <li>Choose your preferred selection.</li>
                  <li>Confirm your bet and follow match updates.</li>
                </ol>
                <p className="mt-2">
                  Deposits start from ₹100 via{" "}
                  <a href="/payments" className="text-brand underline">
                    UPI and other INR payment methods
                  </a>
                  .
                </p>
              </>
            ),
          },
          {
            heading: "Football Odds Explained",
            body: (
              <p>
                Football odds represent the possible outcome of an event and help users understand
                potential returns. Different betting markets have different odds based on team form,
                statistics, injuries and match conditions. Understanding odds, team information and
                match statistics can help users better evaluate football markets — see the full
                breakdown in our{" "}
                <a href="/football/odds" className="text-brand underline">
                  odds guide
                </a>{" "}
                and check the{" "}
                <a href="/statistics" className="text-brand underline">
                  statistics
                </a>{" "}
                page for team data.
              </p>
            ),
          },
          {
            heading: "Football Betting Tips",
            body: (
              <>
                <p>Before selecting a football market, users can consider:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Recent team performance</li>
                  <li>Previous head-to-head records</li>
                  <li>Player availability</li>
                  <li>Home and away performance</li>
                  <li>League statistics</li>
                  <li>Match importance</li>
                </ul>
                <p className="mt-2">
                  Read more in our{" "}
                  <a href="/football/tips" className="text-brand underline">
                    football betting tips
                  </a>{" "}
                  guide.
                </p>
              </>
            ),
          },
          {
            heading: "Responsible Football Betting",
            body: (
              <p>
                Football betting should always be approached responsibly. Users should set personal
                limits, understand the risks involved and only participate within their own budget.
                Deposit limits, self-exclusion tools and support resources are available on our{" "}
                <a href="/responsible-gaming" className="text-brand underline">
                  Responsible Gaming
                </a>{" "}
                page. Players must be 18 or older.
              </p>
            ),
          },
        ]}
      >
        <section className="mt-6">
          <h2 className="text-lg font-bold text-foreground">Football Betting FAQs</h2>
          <div className="mt-3 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-md border bg-card p-4 open:pb-4">
                <summary className="cursor-pointer text-sm font-semibold text-foreground">
                  {f.q}
                </summary>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-bold text-foreground">Conclusion</h2>
          <p className="mt-2 text-sm leading-7 text-foreground">
            Football betting offers fans multiple ways to engage with matches across global and
            Indian competitions. By understanding leagues, betting markets, odds and match
            information, users can explore football betting options more effectively.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-bold text-foreground">Football betting resources</h2>
          <nav className="mt-3 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
            <a href="/live" className="rounded-md border bg-card p-3 hover:bg-accent">
              Football Live Betting →
            </a>
            <a href="/football/odds" className="rounded-md border bg-card p-3 hover:bg-accent">
              Football Odds Explained →
            </a>
            <a href="/results" className="rounded-md border bg-card p-3 hover:bg-accent">
              Football Results →
            </a>
            <a href="/football/schedule" className="rounded-md border bg-card p-3 hover:bg-accent">
              Football Schedule →
            </a>
            <a href="/football/tips" className="rounded-md border bg-card p-3 hover:bg-accent">
              Football Betting Tips →
            </a>
            <a href="/statistics" className="rounded-md border bg-card p-3 hover:bg-accent">
              Football Statistics →
            </a>
          </nav>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-bold text-foreground">Safe &amp; secure betting</h2>
          <div className="mt-3 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <a href="/responsible-gaming" className="rounded-md border bg-card p-3 hover:bg-accent">
              <b className="block">Responsible Gaming</b>
              <span className="text-muted-foreground">Limits, self-exclusion &amp; support</span>
            </a>
            <div className="rounded-md border bg-card p-3">
              <b className="block">18+ Only</b>
              <span className="text-muted-foreground">Strictly for adults — KYC verified</span>
            </div>
            <div className="rounded-md border bg-card p-3">
              <b className="block">SSL Secured</b>
              <span className="text-muted-foreground">Encrypted data &amp; transactions</span>
            </div>
            <a href="/payments" className="rounded-md border bg-card p-3 hover:bg-accent">
              <b className="block">INR Payments</b>
              <span className="text-muted-foreground">UPI, Paytm, cards — min ₹100</span>
            </a>
            <a href="/contact" className="rounded-md border bg-card p-3 hover:bg-accent">
              <b className="block">24/7 Support</b>
              <span className="text-muted-foreground">Live chat &amp; WhatsApp</span>
            </a>
            <a href="/terms" className="rounded-md border bg-card p-3 hover:bg-accent">
              <b className="block">Fair Terms</b>
              <span className="text-muted-foreground">Transparent betting rules</span>
            </a>
          </div>
        </section>
      </SEOPage>
    </>
  ),
});
