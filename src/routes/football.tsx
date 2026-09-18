import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const faqs = [
  {
    q: "What is football betting?",
    a: "Football betting means predicting the outcome of a football match or an event within it — such as the match winner, total goals, both teams to score, or the first goalscorer — and staking money at the offered odds. If your prediction is correct, your stake is multiplied by the odds and paid out in INR.",
  },
  {
    q: "How does live football betting work?",
    a: "Live (in-play) betting lets you place bets while a match is being played. Odds update in real time as goals, cards and momentum change the game. You can bet on the next goal, the match result, totals and more, and use cash out to settle a bet before full time.",
  },
  {
    q: "How can I place a football bet at 1xBET India?",
    a: "Register an account, deposit from ₹100 using UPI, Paytm, PhonePe, NetBanking or a card, then open the football section, choose a match, click the odds for your selection to add it to the bet slip, enter your stake and confirm the bet.",
  },
  {
    q: "Which football leagues can I bet on?",
    a: "You can bet on the English Premier League, UEFA Champions League and Europa League, La Liga, Serie A, Bundesliga, Ligue 1, the Indian Super League, FIFA World Cup qualifiers and hundreds of other domestic and international competitions.",
  },
  {
    q: "What is the minimum football bet and how do I get paid?",
    a: "Minimum stakes start from just a few rupees. Winnings are credited to your account balance in INR and can be withdrawn to UPI, e-wallets, bank transfer or crypto — e-wallet payouts are usually processed within 15 minutes to 24 hours.",
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
          { name: "Football", url: "/football" },
        ]}
      />
      <SEOPage
        title="Football Betting India"
        description="Live football odds on the EPL, Champions League, ISL and more — bet in INR on mobile or desktop"
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
            heading: "Best football leagues available for betting",
            body: (
              <p>
                1xBET India covers football from every corner of the world: the English Premier
                League, UEFA Champions League and Europa League, La Liga, Serie A, Bundesliga, Ligue
                1, the Indian Super League (ISL), I-League, FIFA World Cup and continental
                championships, plus hundreds of domestic leagues and cups. Every match is priced
                pre-match and in-play with competitive odds in INR.
              </p>
            ),
          },
          {
            heading: "Football betting odds explained",
            body: (
              <p>
                Football odds show the payout multiplier for a winning bet — decimal odds of 2.00
                double your stake. Popular markets include 1X2 (home/draw/away), double chance, both
                teams to score, over/under goals, Asian and European handicaps, correct score,
                half-time/full-time, first goalscorer, corners and cards. Outright markets cover
                league winners and top scorers. Read our full{" "}
                <a href="/football/odds" className="text-brand underline">
                  football odds guide
                </a>{" "}
                to learn how each market works.
              </p>
            ),
          },
          {
            heading: "How to bet on football online",
            body: (
              <p>
                <a href="/registration" className="text-brand underline">
                  Create an account
                </a>
                , deposit in INR using{" "}
                <a href="/payments" className="text-brand underline">
                  UPI, cards or e-wallets
                </a>
                , and claim your welcome bonus. Open the football section, pick a match, click the
                odds to add a selection to your bet slip, enter your stake and confirm. Singles,
                accumulators and system bets are all supported — see our{" "}
                <a href="/football/tips" className="text-brand underline">
                  football betting tips
                </a>{" "}
                before you start.
              </p>
            ),
          },
          {
            heading: "Live football betting guide",
            body: (
              <p>
                In-play betting is where football comes alive. Our{" "}
                <a href="/live" className="text-brand underline">
                  live betting
                </a>{" "}
                section reprices every match in real time — bet on the next goal, next corner or the
                final result while watching the game unfold. Cash out is available on most markets,
                and the{" "}
                <a href="/app" className="text-brand underline">
                  mobile app
                </a>{" "}
                sends push notifications for goals so you never miss a price. Track form on the{" "}
                <a href="/statistics" className="text-brand underline">
                  statistics
                </a>{" "}
                and{" "}
                <a href="/results" className="text-brand underline">
                  results
                </a>{" "}
                pages.
              </p>
            ),
          },
          {
            heading: "Upcoming football events",
            body: (
              <p>
                The 2026–27 season brings the Premier League, UEFA Champions League and Indian Super
                League back to the schedule — check the{" "}
                <a href="/football/schedule" className="text-brand underline">
                  football schedule
                </a>{" "}
                and live section for the latest fixtures, kick-off times and odds.
              </p>
            ),
          },
        ]}
      >
        <section className="mt-6">
          <h2 className="text-lg font-bold text-foreground">Football betting FAQs</h2>
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
