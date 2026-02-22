function Header() {
  try {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const [servicesOpen, setServicesOpen] = React.useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(false);
    const headerRef = React.useRef(null);

    const services = [
      'Project Management Consultation',
      'Construction Management Consultation',
      'Interior Designing',
      'Architecture Design & Planning',
      'Licensing',
      'Structural Design & Audit'
    ];

    const navigateToSection = (e, sectionId) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      setServicesOpen(false);
      setMobileServicesOpen(false);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = `index.html#${sectionId}`;
      }
    };

    const handleLinkClick = () => {
      setMobileMenuOpen(false);
      setServicesOpen(false);
      setMobileServicesOpen(false);
    };

    React.useEffect(() => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }, []);

    React.useEffect(() => {
      const handleClickOutside = (event) => {
        if (headerRef.current && !headerRef.current.contains(event.target)) {
          setMobileMenuOpen(false);
          setServicesOpen(false);
          setMobileServicesOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    React.useEffect(() => {
      const isLandingPage = window.location.pathname === '/' || window.location.pathname === '/index.html' || window.location.pathname.endsWith('/');
      
      if (!isLandingPage) {
        setIsVisible(true);
        return;
      }

      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <header ref={headerRef} className={`bg-white shadow-sm sticky top-0 z-50 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100 h-20' : '-translate-y-full opacity-0 h-0'}`} data-name="header" data-file="components/Header.js">
        <div className="bg-white mx-auto px-4 sm:px-6 lg:px-36">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="flex items-center">
              <img src="assets/radius-logo.png" alt="Radius Architects & Associates" className="h-12 transition-transform duration-300 hover:scale-105" />
            </a>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" onClick={(e) => navigateToSection(e, 'home')} className="text-[var(--text-primary)] hover:text-[var(--secondary-color)] transition-all duration-300 hover:scale-105">Home</a>
              <a href="#clients" onClick={(e) => navigateToSection(e, 'clients')} className="text-[var(--text-primary)] hover:text-[var(--secondary-color)] transition-all duration-300 hover:scale-105">Clients</a>
              <div className="relative">
                <button onClick={() => setServicesOpen(!servicesOpen)} className="text-[var(--text-primary)] hover:text-[var(--secondary-color)] transition-all duration-300 hover:scale-105 flex items-center">
                  Services <div className={`icon-chevron-down ml-1 text-sm transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}></div>
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 animate-fade-in">
                    {services.map((service, idx) => (
                      <a key={idx} href={`services.html?service=${idx}`} onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-50 text-sm transition-all duration-200 hover:translate-x-1">
                        {service}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a href="#testimonial" onClick={(e) => navigateToSection(e, 'testimonial')} className="text-[var(--text-primary)] hover:text-[var(--secondary-color)] transition">Testimonials</a>
              <a href="projects.html" onClick={handleLinkClick} className="text-[var(--text-primary)] hover:text-[var(--secondary-color)] transition">Projects</a>
              <a href="team.html" onClick={handleLinkClick} className="text-[var(--text-primary)] hover:text-[var(--secondary-color)] transition">Our Team</a>
              <a href="#contact" onClick={(e) => navigateToSection(e, 'contact')} className="text-[var(--text-primary)] hover:text-[var(--secondary-color)] transition">Contact Us</a>
            </nav>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden transition-transform duration-300 hover:scale-110 active:scale-95">
              <div className={`icon-${mobileMenuOpen ? 'x' : 'menu'} text-2xl text-[var(--primary-color)] transition-all duration-300`}></div>
            </button>
          </div>

          <style>{`
            @keyframes fade-in {
              from { opacity: 0; transform: translateY(-10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in { animation: fade-in 300ms ease-out; }
          `}</style>

          {mobileMenuOpen && (
            <div className="md:hidden bg-white py-4 border-t animate-fade-in">
              <a href="#home" onClick={(e) => navigateToSection(e, 'home')} className="block py-2 transition-all duration-200 hover:translate-x-2 hover:text-[var(--secondary-color)]">Home</a>
              <a href="#clients" onClick={(e) => navigateToSection(e, 'clients')} className="block py-2 transition-all duration-200 hover:translate-x-2 hover:text-[var(--secondary-color)]">Clients</a>
              <div>
                <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="w-full text-left py-2 transition-all duration-200 hover:text-[var(--secondary-color)] flex items-center justify-between">
                  Services 
                  <div className={`icon-chevron-down text-sm transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}></div>
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 animate-fade-in">
                    {services.map((service, idx) => (
                      <a key={idx} href={`services.html?service=${idx}`} onClick={handleLinkClick} className="block py-2 text-sm hover:text-[var(--secondary-color)] transition-all duration-200 hover:translate-x-2">
                        {service}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a href="#testimonial" onClick={(e) => navigateToSection(e, 'testimonial')} className="block py-2 transition-all duration-200 hover:translate-x-2 hover:text-[var(--secondary-color)]">Testimonials</a>
              <a href="projects.html" onClick={handleLinkClick} className="block py-2 transition-all duration-200 hover:translate-x-2 hover:text-[var(--secondary-color)]">Projects</a>
              <a href="team.html" onClick={handleLinkClick} className="block py-2 transition-all duration-200 hover:translate-x-2 hover:text-[var(--secondary-color)]">Our Team</a>
              <a href="#contact" onClick={(e) => navigateToSection(e, 'contact')} className="block py-2 transition-all duration-200 hover:translate-x-2 hover:text-[var(--secondary-color)]">Contact Us</a>
            </div>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}