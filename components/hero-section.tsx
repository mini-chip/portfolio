"use client";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/placeholder.mp4?duration=10&theme=abstract-green"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <div className="bg-black/80 backdrop-blur-sm text-center py-20 px-8 rounded-lg mb-8 border border-primary/30 animate-in fade-in slide-in-from-bottom duration-1000 delay-500 hover:scale-105 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 animate-in slide-in-from-left duration-1000 delay-700 hover:text-accent transition-colors">
            HELLO WORLD!
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary flex items-center justify-center gap-4 animate-in slide-in-from-right duration-1000 delay-900">
            MINHEE PORTFOLIO
            <span className="text-accent text-4xl md:text-6xl animate-bounce hover:animate-spin transition-all duration-300 cursor-pointer">
              👋
            </span>
          </h2>
          <p className="text-primary/80 mt-6 text-lg animate-in fade-in duration-1000 delay-1200 hover:text-accent transition-colors">
            로딩중... 완료!
          </p>
        </div>
      </div>
    </section>
  );
}
