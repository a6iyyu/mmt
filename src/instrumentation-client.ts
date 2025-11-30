import { captureRouterTransitionStart, init, replayIntegration } from "@sentry/nextjs";

init({
  dsn: "https://161a7d9de462f2f9e47330e2cfc3c6b2@o4510449047830528.ingest.us.sentry.io/4510449117364224",

  // Add optional integrations for additional features
  integrations: [replayIntegration()],

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Define how likely Replay events are sampled.
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // Define how likely Replay events are sampled when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  // Enable sending user PII (Personally Identifiable Information)
  sendDefaultPii: true,
});

export const onRouterTransitionStart = captureRouterTransitionStart;