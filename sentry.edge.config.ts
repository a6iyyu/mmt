import { init } from "@sentry/nextjs";

init({
  dsn: "https://161a7d9de462f2f9e47330e2cfc3c6b2@o4510449047830528.ingest.us.sentry.io/4510449117364224",
  enableLogs: true,
  sendDefaultPii: true,
  tracesSampleRate: 1,
});