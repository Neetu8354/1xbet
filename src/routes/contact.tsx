import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — 24/7 Support | 1xBET India" },
      {
        name: "description",
        content:
          "Contact 1xBET India support. 24/7 live chat, WhatsApp +91 97023 08448 and phone support for account, deposit, withdrawal and betting queries.",
      },
      { property: "og:title", content: "Contact Us — 1xBET India" },
      {
        property: "og:description",
        content: "24/7 customer support via live chat, WhatsApp and email at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.1xbetindia.live/contact" },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/contact" }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      <SEOPage
        title="Contact Us"
        description="Get in touch with the 1xBET India support team — 24/7"
        sections={[
          {
            heading: "Support channels",
            body: (
              <p>
                Our support team is available 24 hours a day, 7 days a week. The fastest option is
                WhatsApp on <b>+91 97023 08448</b> — or use live chat on the website, phone support
                on the same number, or email for non-urgent queries (replies within 24 hours).
              </p>
            ),
          },
          {
            heading: "What we can help with",
            body: (
              <p>
                Account registration and KYC verification, deposits and withdrawals via{" "}
                <a href="/payments" className="text-brand underline">
                  UPI and other methods
                </a>
                , bonus and{" "}
                <a href="/promotions" className="text-brand underline">
                  promotion
                </a>{" "}
                questions, betting rules and bet settlement, technical issues on the website or{" "}
                <a href="/app" className="text-brand underline">
                  app
                </a>
                , and responsible gaming requests including limits and self-exclusion.
              </p>
            ),
          },
          {
            heading: "Before you contact us",
            body: (
              <p>
                Many common questions are already answered in the{" "}
                <a href="/faq" className="text-brand underline">
                  FAQ
                </a>{" "}
                — registration, minimum deposits, withdrawal times, bonus terms and the mobile app.
                For a quicker resolution, please have your account ID ready when you message us.
              </p>
            ),
          },
        ]}
      />
    </>
  ),
});
