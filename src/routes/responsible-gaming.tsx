import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/responsible-gaming")({
  head: () => ({
    meta: [
      { title: "Responsible Gaming — 1xBET India" },
      {
        name: "description",
        content:
          "Responsible gaming at 1xBET India. Tools and resources to help you gamble safely and responsibly.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/responsible-gaming/" }],
  }),
  component: () => (
    <SEOPage
      title="Responsible Gaming"
      description="Gamble responsibly at 1xBET India"
      content={`
1xBET India is committed to promoting responsible gaming. We want you to enjoy our platform safely.

Responsible gaming tools:
- Deposit limits
- Loss limits
- Session time limits
- Self-exclusion options
- Reality checks

Warning signs of problem gambling:
- Betting more than you can afford to lose
- Chasing losses
- Gambling affecting your work or relationships
- Lying about gambling habits

If you or someone you know has a gambling problem, please seek help. Contact our support team for assistance.

Age restriction: 18+ only.
      `}
    />
  ),
});
