import { captureRouterTransitionStart, init, replayIntegration } from "@sentry/nextjs";

init({
  dsn: "https://161a7d9de462f2f9e47330e2cfc3c6b2@o4510449047830528.ingest.us.sentry.io/4510449117364224",
  enabled: process.env.NODE_ENV === "production",
  enableLogs: true,
  integrations: [replayIntegration()],
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  sendDefaultPii: true,
  tracesSampleRate: 1,
});

export const onRouterTransitionStart = captureRouterTransitionStart;