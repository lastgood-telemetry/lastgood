import posthog from "posthog-js";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Initialize once before rendering; history changes capture SPA pageviews.
posthog.init("phc_soGg9PVWSR3wFJmLFUUR8gooHbQkTCK8uJfCuu3Y5X5X", {
  api_host: "https://us.i.posthog.com",
  autocapture: true,
  capture_pageview: "history_change",
});

createRoot(document.getElementById("root")!).render(<App />);
