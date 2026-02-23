function ContactForm() {
  try {
    const [formData, setFormData] = React.useState({
      name: '', email: '', phone: '', projectType: '', message: ''
    });
    const [captcha, setCaptcha] = React.useState('');
    const [captchaInput, setCaptchaInput] = React.useState('');
    const [submitted, setSubmitted] = React.useState(false);
    const [focusedField, setFocusedField] = React.useState(null);

    React.useEffect(() => {
      generateCaptcha();
    }, []);

    const generateCaptcha = () => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let result = '';
      for (let i = 0; i < 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      setCaptcha(result);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (captchaInput !== captcha) {
        alert('Invalid CAPTCHA. Please try again.');
        generateCaptcha();
        setCaptchaInput('');
        return;
      }
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    };

    const contactInfo = [
      {
        icon: 'icon-map-pin',
        title: 'Visit Us',
        lines: ['F-103, Shyam Kamal-C Bldg.,', 'Agarwal Mkt, M.G. Road,', 'Vile Parle(E), Mumbai - 400 057']
      },
      {
        icon: 'icon-phone',
        title: 'Call Us',
        lines: ['+91 22 1234 5678', '+91 98765 43210']
      },
      {
        icon: 'icon-clock',
        title: 'Working Hours',
        lines: ['Mon – Sat: 9:00 AM – 7:00 PM', 'Sunday: Closed']
      }
    ];

    const inputBase = "w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm transition-all duration-300 outline-none focus:bg-white focus:border-[var(--primary-color)] focus:shadow-[0_0_0_3px_rgba(41,67,141,0.1)]";

    return (
      <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden" data-name="contact-form" data-file="components/ContactForm.js">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary-color)] rounded-full opacity-5 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[var(--secondary-color)] rounded-full opacity-5 translate-y-1/2 -translate-x-1/2"></div>

        <div className="mx-auto px-4 sm:px-6 lg:px-36 relative z-10">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[var(--primary-color)] mb-3">Let's Build Together</h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">Have a project in mind? Reach out and let our experts guide you through every step.</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-0 items-stretch">
            {/* Left - Contact Info Card */}
            <div className="lg:col-span-2 bg-[var(--primary-color)] rounded-b-2xl rounded-t-none lg:rounded-2xl lg:rounded-r-none p-10 text-white relative overflow-hidden order-2 lg:order-none">
              {/* Decorative circles inside card */}
              <div className="absolute -bottom-16 -right-16 w-48 h-48 border border-white border-opacity-10 rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-white border-opacity-10 rounded-full"></div>
              <div className="absolute top-12 right-12 w-16 h-16 border border-white border-opacity-10 rounded-full"></div>

              <h3 className="text-2xl font-bold mb-2 relative z-10">Get in Touch</h3>
              <p className="text-blue-200 text-sm mb-10 relative z-10">We'd love to hear about your next project. Fill out the form or reach us directly.</p>

              <div className="space-y-8 relative z-10">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4 group">
                    <div className="w-11 h-11 rounded-lg bg-white bg-opacity-15 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-opacity-25 group-hover:scale-110">
                      <div className={`${item.icon} text-lg! text-[var(--secondary-color)]`}></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-base mb-1">{item.title}</h4>
                      {item.lines.map((line, i) => (
                        <p key={i} className="text-blue-200 text-base leading-relaxed">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="mt-12 pt-8 border-t border-white border-opacity-15 relative z-10">
                <p className="text-2xl font-bold mb-2 relative z-10 mb-4">Follow us</p>
                <div className="flex space-x-3">
                  {['icon-facebook', 'icon-instagram', 'icon-linkedin', 'icon-twitter'].map((icon, idx) => (
                    <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-25 transition-all duration-300 hover:scale-110">
                      <div className={`${icon} text-sm! text-[var(--secondary-color)]`}></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Form Card */}
            <div className="lg:col-span-3 bg-white rounded-t-2xl rounded-b-none lg:rounded-2xl lg:rounded-l-none shadow-xl p-10 order-1 lg:order-none">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 animate-cf-fade-in">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6 animate-cf-scale-in">
                    <div className="icon-circle-check text-4xl text-green-600"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                  <p className="text-[var(--text-secondary)] text-center max-w-sm">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Email row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Full Name *</label>
                      <div className="relative">
                        <div className="icon-user absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></div>
                        <input
                          type="text"
                          placeholder="John Doe"
                          required
                          className={`${inputBase} pl-10`}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Email *</label>
                      <div className="relative">
                        <div className="icon-mail absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></div>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          required
                          className={`${inputBase} pl-10`}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone & Project Type row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Phone *</label>
                      <div className="relative">
                        <div className="icon-phone absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></div>
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          required
                          className={`${inputBase} pl-10`}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Project Type *</label>
                      <div className="relative">
                        <div className="icon-briefcase absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></div>
                        <select
                          required
                          className={`${inputBase} pl-10 appearance-none cursor-pointer`}
                          onFocus={() => setFocusedField('projectType')}
                          onBlur={() => setFocusedField(null)}
                          onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                        >
                          <option value="">Select type...</option>
                          <option>Project Management</option>
                          <option>Construction Management</option>
                          <option>Interior Designing</option>
                          <option>Architecture Design</option>
                          <option>Licensing</option>
                          <option>Structural Design</option>
                        </select>
                        <div className="icon-chevron-down absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none"></div>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Message</label>
                    <div className="relative">
                      <div className="icon-message-square absolute left-3.5 top-4 text-gray-400 text-sm"></div>
                      <textarea
                        placeholder="Tell us about your project requirements..."
                        rows="4"
                        className={`${inputBase} pl-10 resize-none`}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>
                  </div>

                  {/* CAPTCHA */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Security Verification *</label>
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="px-5 py-2.5 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg font-mono text-lg tracking-[0.3em] text-white select-none shadow-inner" style={{fontStyle: 'italic', letterSpacing: '0.25em'}}>
                          {captcha}
                        </div>
                      </div>
                      <button type="button" onClick={() => { generateCaptcha(); setCaptchaInput(''); }} className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-all duration-200 flex-shrink-0" title="Refresh CAPTCHA">
                        <div className="icon-refresh-cw text-sm text-gray-500"></div>
                      </button>
                      <input
                        type="text"
                        placeholder="Enter code above"
                        required
                        className={`${inputBase} flex-1`}
                        value={captchaInput}
                        onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[var(--primary-color)] text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] active:translate-y-[0px] active:shadow-md flex items-center justify-center space-x-2 group"
                  >
                    <span>Send Message</span>
                    <div className="icon-send text-sm transition-transform duration-300 group-hover:translate-x-1"></div>
                  </button>

                  <p className="text-sm text-center text-gray-400 mt-2">We respect your privacy. Your information will never be shared.</p>
                </form>
              )}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes cf-fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes cf-scale-in {
            0% { opacity: 0; transform: scale(0.3); }
            50% { transform: scale(1.1); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-cf-fade-in { animation: cf-fade-in 500ms ease-out; }
          .animate-cf-scale-in { animation: cf-scale-in 600ms ease-out; }
        `}</style>
      </section>
    );
  } catch (error) {
    console.error('ContactForm component error:', error);
    return null;
  }
}
