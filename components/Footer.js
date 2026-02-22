function Footer() {
  try {
    return (
      <footer className="bg-[var(--background-third)] text-white py-12" data-name="footer" data-file="components/Footer.js">
        <div className="mx-auto px-4 sm:px-6 lg:px-36">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src="assets/radius-logo.png" alt="Radius Architects & Associates" className="h-16 mb-4" />
              <p className="text-gray-800 text-base">India's trusted partner for multi-authority licensing and DCPR 2034 compliance.</p>
            </div>
            <div>
              <h3 className="text-2xl text-[var(--primary-color)] font-bold mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <a href="#home" className="block text-gray-800 hover:text-[var(--secondary-color)] transition-all duration-300 hover:translate-x-1">Home</a>
                <a href="services.html" className="block text-gray-800 hover:text-[var(--secondary-color)] transition-all duration-300 hover:translate-x-1">Services</a>
                <a href="projects.html" className="block text-gray-800 hover:text-[var(--secondary-color)] transition-all duration-300 hover:translate-x-1">Projects</a>
                <a href="team.html" className="block text-gray-800 hover:text-[var(--secondary-color)] transition-all duration-300 hover:translate-x-1">Our Team</a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl text-[var(--primary-color)] font-bold mb-4">Contact</h3>
              <p className="text-gray-800 text-sm mb-2">Address: F-103, Shyam Kamal-C Bldg., Agarwal Mkt, Above Sahakari Bhandar, M.G.Road, Vile Parle(E), Mumbai- 400 057</p>
              <p className="text-gray-800 text-sm">Phone: +91 22 1234 5678</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-base text-gray-400">
            <p>
              &copy; 2026 <span className="text-[var(--primary-color)]">Radius Architects & Associates</span>. All rights reserved. Designed by
              <a href="https://infinitysquaredtech.com" className="text-[var(--primary-color)]"> Infinity Squared Technologies</a>
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}