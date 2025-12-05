import { init } from "@sentry/nextjs";

init({
  dsn: process.env.SENTRY_DSN as string,
  enabled: process.env.NODE_ENV === "production",
  enableLogs: true,
  sendDefaultPii: true,
  tracesSampleRate: 1,
});