import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const sports = [
  { name: "Cricket", href: "/cricket" },
  { name: "Football", href: "/football" },
  { name: "Esports", href: "/esports" },
  { name: "Tennis", href: "/live" },
  { name: "Basketball", href: "/live" },
  { name: "Volleyball", href: "/live" },
  { name: "Table Tennis", href: "/live" },
  { name: "Ice Hockey", href: "/live" },
  { name: "Badminton", href: "/live" },
  { name: "Kabaddi", href: "/live" },
  { name: "Boxing & MMA", href: "/live" },
  { name: "Virtual Sports", href: "/games" },
];

const faqs = [
  {
    q: "What sports can I bet on at 1xBET India?",
    a: "You can bet on 30+ sports including cricket, football, tennis, basketball, volleyball, table tennis, ice hockey, badminton, kabaddi and esports, with pre-match and live markets on every event.",
  },
  {
    q: "How does sports betting work?",
    a: "Choose a sport and event, pick a market such as match winner or totals, click the odds to add the selection to your bet slip, enter your stake and confirm. Winnings are paid in INR at the odds taken.",
  },
  {
    q: "What is the difference between pre-match and live betting?",
    a: "Pre-match bets are placed before an event starts at fixed prices. Live (in-play) betting lets you bet during the event as odds update in real time, with cash out available on most markets.",
  },
  {
    q: "What is an accumulator bet?",
    a: "An accumulator combines two or more selections into one bet — all legs must win, and the odds multiply together for a larger potential return.",
  },
  {
    q: "What is the minimum bet at 1xBET India?",
    a: "Minimum stakes start from just a few rupees depending on the market. Deposits start at ₹100 via UPI, Paytm, PhonePe, NetBanking, cards and crypto.",
  },
];

export const Route = createFileRoute("/sports")({
  head: () => ({
    meta: [
      { title: "Sports Betting India: Cricket, Football & Live Odds | 1xBET" },
      {
        name: "description",
        content:
          "Sports betting in India at 1xBET. Bet on cricket, football, tennis and 30+ sports with live odds, in-play markets and fast INR payouts.",
      },
      {
        property: "og:title",
        content: "Sports Betting India: Cricket, Football & Live Odds | 1xBET",
      },
      {
        property: "og:description",
        content:
          "Bet on cricket, football, tennis and 30+ sports with live odds and INR payouts at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/sports` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-sports.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Sports Betting India: Cricket, Football & Live Odds | 1xBET",
      },
      {
        name: "twitter:description",
        content:
          "Bet on cricket, football, tennis and 30+ sports with live odds and INR payouts at 1xBET India.",
      },
      { name: "twitter:image", content: `${SITE_URL}/assets/seo/og-sports.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/sports` }],
    scripts: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${SITE_URL}/sports#webpage`,
          url: `${SITE_URL}/sports`,
          name: "Sports Betting India: Cricket, Football & Live Odds | 1xBET",
          description:
            "Sports betting in India at 1xBET. Bet on cricket, football, tennis and 30+ sports with live odds, in-play markets and fast INR payouts.",
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#organization` },
          inLanguage: "en",
        }),
      },
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
    ],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Sports", url: "/sports" },
        ]}
      />
      <SEOPage
        title="Online Sports Betting at 1xBET India"
        description="Pre-match and live betting on 30+ sports with competitive INR odds"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Sports", url: "/sports" },
        ]}
        sections={[
          {
            heading: "Sports categories",
            body: (
              <>
                <p>
                  The 1xBET India sportsbook covers more than 30 sports with thousands of markets
                  every day. Pick a category below to start betting:
                </p>
                <nav
                  aria-label="Sports categories"
                  className="mt-3 grid grid-cols-2 gap-2 text-sm font-semibold sm:grid-cols-3"
                >
                  {sports.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      className="rounded-md border bg-card p-3 hover:bg-accent"
                    >
                      {s.name} →
                    </a>
                  ))}
                </nav>
              </>
            ),
          },
          {
            heading: "Pre-match betting",
            body: (
              <p>
                Pre-match betting lets you place bets before an event starts, giving you time to
                study form, statistics and prices. Odds are published days or weeks ahead for major
                competitions, and early prices often offer better value than the closing line.
                Markets are settled after the event finishes according to the official result.
              </p>
            ),
          },
          {
            heading: "Live and in-play betting",
            body: (
              <p>
                Our{" "}
                <a href="/live" className="text-brand underline">
                  live betting
                </a>{" "}
                section updates odds in real time as the action unfolds — every run, goal and point
                reprices the market. Cash out is available on most live markets, letting you settle
                a bet before the event ends. Follow several matches at once with{" "}
                <a href="/multi-live" className="text-brand underline">
                  Multi-Live
                </a>
                .
              </p>
            ),
          },
          {
            heading: "Popular betting markets",
            body: (
              <p>
                Every event offers a wide choice of markets: match winner (1X2), double chance,
                totals (over/under), handicaps, both teams to score, correct score, player props and
                hundreds of event-specific options. Accumulator betting combines selections for
                bigger returns, and accumulator boost{" "}
                <a href="/promotions" className="text-brand underline">
                  promotions
                </a>{" "}
                regularly increase multi-bet winnings.
              </p>
            ),
          },
          {
            heading: "Cricket betting markets",
            body: (
              <p>
                <a href="/cricket" className="text-brand underline">
                  Cricket betting
                </a>{" "}
                covers match winner, toss, top batsman, top bowler, total runs, total wickets,
                innings scores, over-by-over betting and player performance. The{" "}
                <a href="/cricket" className="text-brand underline">
                  IPL
                </a>
                , T20 World Cup, Test series, The Ashes and India's domestic competitions are priced
                with live ball-by-ball markets.
              </p>
            ),
          },
          {
            heading: "Football betting markets",
            body: (
              <p>
                <a href="/football" className="text-brand underline">
                  Football betting
                </a>{" "}
                includes 1X2, double chance, both teams to score, over/under goals, handicaps,
                correct score, corners, cards and player specials — see the{" "}
                <a href="/football/odds" className="text-brand underline">
                  odds guide
                </a>{" "}
                for how each market works. Coverage spans the{" "}
                <a href="/football" className="text-brand underline">
                  Premier League, Champions League, La Liga, Serie A, Bundesliga and ISL
                </a>
                , plus World Cup and international tournaments.
              </p>
            ),
          },
          {
            heading: "How sports betting works",
            body: (
              <>
                <p>
                  Betting is simple: pick a sport and event, choose a market, click the odds to add
                  the selection to your bet slip, enter your stake and confirm. Your potential
                  return equals stake × odds — ₹100 at 2.50 returns ₹250.
                </p>
                <p className="mt-2">
                  <a href="/registration" className="text-brand underline">
                    Register
                  </a>{" "}
                  an account, deposit from ₹100 via{" "}
                  <a href="/payments" className="text-brand underline">
                    UPI, Paytm or NetBanking
                  </a>
                  , and claim a{" "}
                  <a href="/promotions" className="text-brand underline">
                    100% welcome bonus up to ₹10,000
                  </a>{" "}
                  — wagering requirements and eligibility conditions apply, see the{" "}
                  <a href="/terms" className="text-brand underline">
                    bonus terms
                  </a>
                  . Bet on desktop or the{" "}
                  <a href="/app" className="text-brand underline">
                    mobile app
                  </a>
                  . Withdrawals are paid in INR — see{" "}
                  <a href="/payments" className="text-brand underline">
                    payout methods and processing times
                  </a>
                  , and our{" "}
                  <a href="/help" className="text-brand underline">
                    Help Centre
                  </a>{" "}
                  for account questions.
                </p>
              </>
            ),
          },
          {
            heading: "Bet responsibly",
            body: (
              <p>
                Sports betting is for players aged 18+. Set deposit and loss limits, take breaks and
                never bet money you cannot afford to lose. Limits and self-exclusion tools are on
                our{" "}
                <a href="/responsible-gaming" className="text-brand underline">
                  Responsible Gaming
                </a>{" "}
                page, and common questions are answered in the{" "}
                <a href="/faq" className="text-brand underline">
                  FAQ
                </a>
                .
              </p>
            ),
          },
        ]}
      >
        <section className="mt-6">
          <h2 className="text-lg font-bold text-foreground">Sports betting FAQs</h2>
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
          <h2 className="text-lg font-bold text-foreground">Legal, trust &amp; support</h2>
          <nav
            aria-label="Legal and support links"
            className="mt-3 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3"
          >
            <a href="/terms" className="rounded-md border bg-card p-3 hover:bg-accent">
              <b className="block">Terms &amp; Conditions</b>
              <span className="text-muted-foreground">Betting rules &amp; bonus terms</span>
            </a>
            <a href="/privacy" className="rounded-md border bg-card p-3 hover:bg-accent">
              <b className="block">Privacy Policy</b>
              <span className="text-muted-foreground">How your data is handled</span>
            </a>
            <a href="/responsible-gaming" className="rounded-md border bg-card p-3 hover:bg-accent">
              <b className="block">Responsible Gaming</b>
              <span className="text-muted-foreground">Limits, self-exclusion — 18+ only</span>
            </a>
            <a href="/payments" className="rounded-md border bg-card p-3 hover:bg-accent">
              <b className="block">Payment Information</b>
              <span className="text-muted-foreground">Deposits, withdrawals &amp; fees</span>
            </a>
            <a href="/contact" className="rounded-md border bg-card p-3 hover:bg-accent">
              <b className="block">Contact &amp; Support</b>
              <span className="text-muted-foreground">24/7 live chat &amp; WhatsApp</span>
            </a>
            <a href="/about" className="rounded-md border bg-card p-3 hover:bg-accent">
              <b className="block">About 1xBET India</b>
              <span className="text-muted-foreground">Platform &amp; operator information</span>
            </a>
          </nav>
          <p className="mt-3 text-xs leading-5 text-muted-foreground">
            1xBET India operates under an international gaming licence. Sports betting is strictly
            for players aged 18 and over, subject to eligibility verification (KYC) and the laws of
            your state. All transactions are SSL-encrypted.
          </p>
        </section>
      </SEOPage>
    </>
  ),
});
