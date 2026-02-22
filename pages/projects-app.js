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
          <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-[5%] animate-fade-in" onClick={closeProject}>
            <div className="relative w-full h-full flex flex-col" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <div className="text-white">
                  <h2 className="text-2xl md:text-3xl font-bold">{selectedProject.title}</h2>
                  <p className="text-gray-300 text-sm md:text-base">{currentImageIndex + 1} / {selectedProject.gallery.length}</p>
                </div>
                <button onClick={closeProject} className="text-white hover:text-gray-300 transition-all duration-300 hover:scale-110 hover:rotate-90">
                  <div className="icon-x text-3xl md:text-4xl"></div>
                </button>
              </div>

              <div className="flex-1 relative flex items-center justify-center min-h-0"
                   onTouchStart={handleTouchStart}
                   onTouchMove={handleTouchMove}
                   onTouchEnd={handleTouchEnd}>
                <img 
                  src={selectedProject.gallery[currentImageIndex]} 
                  alt={`${selectedProject.title} ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg animate-slide-in"
                  key={currentImageIndex}
                />

                {selectedProject.gallery.length > 1 && (
                  <>
                    <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <div className="icon-chevron-left text-2xl md:text-3xl text-white"></div>
                    </button>
                    <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <div className="icon-chevron-right text-2xl md:text-3xl text-white"></div>
                    </button>
                  </>
                )}
              </div>

              {selectedProject.gallery.length > 1 && (
                <div className="flex justify-center mt-6 space-x-2">
                  {selectedProject.gallery.map((_, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${currentImageIndex === idx ? 'bg-white w-6 md:w-8' : 'bg-gray-500'}`}
                    ></button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        <style>{`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slide-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in { animation: fade-in 300ms ease-out; }
          .animate-slide-in { animation: slide-in 400ms ease-out; }
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