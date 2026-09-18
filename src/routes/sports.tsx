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
    a: "Available sports can include cricket, football, tennis, basketball, volleyball, table tennis, ice hockey, badminton, esports and other sports depending on the current event schedule.",
  },
  {
    q: "Can I bet on live sports?",
    a: "Where live markets are available, users can place bets while an event is in progress. Odds and available markets can change throughout the event.",
  },
  {
    q: "What types of sports betting markets are available?",
    a: "Common markets can include match winner, 1X2, double chance, totals, handicaps, correct score, player markets and sport-specific options.",
  },
  {
    q: "Can I bet on cricket and football?",
    a: "Yes. Dedicated cricket and football sections provide available matches, competitions and betting markets for those sports.",
  },
  {
    q: "Where can I check current odds?",
    a: "Current odds are displayed beside each available market within the relevant sports or live betting section. Odds can change, so users should check the displayed value before confirming a bet.",
  },
  {
    q: "Is sports betting restricted by age?",
    a: "Sports betting is intended only for users who meet the applicable legal age and eligibility requirements in their jurisdiction. Users should review the site terms and responsible-gaming information before participating.",
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
        title="Online Sports Betting in India"
        description="Pre-match and live betting on 30+ sports with competitive INR odds"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Sports", url: "/sports" },
        ]}
        sections={[
          {
            heading: "Bet on Popular Sports",
            body: (
              <>
                <p>
                  Explore sports betting across cricket, football, tennis, basketball, esports and
                  many other popular sports at 1xBET India. Browse pre-match and live betting
                  markets, compare available odds and choose from a wide range of betting options
                  for major leagues, tournaments and sporting events.
                </p>
                <p className="mt-2">
                  Whether you follow international cricket, European football, tennis tournaments or
                  esports competitions, the sportsbook brings multiple sports and markets together
                  in one place — more than 30 sports covering both major international competitions
                  and selected regional events.
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
            heading: "Pre-Match and Live Sports Betting",
            body: (
              <>
                <p>
                  Sports betting can generally be divided into pre-match betting and live betting.
                  Pre-match markets are available before an event begins and allow users to review
                  the available odds and markets in advance. Depending on the sport, these may
                  include match winner, total points or goals, handicaps, player markets and other
                  event-specific options.
                </p>
                <p className="mt-2">
                  Live betting allows users to view markets while an event is in progress. Odds and
                  available markets can change as the match develops, giving users updated options
                  based on what is happening during the event. Visit the{" "}
                  <a href="/live" className="text-brand underline">
                    Live Betting
                  </a>{" "}
                  section to view sporting events currently available for in-play betting.
                </p>
              </>
            ),
          },
          {
            heading: "Popular Sports Betting Markets",
            body: (
              <p>
                Different sports offer different types of betting markets. Some of the most commonly
                available options include match winner, 1X2, double chance, over/under totals,
                handicaps, both teams to score, correct score and player-related markets. In
                football, for example, users may find markets for the final result, total goals,
                first goalscorer or team performance. Cricket markets can include match winner,
                innings totals, player runs, wickets and other match-specific options. Accumulator
                or multi-bet options may also allow several selections to be combined into one bet.
                Available markets and conditions vary depending on the event.
              </p>
            ),
          },
          {
            heading: "Cricket Betting",
            body: (
              <>
                <p>
                  Cricket is one of the key sports available on the 1xBET India sportsbook. Users
                  can find betting markets for major cricket formats including T20, One Day
                  Internationals and Test cricket, as well as selected domestic and international
                  competitions. Popular cricket events may include the Indian Premier League,
                  international cricket series and major T20 competitions.
                </p>
                <p className="mt-2">
                  Depending on the match, available markets can include match winner, team totals,
                  individual player performance, innings markets and live cricket betting. Explore
                  the dedicated{" "}
                  <a href="/cricket" className="text-brand underline">
                    Cricket Betting
                  </a>{" "}
                  page to see available matches and markets.
                </p>
              </>
            ),
          },
          {
            heading: "Football Betting",
            body: (
              <>
                <p>
                  Football betting covers domestic leagues, international competitions and club
                  tournaments from around the world. Major competitions may include the{" "}
                  <a href="/football" className="text-brand underline">
                    Premier League, UEFA Champions League, La Liga, Serie A, Bundesliga and Indian
                    Super League
                  </a>
                  , subject to event availability.
                </p>
                <p className="mt-2">
                  Common football markets include match result, double chance, total goals, both
                  teams to score, handicaps, correct score and player-related markets. Visit the
                  dedicated{" "}
                  <a href="/football" className="text-brand underline">
                    Football Betting
                  </a>{" "}
                  section for upcoming fixtures, markets and available odds.
                </p>
              </>
            ),
          },
          {
            heading: "Tennis, Basketball and Other Sports",
            body: (
              <p>
                The sportsbook is not limited to cricket and football. Tennis betting may cover
                major tournaments and individual matches, with markets such as match winner, set
                winner and total games. Basketball markets may include match winner, point spreads,
                totals and quarter- or half-specific betting. Other available categories can include
                volleyball, table tennis, ice hockey, badminton and additional sports depending on
                the current event schedule.
              </p>
            ),
          },
          {
            heading: "Esports Betting",
            body: (
              <p>
                Esports followers can browse markets for selected competitive gaming tournaments and
                matches. Depending on availability, coverage may include games such as
                Counter-Strike 2, Dota 2, League of Legends and Valorant. Esports markets can vary
                by title and competition, including match winner, map winner and other game-specific
                options. Visit the{" "}
                <a href="/esports" className="text-brand underline">
                  Esports Betting
                </a>{" "}
                section to browse available competitions.
              </p>
            ),
          },
          {
            heading: "Understanding Sports Betting Odds",
            body: (
              <p>
                Betting odds show the potential return associated with a particular selection. They
                can change before and during an event as market conditions develop. Users should
                review the displayed odds, market rules and bet details before confirming any
                selection. Where different odds formats are available, users can choose the format
                they find easiest to understand.
              </p>
            ),
          },
          {
            heading: "Sports Betting in INR",
            body: (
              <p>
                Where supported, account balances, deposits, betting stakes and withdrawals can be
                handled in Indian Rupees. Visit the{" "}
                <a href="/payments" className="text-brand underline">
                  Payment Methods
                </a>{" "}
                page for current information about available deposit and withdrawal options,
                processing conditions, minimum or maximum amounts and any applicable requirements.
              </p>
            ),
          },
          {
            heading: "Promotions and Sports Betting Offers",
            body: (
              <p>
                Eligible users may have access to sports-related{" "}
                <a href="/promotions" className="text-brand underline">
                  promotions
                </a>{" "}
                or account offers from time to time. Promotion values, wagering requirements,
                eligible events and expiry dates can vary, so users should always review the
                complete{" "}
                <a href="/terms" className="text-brand underline">
                  promotional terms
                </a>{" "}
                before participating.
              </p>
            ),
          },
          {
            heading: "Responsible Sports Betting",
            body: (
              <p>
                Sports betting should be treated as entertainment rather than a way to make
                guaranteed income. Only eligible adults should participate. Users should set
                personal spending limits, avoid chasing losses and take breaks when needed. Visit
                the{" "}
                <a href="/responsible-gaming" className="text-brand underline">
                  Responsible Gaming
                </a>{" "}
                page for information about available account controls, limits and safer-gambling
                resources.
              </p>
            ),
          },
        ]}
      >
        <section className="mt-6">
          <h2 className="text-lg font-bold text-foreground">Frequently Asked Questions</h2>
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
