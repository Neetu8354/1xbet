import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/become-agent")({
  head: () => ({
    meta: [
      { title: "Become an Agent — 1xBET India" },
      {
        name: "description",
        content:
          "Become a 1xBET India agent and earn commissions by referring players to our platform.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/become-agent" }],
  }),
  component: () => (
    <SEOPage
      title="Become an Agent"
      description="Join our agent network at 1xBET India"
      content={`
Become a 1xBET India agent and earn money by referring players to our platform.

Agent program benefits:
- Commission on every player deposit
- Marketing support and materials
- Flexible working hours
- Performance bonuses
- Dedicated account manager

Contact us to apply for the agent program.
      `}
    />
  ),
});
