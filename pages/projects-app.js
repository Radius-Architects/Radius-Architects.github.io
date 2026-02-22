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

function ProjectsPage() {
  try {
    const [selectedProject, setSelectedProject] = React.useState(null);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const [touchStart, setTouchStart] = React.useState(0);
    const [touchEnd, setTouchEnd] = React.useState(0);

    React.useEffect(() => {
      if (selectedProject) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [selectedProject]);

    React.useEffect(() => {
      const handleKeyDown = (e) => {
        if (!selectedProject) return;
        if (e.key === 'Escape') closeProject();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedProject, currentImageIndex]);

    const handleTouchStart = (e) => {
      setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
      setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
      if (!selectedProject) return;
      if (touchStart - touchEnd > 50) {
        nextImage();
      }
      if (touchStart - touchEnd < -50) {
        prevImage();
      }
    };

    const nextImage = () => {
      if (!selectedProject) return;
      setCurrentImageIndex((prev) => 
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    };

    const prevImage = () => {
      if (!selectedProject) return;
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    };

    const openProject = (project) => {
      setSelectedProject(project);
      setCurrentImageIndex(0);
    };

    const closeProject = () => {
      setSelectedProject(null);
      setCurrentImageIndex(0);
    };

    const projects = [
      {
        title: 'Marine Drive Redevelopment',
        client: 'MHADA',
        location: 'Marine Drive, Mumbai',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
          'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80'
        ]
      },
      {
        title: 'Navi Mumbai Residential Complex',
        client: 'BMC',
        location: 'Navi Mumbai',
        image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80',
          'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80'
        ]
      },
      {
        title: 'Dharavi SRA Housing Project',
        client: 'SRA',
        location: 'Dharavi, Mumbai',
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
          'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&q=80'
        ]
      }
    ];

    return (
      <div data-name="projects-page" data-file="projects-app.js">
        <Header />
        <section className="py-20 bg-gray-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-36">
            <h1 className="text-5xl text-center text-[var(--primary-color)] mb-16">Our Projects</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[var(--primary-color)] mb-2 transition-colors duration-300 group-hover:text-[var(--secondary-color)]">{project.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-1">Client: {project.client}</p>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">{project.location}</p>
                    <button onClick={() => openProject(project)} className="px-4 py-2 bg-[var(--primary-color)] text-white rounded hover:bg-opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                      View Photos
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in">
            {/* Backdrop with blur */}
            <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={closeProject}></div>
            
            {/* Modal Container */}
            <div className="relative z-10 w-full h-full max-w-7xl mx-auto flex flex-col p-4 md:p-8" onClick={(e) => e.stopPropagation()}>
              
              {/* Header */}
              <div className="flex justify-between items-start mb-4 md:mb-6 animate-slide-down">
                <div className="flex-1">
                  <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">{selectedProject.title}</h2>
                  <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-gray-300">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      {selectedProject.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                      {selectedProject.client}
                    </span>
                  </div>
                </div>
                
                {/* Close Button */}
                <button 
                  onClick={closeProject}
                  className="ml-4 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:rotate-90 group"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              {/* Image Container */}
              <div 
                className="flex-1 relative flex items-center justify-center min-h-0 rounded-2xl overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Main Image */}
                <div className="relative w-full h-full flex items-center justify-center bg-black/40 rounded-2xl overflow-hidden">
                  <img 
                    src={selectedProject.gallery[currentImageIndex]} 
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="max-w-full max-h-full object-contain animate-image-appear shadow-2xl"
                    key={currentImageIndex}
                  />
                </div>

                {/* Navigation Buttons - Desktop */}
                {selectedProject.gallery.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 w-14 h-14 lg:w-16 lg:h-16 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:-translate-x-1 group"
                      aria-label="Previous image"
                    >
                      <svg className="w-7 h-7 lg:w-8 lg:h-8 text-white group-hover:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/>
                      </svg>
                    </button>
                    <button 
                      onClick={nextImage}
                      className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 w-14 h-14 lg:w-16 lg:h-16 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:translate-x-1 group"
                      aria-label="Next image"
                    >
                      <svg className="w-7 h-7 lg:w-8 lg:h-8 text-white group-hover:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Footer with Controls */}
              <div className="mt-4 md:mt-6 flex flex-col md:flex-row items-center justify-between gap-4 animate-slide-up">
                
                {/* Image Counter */}
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
                  <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span className="text-sm md:text-base font-medium text-white">
                    {currentImageIndex + 1} / {selectedProject.gallery.length}
                  </span>
                </div>

                {/* Dot Indicators */}
                {selectedProject.gallery.length > 1 && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
                    {selectedProject.gallery.map((_, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`transition-all duration-300 rounded-full ${
                          currentImageIndex === idx 
                            ? 'w-8 md:w-10 h-2.5 bg-white' 
                            : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/60'
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}

                {/* Mobile Navigation Buttons */}
                {selectedProject.gallery.length > 1 && (
                  <div className="flex md:hidden items-center gap-3">
                    <button 
                      onClick={prevImage}
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 active:scale-95"
                      aria-label="Previous image"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/>
                      </svg>
                    </button>
                    <button 
                      onClick={nextImage}
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 active:scale-95"
                      aria-label="Next image"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <style>{`
          @keyframes fade-in {
            from { 
              opacity: 0; 
            }
            to { 
              opacity: 1; 
            }
          }
          @keyframes slide-down {
            from { 
              opacity: 0; 
              transform: translateY(-20px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
          @keyframes slide-up {
            from { 
              opacity: 0; 
              transform: translateY(20px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
          @keyframes image-appear {
            from { 
              opacity: 0; 
              transform: scale(0.95); 
            }
            to { 
              opacity: 1; 
              transform: scale(1); 
            }
          }
          .animate-fade-in { 
            animation: fade-in 300ms ease-out; 
          }
          .animate-slide-down { 
            animation: slide-down 400ms ease-out; 
          }
          .animate-slide-up { 
            animation: slide-up 400ms ease-out; 
          }
          .animate-image-appear { 
            animation: image-appear 500ms cubic-bezier(0.16, 1, 0.3, 1); 
          }
        `}</style>

        <ContactForm />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('ProjectsPage error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><ProjectsPage /></ErrorBoundary>);