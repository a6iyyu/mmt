import { init } from "@sentry/nextjs";

init({
  dsn: process.env.SENTRY_DSN as string,

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Enable Sentry only in production environment
  enabled: process.env.NODE_ENV === "production",

  // Enable sending user PII (Personally Identifiable Information)
  sendDefaultPii: true,
});