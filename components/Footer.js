function Footer() {
  try {
    // state for showing the scroll-to-top button
    const [showScroll, setShowScroll] = React.useState(false);

    // show button when user scrolls down a bit
    React.useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 200) {
          setShowScroll(true);
        } else {
          setShowScroll(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const services = [
      { title: 'Project Management', idx: 0 },
      { title: 'Construction Management', idx: 1 },
      { title: 'Interior Designing', idx: 2 },
      { title: 'Architecture Design', idx: 3 },
      { title: 'Licensing', idx: 4 },
      { title: 'Structural Design', idx: 5 }
    ];

    const authorities = ['BMC', 'MCGM', 'MHADA', 'SRA', 'CIDCO'];

    const linkClass = "block text-gray-600 hover:text-[var(--secondary-color)] transition-all duration-300 hover:translate-x-1 text-sm";

    return (
      <>
        <footer className="bg-[var(--background-third)]" data-name="footer" data-file="components/Footer.js">

          {/* Main Footer Content */}
          <div className="mx-auto px-4 sm:px-6 lg:px-36 pt-12 pb-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {/* Column 1: Brand + Authorities */}
            <div className="lg:col-span-1">
              <img src="assets/radius-logo.png" alt="Radius Architects & Associates" className="h-14 mb-4" />
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">India's trusted partner for multi-authority licensing and DCPR 2034 compliance.</p>
              <h4 className="text-sm font-bold text-[var(--primary-color)] uppercase tracking-wider mb-3">Authorities We Work With</h4>
              <div className="flex flex-wrap gap-2">
                {authorities.map((auth, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-[var(--primary-color)] shadow-sm hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 cursor-default">
                    {auth}
                  </span>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg text-[var(--primary-color)] font-bold mb-4">Quick Links</h3>
              <div className="space-y-2.5">
                <a href="#home" className={linkClass}>Home</a>
                <a href="services.html" className={linkClass}>Services</a>
                <a href="projects.html" className={linkClass}>Projects</a>
                <a href="team.html" className={linkClass}>Our Team</a>
                <a href="#contact" className={linkClass}>Contact Us</a>
              </div>
            </div>

            {/* Column 3: Services */}
            <div>
              <h3 className="text-lg text-[var(--primary-color)] font-bold mb-4">Our Services</h3>
              <div className="space-y-2.5">
                {services.map((service) => (
                  <a key={service.idx} href={`services.html?service=${service.idx}`} className={linkClass}>
                    {service.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 4: Find Us */}
            <div>
              <h3 className="text-lg text-[var(--primary-color)] font-bold mb-4">Find Us</h3>
              <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm mb-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1544715441323!2d72.84320257612414!3d19.100878151189264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b420d025dd%3A0xadc7429aa5547855!2sShyam%20Kamal%20C%20Bldg%2C%2027%2C%20Tejpal%20Rd%2C%20near%20Manoj%20Ornaments%20Private%20Limited%2C%20Agarwal%20Market%2C%20Park%20Road%2C%20Vile%20Parle%2C%20Mumbai%2C%20Maharashtra%20400057!5e0!3m2!1sen!2sin!4v1771772513337!5m2!1sen!2sin"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Radius Architects Office Location"
                ></iframe>
              </div>
              <a
                href="https://www.google.com/maps/dir//Shyam+Kamal+C+Bldg,+27,+Tejpal+Rd,+near+Manoj+Ornaments+Private+Limited,+Agarwal+Market,+Park+Road,+Vile+Parle,+Mumbai,+Maharashtra+400057/@19.1008782,72.8432026,17z/data=!4m17!1m8!3m7!1s0x3be7c9b420d025dd:0xadc7429aa5547855!2sShyam+Kamal+C+Bldg,+27,+Tejpal+Rd,+near+Manoj+Ornaments+Private+Limited,+Agarwal+Market,+Park+Road,+Vile+Parle,+Mumbai,+Maharashtra+400057!3b1!8m2!3d19.1008731!4d72.8457775!16s%2Fg%2F11cs7mt3ns!4m7!1m0!1m5!1m1!1s0x3be7c9b420d025dd:0xadc7429aa5547855!2m2!1d72.8457775!2d19.1008731?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors duration-300"
              >
                <span className="icon-navigation text-base!"></span>
                Get Directions
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-col md:flex-row justify-center items-center text-center gap-2">
              <p className="text-base text-gray-500">
                &copy; 2026 <span className="text-[var(--primary-color)] font-semibold">Radius Architects & Associates</span>. All rights reserved.
              </p>
              {/* <div className="flex items-center gap-4 text-sm text-gray-500">
                <a href="#" className="hover:text-[var(--primary-color)] transition-colors duration-300">Privacy Policy</a>
                <span className="text-gray-300">|</span>
                <a href="#" className="hover:text-[var(--primary-color)] transition-colors duration-300">Terms of Service</a>
                <span className="text-gray-300">|</span>
                <a href="#" className="hover:text-[var(--primary-color)] transition-colors duration-300">Sitemap</a>
              </div> */}
              <p className="text-base text-gray-500">
                Designed by <a href="https://infinitysquaredtech.com" className="text-[var(--primary-color)] font-semibold hover:underline">Infinity Squared Technologies</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

        {/* scroll-to-top button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`z-80 fixed bottom-8 right-8 bg-[var(--primary-color)] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-opacity duration-300 cursor-pointer ${showScroll ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <span className="icon-arrow-up text-2xl!"></span>
        </button>
      </>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}