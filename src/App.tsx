import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Docs from "./pages/Docs";
import Access from "./pages/Access";
import { initGA, trackPageView } from "./util/analytics";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    initGA();
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
};

const App = () => (
  <BrowserRouter>
    <AnalyticsTracker />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/access" element={<Access />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
