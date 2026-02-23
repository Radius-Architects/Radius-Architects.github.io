function AboutSection() {
  try {
    return (
      <section className="py-20 bg-white" data-name="about-section" data-file="components/AboutSection.js">
        <div className="mx-auto px-4 sm:px-6 lg:px-36">
        <h2 className="text-4xl text-center text-[var(--primary-color)] mb-2">What We Do</h2>
        <h3 className="text-xl text-center text-[var(--text-secondary)] mb-12">We're proud to partner with innovative companies across various industries</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl group">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" 
                alt="Modern Architecture" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-color)] via-transparent to-transparent opacity-60"></div>
            </div>

            <div>
              <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
                We specialize in comprehensive licensing solutions for real estate projects across multiple regulatory authorities. Our expertise spans <span className="font-semibold text-[var(--primary-color)]">BMC, MCGM, MHADA, and SRA</span>, ensuring complete compliance with <span className="font-semibold text-[var(--primary-color)]">DCPR 2034</span> regulations.
              </p>
              <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
                With a dedicated team of 22+ professionals including senior architects with 25+ years of experience, civil engineers, and legal advisors, we deliver seamless multi-authority liaison services for new and upcoming real estate projects.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <div className="icon-shield-check text-xl text-[var(--background)]"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--primary-color)] mb-1">DCPR 2034 Compliance</h3>
                    <p className="text-sm text-[var(--text-secondary)]">Complete regulatory compliance for all development control regulations</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <div className="icon-users text-xl text-[var(--background)]"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--primary-color)] mb-1">Multi-Authority Expertise</h3>
                    <p className="text-sm text-[var(--text-secondary)]">Seamless coordination with BMC, MCGM, MHADA, and SRA authorities</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <div className="icon-clock text-xl text-[var(--background)]"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--primary-color)] mb-1">Zero Delays Guaranteed</h3>
                    <p className="text-sm text-[var(--text-secondary)]">50+ projects completed with 0% delay rate and on-time delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('AboutSection component error:', error);
    return null;
  }
}