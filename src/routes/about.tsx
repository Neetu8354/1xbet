import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — 1xBET India" },
      {
        name: "description",
        content:
          "About 1xBET India — an online sports betting and casino platform for Indian players. Sportsbook, live betting, casino games, INR payments and 24/7 support.",
      },
      { property: "og:title", content: "About Us — 1xBET India" },
      {
        property: "og:description",
        content: "Learn about the 1xBET India sports betting and casino platform.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.1xbetindia.live/about" },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/about" }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ]}
      />
      <SEOPage
        title="About 1xBET India"
        description="An online sportsbook and casino built for Indian players"
        sections={[
          {
            heading: "Who we are",
            body: (
              <p>
                1xBET India is an online sports betting and casino platform focused on the Indian
                market. We offer a full{" "}
                <a href="/sports" className="text-brand underline">
                  sportsbook
                </a>
                ,{" "}
                <a href="/live" className="text-brand underline">
                  live in-play betting
                </a>
                ,{" "}
                <a href="/casino" className="text-brand underline">
                  casino
                </a>{" "}
                and{" "}
                <a href="/live-casino" className="text-brand underline">
                  live dealer games
                </a>
                , exclusive{" "}
                <a href="/games" className="text-brand underline">
                  1xGames
                </a>{" "}
                and{" "}
                <a href="/esports" className="text-brand underline">
                  esports
                </a>{" "}
                markets — all priced and paid out in Indian Rupees.
              </p>
            ),
          },
          {
            heading: "What we offer",
            body: (
              <p>
                Players get competitive odds on 30+ sports including cricket and football, hundreds
                of casino titles, a 100% welcome bonus up to ₹10,000, instant INR deposits via UPI
                and e-wallets, a dedicated{" "}
                <a href="/app" className="text-brand underline">
                  mobile app
                </a>{" "}
                and 24/7 customer support in English.
              </p>
            ),
          },
          {
            heading: "Safety and trust",
            body: (
              <p>
                All transactions are SSL-encrypted, games run on certified RNG software, and
                accounts are protected by KYC verification. We are committed to player safety — read
                our{" "}
                <a href="/responsible-gaming" className="text-brand underline">
                  Responsible Gaming
                </a>{" "}
                policy,{" "}
                <a href="/terms" className="text-brand underline">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-brand underline">
                  Privacy Policy
                </a>
                .
              </p>
            ),
          },
          {
            heading: "Contact us",
            body: (
              <p>
                Questions? Visit the{" "}
                <a href="/help" className="text-brand underline">
                  Help Centre
                </a>
                , browse the{" "}
                <a href="/faq" className="text-brand underline">
                  FAQ
                </a>
                , or reach our team any time on the{" "}
                <a href="/contact" className="text-brand underline">
                  Contact
                </a>{" "}
                page.
              </p>
            ),
          },
        ]}
      />
    </>
  ),
});
