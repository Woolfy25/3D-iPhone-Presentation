import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// import * as Sentry from "@sentry/react";
// Sentry.init({
//   dsn: "https://4bdb74aad41f37af7ff6da04a75a70a1@o4508269912260608.ingest.de.sentry.io/4508269965606992",
//   integrations: [
//     Sentry.browserTracingIntegration(),
//     Sentry.replayIntegration(),
//   ],
//   tracesSampleRate: 1.0,
//   tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
//   replaysSessionSampleRate: 0.1,
//   replaysOnErrorSampleRate: 1.0,
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
