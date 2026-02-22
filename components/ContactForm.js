function ContactForm() {
  try {
    const [formData, setFormData] = React.useState({
      name: '', email: '', phone: '', projectType: '', message: ''
    });
    const [captcha, setCaptcha] = React.useState('');
    const [captchaInput, setCaptchaInput] = React.useState('');
    const [submitted, setSubmitted] = React.useState(false);

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
      setTimeout(() => setSubmitted(false), 3000);
    };

    return (
      <section id="contact" className="py-20 bg-white" data-name="contact-form" data-file="components/ContactForm.js">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl text-center text-[var(--primary-color)] mb-2">Get in Touch</h2>
          <h3 className="text-xl text-center text-[var(--text-secondary)] mb-12">Ready to transform your ideas into reality?</h3>
          {submitted ? (
            <div className="text-center py-8 bg-green-50 rounded-lg animate-fade-in">
              <div className="icon-circle-check text-5xl text-green-600 mb-4 animate-bounce"></div>
              <p className="text-lg text-green-700">Thank you! We'll contact you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" placeholder="Name *" required className="w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-20" onChange={(e) => setFormData({...formData, name: e.target.value})} />
              <input type="email" placeholder="Email *" required className="w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-20" onChange={(e) => setFormData({...formData, email: e.target.value})} />
              <input type="tel" placeholder="Phone *" required className="w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-20" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              <select required className="w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-20" onChange={(e) => setFormData({...formData, projectType: e.target.value})}>
                <option value="">Select Project Type *</option>
                <option>BMC Licensing</option>
                <option>MCGM Approval</option>
                <option>MHADA Redevelopment</option>
                <option>SRA Project</option>
                <option>Other</option>
              </select>
              <textarea placeholder="Message" rows="4" className="w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-20" onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
              <div className="flex items-center space-x-4">
                <div className="px-4 py-2 bg-gray-200 rounded font-mono text-lg tracking-widest">{captcha}</div>
                <input type="text" placeholder="Enter CAPTCHA *" required className="flex-1 px-4 py-3 border rounded-lg transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-20" value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)} />
              </div>
              <button type="submit" className="w-full py-4 bg-[var(--primary-color)] text-white font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
        <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in { animation: fade-in 400ms ease-out; }
        `}</style>
      </section>
    );
  } catch (error) {
    console.error('ContactForm component error:', error);
    return null;
  }
}
