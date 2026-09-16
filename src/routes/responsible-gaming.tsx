import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

export const Route = createFileRoute("/responsible-gaming")({
  head: () => ({
    meta: [
      { title: "Responsible Gaming — 18+ Tools & Support | 1xBET India" },
      {
        name: "description",
        content:
          "Responsible gaming at 1xBET India. Deposit limits, self-exclusion, session reminders and support resources. Players must be 18 or older.",
      },
      { property: "og:title", content: "Responsible Gaming — 1xBET India" },
      {
        property: "og:description",
        content: "Tools and resources to gamble safely at 1xBET India. 18+ only.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.1xbetindia.live/responsible-gaming" },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/responsible-gaming" }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Responsible Gaming", url: "/responsible-gaming" },
        ]}
      />
      <SEOPage
        title="Responsible Gaming"
        description="Tools, limits and support for safe play — 18+ only"
        sections={[
          {
            heading: "Our commitment",
            body: (
              <p>
                1xBET India is strictly for players aged 18 and over. Gambling should be treated as
                entertainment — never as a way to make money or escape problems. Only bet what you
                can afford to lose, and never chase losses.
              </p>
            ),
          },
          {
            heading: "Player protection tools",
            body: (
              <>
                <p>
                  Every account includes tools to help you stay in control: daily/weekly/monthly
                  deposit limits, loss limits, wagering limits, session time reminders, cool-off
                  periods and temporary or permanent self-exclusion. To activate any tool, contact{" "}
                  <a href="/contact" className="text-brand underline">
                    support
                  </a>{" "}
                  or use your account settings.
                </p>
              </>
            ),
          },
          {
            heading: "Warning signs of problem gambling",
            body: (
              <p>
                Watch for: betting more than you can afford, borrowing money to gamble, hiding
                gambling from family or friends, gambling to escape stress, chasing losses, or
                neglecting work and relationships. If any of these apply, take a break immediately
                and consider self-exclusion.
              </p>
            ),
          },
          {
            heading: "Getting help",
            body: (
              <p>
                If gambling stops being fun, help is available. Our support team can apply limits or
                close your account on request via the{" "}
                <a href="/help" className="text-brand underline">
                  Help Centre
                </a>{" "}
                or WhatsApp +91 97023 08448. Independent organisations such as Gamblers Anonymous
                and regional counselling services also provide free, confidential support.
              </p>
            ),
          },
          {
            heading: "Protecting minors",
            body: (
              <p>
                Accounts are strictly 18+ and verified through KYC. Parents should use device
                filters and keep login details private. Underage accounts are closed and balances
                forfeited upon detection — see our{" "}
                <a href="/terms" className="text-brand underline">
                  Terms and Conditions
                </a>
                .
              </p>
            ),
          },
        ]}
      />
    </>
  ),
});
