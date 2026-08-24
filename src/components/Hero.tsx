import heroImage from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex flex-col overflow-hidden">
      {/* Background Image - replace with your actual image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundColor: "#C0B799",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-2xl">
          {/* Main Headline */}
          <div className="space-y-4 mb-16">
            <p
              className="text-white/90 text-lg md:text-xl tracking-widest uppercase"
              style={{
                fontFamily:
                  "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              Discover. Innovate. Inspire.
            </p>
            <h2
              className="text-5xl md:text-7xl text-white leading-tight tracking-wide"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Explore <br /> New <br /> Horizons
            </h2>
          </div>
          {/* CTA Button */}
          <a
            href="#enroll"
            className="inline-block px-40 py-12 bg-[#C0B799] border-7 border-white text-white text-lg font-semibold rounded-full shadow-lg hover:bg-[#a89c78] transition-all hover:scale-105"
          >
            ENROLL NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
