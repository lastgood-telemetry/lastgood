import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";
import Docs from "./pages/Docs";
import Product from "./pages/Product";
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
      <Route path="/product" element={<Product />} />
      <Route path="/terms" element={<Terms />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
