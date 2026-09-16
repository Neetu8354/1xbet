import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteFooter, SiteHeader, SiteMobileNav } from "../components/SiteChrome";

const SITE_URL = "https://www.1xbetindia.live";

const faqs = [
  {
    q: "How do I create an account at 1xBET India?",
    a: "Click the Registration button at the top of the page and choose one-click, phone, or email registration. Fill in your details, select INR as your currency, and your account will be ready in under a minute.",
  },
  {
    q: "What is the minimum deposit at 1xBET India?",
    a: "The minimum deposit is ₹100 for most payment methods including UPI, Paytm, PhonePe and Google Pay. Cryptocurrency minimums vary by coin.",
  },
  {
    q: "How long do withdrawals take?",
    a: "Withdrawals to UPI and e-wallets are usually processed within 15 minutes to 24 hours. Bank transfers may take 1-3 business days depending on your bank.",
  },
  {
    q: "Is 1xBET India legal and safe to use?",
    a: "1xBET India operates under an international gaming licence and uses SSL encryption to protect all transactions and personal data. Players are responsible for checking the local laws that apply to them.",
  },
  {
    q: "How do I claim the welcome bonus?",
    a: "Register a new account, make your first deposit of at least ₹100, and the 100% welcome bonus up to ₹10,000 will be credited automatically. Wagering requirements apply — see the Promotions page for full terms.",
  },
  {
    q: "Can I bet on cricket at 1xBET India?",
    a: "Yes. We cover all major cricket events including the IPL, T20 World Cup, Test series, ODIs and domestic leagues, with live in-play betting and competitive odds.",
  },
  {
    q: "What should I do if I forget my password?",
    a: "Use the 'Forgot password' link on the login form, or contact our 24/7 support team via live chat or WhatsApp and they will help you recover your account.",
  },
  {
    q: "Does 1xBET India have a mobile app?",
    a: "Yes. Apps are available for Android (APK) and iOS, and the mobile website works on any smartphone browser without installation.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Frequently Asked Questions | 1xBET India" },
      {
        name: "description",
        content:
          "Frequently asked questions about 1xBET India. Learn about registration, deposits, withdrawals, bonuses, cricket betting and the mobile app.",
      },
      { property: "og:title", content: "FAQ — 1xBET India" },
      {
        property: "og:description",
        content:
          "Frequently asked questions about registration, deposits, withdrawals, bonuses and betting at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/faq` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/faq` }],
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
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
          ],
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-6 lg:px-6 lg:py-8">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-1">/</span>
          <span>FAQ</span>
        </nav>

        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-2 text-base text-muted-foreground lg:text-lg">
          Answers to common questions about betting, payments, bonuses and your 1xBET India account.
        </p>

        <div className="mt-6 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-md border bg-card p-4 open:pb-4">
              <summary className="cursor-pointer font-semibold text-foreground">{f.q}</summary>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-8 rounded-md border bg-muted/50 p-4">
          <h2 className="mb-2 font-semibold">Still need help?</h2>
          <p className="text-sm text-muted-foreground">
            Our support team is available 24/7. Visit the{" "}
            <Link to="/help" className="text-brand underline hover:no-underline">
              Help Centre
            </Link>{" "}
            or{" "}
            <Link to="/contact" className="text-brand underline hover:no-underline">
              contact us
            </Link>{" "}
            directly.
          </p>
        </div>

        <div className="mt-8 border-t pt-6">
          <Link to="/" className="text-brand underline">
            Back to home
          </Link>
        </div>
      </main>
      <SiteFooter />
      <SiteMobileNav />
    </div>
  );
}
