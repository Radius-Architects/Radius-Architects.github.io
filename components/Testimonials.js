function Testimonials() {
  try {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const testimonials = [
      {
        name: 'Rajesh Mehta',
        role: 'Director, Prime Developers',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
        text: 'Their expertise in BMC licensing saved us months of delays. The team handled all regulatory compliance seamlessly with DCPR 2034 standards.'
      },
      {
        name: 'Priya Sharma',
        role: 'Managing Partner, Skyline Constructions',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
        text: 'Outstanding service for our MHADA redevelopment project. Their 25+ years of experience shows in every interaction with authorities.'
      },
      {
        name: 'Vikram Patel',
        role: 'CEO, Urban Spaces',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
        text: 'Zero delays guaranteed and they delivered! Complete multi-authority coordination for our SRA project was handled professionally.'
      },
      {
        name: 'Sunita Rao',
        role: 'Project Manager, Horizon Builders',
        image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400&q=80',
        text: 'Their team’s deep understanding of DCPR 2034 regulations and multi-authority processes was instrumental in the success of our BMC project. Highly recommended!'
      },
      {
        name: 'Anil Kumar',
        role: 'Founder, Greenfield Realty',
        image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80',
        text: 'Professional, efficient, and knowledgeable. They navigated the complexities of multi-authority licensing with ease for our latest project.'
      },
      {
        name: 'Neha Desai',
        role: 'Head of Operations, Metro Developments',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
        text: 'Their commitment to on-time delivery and regulatory compliance is unmatched. They made the licensing process stress-free for our team.'
      },
      {
        name: 'Rohit Verma',
        role: 'Senior Architect, Skyline Constructions',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80',
        text: 'As an architect, working with a licensing partner who understands the technical and regulatory aspects is crucial. They exceeded our expectations in every way.'
      },
      {
        name: 'Sonal Gupta',
        role: 'Director of Projects, Urban Spaces',
        image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80',
        text: 'Their expertise in multi-authority licensing and DCPR 2034 compliance was evident from day one. They are our go-to partner for all future projects.'
      }
    ];

    // On desktop we show 3 at a time, on mobile 1 at a time
    const visibleCount = typeof window !== 'undefined' && window.innerWidth >= 768 ? 3 : 1;
    const maxIndex = Math.max(0, testimonials.length - visibleCount);

    React.useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(interval);
    }, [maxIndex]);

    return (
      <section id='testimonial' className="py-20 bg-white" data-name="testimonials" data-file="components/Testimonials.js">
        <div className="mx-auto px-4 sm:px-6 lg:px-36">
          <h2 className="text-4xl text-center text-[var(--primary-color)] mb-2">Testimonials</h2>
          <h3 className="text-xl text-center text-[var(--text-secondary)] mb-12">What Our Clients Say</h3>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}>
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="min-w-full md:min-w-[33.333%] px-4">
                    <div className="bg-[var(--background-third)] p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                      <div className="flex items-center mb-6">
                        <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4" loading="lazy" />
                        <div>
                          <h3 className="font-bold text-[var(--primary-color)]">{testimonial.name}</h3>
                          <p className="text-sm text-[var(--text-secondary)]">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-[var(--text-secondary)] leading-relaxed italic">"{testimonial.text}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: maxIndex + 1 }, (_, idx) => (
                <button key={idx} onClick={() => setCurrentIndex(idx)} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-[var(--primary-color)] w-8' : 'bg-gray-300'}`}></button>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Testimonials component error:', error);
    return null;
  }
}