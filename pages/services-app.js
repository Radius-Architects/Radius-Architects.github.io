class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }
  render() {
    if (this.state.hasError) {
      return <div className="min-h-screen flex items-center justify-center"><p>Something went wrong</p></div>;
    }
    return this.props.children;
  }
}

function ServicesPage() {
  try {
    const services = [
      {
        title: 'Project Management Consultation',
        desc: 'Comprehensive project oversight ensuring regulatory compliance and timely completion. Expert guidance from planning to execution.',
        backgroundImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
        content: 'Our project management team brings decades of experience in managing complex real estate projects from conception to completion. We ensure every phase meets regulatory requirements while maintaining cost efficiency and timeline adherence. With our proven methodologies and DCPR 2034 expertise, we provide complete oversight that minimizes risks and maximizes project success.',
        features: ['Complete Regulatory Oversight', 'Timeline Management', 'Quality Assurance', 'Risk Mitigation'],
        icon: 'icon-clipboard'
      },
      {
        title: 'Construction Management Consultation',
        desc: 'On-site supervision with 25+ years of experience. Ensuring quality control and adherence to approved architectural plans.',
        backgroundImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80',
        content: 'Our construction management services provide hands-on supervision throughout your project lifecycle. With senior engineers and architects on-site, we ensure adherence to approved plans, maintain quality standards, and coordinate with multiple authorities seamlessly. Our experience with BMC, MCGM, MHADA, and SRA projects ensures smooth execution and compliance.',
        features: ['On-site Supervision', 'Quality Control', 'Safety Compliance', 'Progress Monitoring'],
        icon: 'icon-hard-hat'
      },
      {
        title: 'Interior Designing',
        desc: 'Professional interior design services aligned with architectural plans and client vision.',
        backgroundImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80',
        content: 'Transform your spaces with our expert interior design services that blend aesthetics with functionality. Our designers work closely with architects to ensure seamless integration with overall project vision while maintaining regulatory compliance. From residential to commercial spaces, we deliver designs that reflect your brand and enhance user experience.',
        features: ['Space Planning', 'Material Selection', 'Lighting Design', '3D Visualization'],
        icon: 'icon-paintbrush'
      },
      {
        title: 'Architecture Design and planning',
        desc: 'Innovative architectural solutions with complete DCPR 2034 compliance and authority approvals.',
        backgroundImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
        content: 'Our architectural design services combine creative innovation with strict regulatory compliance. With MCGM and MHADA empaneled architects, we deliver designs that meet DCPR 2034 standards while maximizing space utilization and aesthetic appeal. From conceptual sketches to detailed working drawings, we handle every aspect of architectural planning.',
        features: ['DCPR 2034 Compliant Designs', 'Space Optimization', 'Authority Approvals', 'Sustainable Solutions'],
        icon: 'icon-pencil-ruler'
      },
      {
        title: 'Licensing',
        desc: 'We handle BMC permits for 50+ projects with 0% delays. Complete end-to-end licensing for BMC/MCGM/SRA with DCPR 2034 compliance.',
        backgroundImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
        content: 'Our licensing services are our core strength with a proven track record of zero delays across 50+ projects. We handle all aspects of multi-authority licensing including BMC, MCGM, MHADA, and SRA with complete DCPR 2034 compliance. Our dedicated team maintains constant liaison with authorities, ensuring smooth approvals and timely project commencement.',
        features: ['DCPR 2034 Expertise', '24/7 Authority Liaison', 'Zero Delays', 'Cost-Effective Solutions'],
        icon: 'icon-file-text'
      },
      {
        title: 'Structural Design and Audit',
        desc: 'Comprehensive structural engineering, design, and audit services for safety and compliance.',
        backgroundImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80',
        content: 'Ensure structural integrity and safety with our comprehensive structural design and audit services. Our experienced civil engineers provide detailed structural analysis, design solutions, and thorough audits for existing structures. We ensure compliance with IS codes and authority requirements while optimizing structural efficiency and cost.',
        features: ['Structural Analysis', 'Design Optimization', 'Safety Audits', 'IS Code Compliance'],
        icon: 'icon-building-2'
      }
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const serviceIdx = parseInt(urlParams.get('service')) || 0;
    const service = services[serviceIdx] || services[0];

    return (
      <div data-name="services-page" data-file="services-app.js">
        <Header />
        <section className="relative py-20 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={service.backgroundImage} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] via-[#0d3d5f] to-[var(--primary-color)] opacity-65"></div>
          </div>
          <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-36 text-center">
            <div className={`${service.icon} text-6xl mb-6`}></div>
            <h1 className="text-5xl mb-6">{service.title}</h1>
            <p className="text-xl text-gray-200">{service.desc}</p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed text-center">
              {service.content}
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="flex items-center justify-center max-w-4xl mx-auto px-4">
            <h2 className="text-3xl text-[var(--primary-color)] mb-8">Key Features</h2>
          </div>
          <div className="flex items-center justify-center max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-2">
                  <div className="icon-circle-check text-2xl text-green-600 transition-transform duration-300 hover:scale-125"></div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-[var(--background-third)] bg-opacity-10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="icon-award text-4xl text-[var(--primary-color)]"></div>
              <h2 className="text-2xl text-[var(--primary-color)]">In-house Team of Senior Architects</h2>
            </div>
            <p className="text-lg text-[var(--text-secondary)]">25+ years experience with MCGM/MHADA Empanelling</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl text-[var(--primary-color)] mb-8 text-center">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-white">
                <h3 className="text-xl font-bold mb-3 text-[var(--primary-color)]">22+ Professional Staff</h3>
                <p className="text-[var(--text-secondary)]">Dedicated team with MCGM/MHADA empanelling and extensive regulatory experience</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-white">
                <h3 className="text-xl font-bold mb-3 text-[var(--primary-color)]">DCPR 2034 Certified</h3>
                <p className="text-[var(--text-secondary)]">Complete compliance expertise for latest development control regulations</p>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('ServicesPage error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <ServicesPage />
  </ErrorBoundary>
);
