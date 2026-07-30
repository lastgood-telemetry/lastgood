import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Activity, ArrowRight, Clock, Volume2, VolumeX } from "lucide-react";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" />
      {/* Background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] opacity-40 pointer-events-none" style={{ background: 'var(--gradient-glow)' }} />

      <div className="container mx-auto px-6 py-24 text-center relative z-10">
        <div className="animate-fade-in flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary/80 animate-pulse"></span>
            </span>
            <span>AI-native change correlation</span>
          </div>
        </div>

        <h1 className="animate-slide-up text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1] mb-5 drop-shadow-sm">
          Incidents start with a change.
          <span className="font-serif-italic text-primary block mt-2 text-3xl sm:text-4xl md:text-5xl font-normal lowercase">Find the trigger in 3 seconds.</span>
        </h1>

        <p className="animate-slide-up text-sm sm:text-base text-muted-foreground/80 max-w-xl mx-auto mb-8 tracking-wide leading-relaxed" style={{ animationDelay: '0.1s' }}>
          LastGood automatically correlates your alerts with GitHub commits and CI/CD deployments—before your team starts guessing in Slack.
        </p>

        <div className="animate-slide-up flex flex-col sm:flex-row items-center justify-center gap-3" style={{ animationDelay: '0.2s' }}>
          <Button variant="default" className="h-10 px-6 text-sm font-semibold transition-all duration-200" onClick={() => window.open("https://forms.gle/9hEBh6WQJae5w7QG8", "_blank")}>
            Join Waitlist
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Button>
          <Button
            variant="outline"
            className="h-10 px-6 text-sm font-semibold border-border/80 hover:bg-white/5 transition-all duration-200"
            onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Example Timeline
          </Button>
        </div>

        {/* Interactive Demo Video */}
        <div className="animate-slide-up mt-16 max-w-4xl mx-auto rounded-xl overflow-hidden border border-border/80 bg-surface/50 shadow-2xl relative group transition-transform duration-700 hover:scale-[1.02]" style={{ animationDelay: '0.3s', transform: 'perspective(1200px) rotateX(2deg)' }}>
          {/* Fake Window Header */}
          <div className="h-10 border-b border-border/50 bg-muted/30 flex items-center px-4">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
          </div>
          <div className="relative aspect-video w-full bg-black group/video">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              src="/lastgood-intro.mp4"
            />
            {/* Mute Toggle Button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 p-2 rounded-full bg-black/50 text-white backdrop-blur-sm border border-white/10 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 hover:bg-black/70 focus:outline-none"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
