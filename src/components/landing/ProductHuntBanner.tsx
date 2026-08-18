import { useState, useEffect } from "react";
import { X, TrendingUp } from "lucide-react";
import { trackEvent } from "@/util/analytics";

const ProductHuntBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  if (!isVisible) return null;

  const handleClick = () => {
    trackEvent("click_product_hunt", "navigation", "ProductHuntBanner");
    window.open("https://www.producthunt.com/products/lastgood?launch=lastgood", "_blank");
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
      isAnimated ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-full translate-y-full"
    }`}>
      {/* Floating Card */}
      <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-indigo-500/20 rounded-xl shadow-2xl overflow-hidden hover:border-indigo-500/40 transition-all duration-300 w-full max-w-sm">
        {/* Header with close button */}
        <div className="flex items-start justify-between gap-3 p-4 sm:p-5 border-b border-indigo-500/10">
          <div className="flex-1">
            <p className="text-sm font-semibold text-white leading-tight">
              We're live on Product Hunt! 🚀
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Join the community and vote for lastgood
            </p>
          </div>
          <button
            onClick={handleClose}
            className="flex-shrink-0 p-1.5 text-slate-400 hover:text-slate-200 hover:bg-white/10 rounded-lg transition-all duration-200"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* PH Badge */}
        <div className="px-4 sm:px-5 py-3 border-b border-indigo-500/10 flex justify-center">
          <a 
            href="https://www.producthunt.com/products/lastgood?launch=lastgood"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("click_product_hunt_badge", "navigation", "ProductHuntBanner")}
            className="group transition-opacity duration-300 hover:opacity-100"
          >
            <img 
              alt="LastGood - Telemetry tells you what. LastGood tells you why. | Product Hunt"
              width="250"
              height="54"
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1225276&theme=light&t=1787037047649"
              className="h-auto w-auto opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </a>
        </div>

        {/* Action Button */}
        <div className="p-4 sm:p-5">
          <button
            onClick={handleClick}
            className="w-full group relative px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold text-sm uppercase tracking-wide rounded-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
          >
            <TrendingUp className="h-4 w-4" />
            <span>Upvote on Product Hunt</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductHuntBanner;
