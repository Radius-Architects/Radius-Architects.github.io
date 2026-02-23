function ServicesGrid() {
  try {
    const services = [
      { icon: 'icon-clipboard', title: 'Project Management', desc: 'Complete project oversight from conception to completion with regulatory compliance monitoring.' },
      { icon: 'icon-hard-hat', title: 'Construction Management', desc: 'On-site supervision and quality control ensuring adherence to approved plans and standards.' },
      { icon: 'icon-paintbrush', title: 'Interior Designing', desc: 'Professional interior design services aligned with architectural plans and client vision.' },
      { icon: 'icon-pencil-ruler', title: 'Architecture Design', desc: 'Innovative architectural solutions with complete DCPR 2034 compliance and authority approvals.' },
      { icon: 'icon-file-text', title: 'Licensing', desc: 'End-to-end licensing for BMC/MCGM/SRA with DCPR 2034 compliance. Zero delays guaranteed.' },
      { icon: 'icon-building-2', title: 'Structural Design', desc: 'Comprehensive structural engineering, design, and audit services for safety and compliance.' }
    ];

    return (
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" data-name="services-grid" data-file="components/ServicesGrid.js">
        <div className="mx-auto px-4 sm:px-6 lg:px-36">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[var(--primary-color)] mb-3">What We Offer</h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">We deliver comprehensive solutions that transform ideas into reality</p>
            <div className="w-16 h-1 bg-[var(--secondary-color)] mx-auto mt-5 rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, idx) => (
              <a
                key={idx}
                href={`services.html?service=${idx}`}
                className="relative bg-[var(--background-third)] p-8 rounded-2xl border border-gray-100 flex flex-col justify-start items-center text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer group block overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                {/* Subtle index number */}
                <span className="absolute top-4 right-5 text-5xl font-black text-[var(--primary-color)]/5 select-none leading-none">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                {/* Icon container */}
                <div className="relative w-18 h-18 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-3">
                  <div className={`${service.icon} text-3xl! text-white`}></div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-[var(--primary-color)] group-hover:text-[var(--secondary-color)] transition-colors duration-300">{service.title}</h3>
                <p className="text-[var(--text-secondary)] text-base leading-relaxed">{service.desc}</p>

                {/* Bottom arrow indicator */}
                <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-[var(--secondary-color)] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ServicesGrid component error:', error);
    return null;
  }
}