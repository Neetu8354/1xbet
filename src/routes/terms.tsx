import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions — 1xBET India" },
      {
        name: "description",
        content:
          "Terms and conditions for using 1xBET India online betting platform. Read our rules, regulations and user agreement.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/terms" }],
  }),
  component: () => (
    <SEOPage
      title="Terms and Conditions"
      description="User agreement and terms of service"
      content={`
1xBET India Terms and Conditions

By using the 1xBET India platform, you agree to the following terms:

1. Eligibility: You must be 18 years or older to use this platform.

2. Account: You are responsible for maintaining the confidentiality of your account credentials.

3. Betting: All bets placed are subject to the rules and odds displayed at the time of placement.

4. Payments: Deposits and withdrawals are subject to our payment processing terms.

5. Responsible Gaming: We promote responsible gaming and provide tools to help manage your gambling.

6. Intellectual Property: All content on this platform is protected by copyright.

7. Disputes: Any disputes will be resolved through our customer support process.

For the complete terms and conditions, please contact our support team.
      `}
    />
  ),
});
