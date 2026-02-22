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
      <section className="py-20 bg-gray-50" data-name="services-grid" data-file="components/ServicesGrid.js">
        <div className="mx-auto px-4 sm:px-6 lg:px-36">
          <h2 className="text-4xl text-center text-[var(--primary-color)] mb-2">Our Services</h2>
          <h3 className="text-xl text-center text-[var(--text-secondary)] mb-12">We deliver comprehensive solutions that transform ideas into reality</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <a key={idx} href={`services.html?service=${idx}`} className="bg-[var(--background-third)] p-8 rounded-lg shadow-sm flex flex-col justify-center items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group block">
                <div className="w-20 h-20 rounded-xl flex items-center justify-center mb-4 bg-[var(--background-secondary)] bg-opacity-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <div className={`${service.icon} text-4xl text-[var(--background)]`}></div>
                </div>
                <h3 className="text-2xl mb-3 text-[var(--primary-color)]">{service.title}</h3>
                <p className="text-[var(--text-secondary)] text-lg leading-relaxed">{service.desc}</p>
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