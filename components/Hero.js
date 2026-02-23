function Hero() {
  try {
    return (
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden" data-name="hero" data-file="components/Hero.js">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="assets/landing_page_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] via-[#0d3d5f] to-[var(--primary-color)] opacity-45 z-10"></div>
        
        <div className="relative z-20 text-center mx-auto px-4 sm:px-6 lg:px-36">
          <h1 className="text-4xl! md:text-6xl! text-white mb-6 leading-tight">
            Your Trusted Partner for BMC/MCGM/SRA Licensing & DCPR 2034 Compliance
          </h1>
          <p className="text-xl! md:text-2xl! font-bold text-gray-200 mb-8">
            Expert guidance and end-to-end solutions for hassle-free approvals and project success
          </p>
          <a href="#contact" className="inline-block px-8 py-4 bg-[var(--primary-color)] text-[var(--background)] font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg hover:bg-[var(--secondary-color)] hover:text-[var(--text-primary)]">
            Get Licensing Consultation
          </a>
        </div>

        {/* modern scroll indicator */}
        <div className="absolute inset-x-0 bottom-8 flex justify-center z-20">
          <a href="#clients" className="flex flex-col items-center text-white">
            <span className="w-8 h-12 border-2 border-white rounded-full flex justify-center items-start p-1">
              <span className="w-3 h-3 bg-white rounded-full mb-1 animate-bounce"></span>
            </span>
            <span className="mt-2 text-sm uppercase tracking-wider">scroll</span>
            <span className="sr-only">Scroll Down</span>
          </a>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}