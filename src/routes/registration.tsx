import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/registration")({
  head: () => ({
    meta: [
      { title: "Registration — 1xBET India" },
      {
        name: "description",
        content:
          "Create your 1xBET India account. Quick and easy registration to start betting on sports and casino games.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/registration/" }],
  }),
  component: () => (
    <SEOPage
      title="Registration"
      description="Create your 1xBET India account"
      content={`
Join 1xBET India today. Registration is quick and easy.

How to register:
1. Click the Register button
2. Fill in your details
3. Verify your account
4. Make your first deposit
5. Start betting

New players receive a welcome bonus on their first deposit.
      `}
    />
  ),
});
