function ClientsServed() {
  try {
    const clientLogos1 = [
      { name: 'BMC', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&q=80' },
      { name: 'MCGM', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&q=80' },
      { name: 'MHADA', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=200&q=80' },
      { name: 'SRA', image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=200&q=80' },
      { name: 'Co-op Societies', image: 'https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?w=200&q=80' },
      { name: 'Major Developers', image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=200&q=80' }
    ];
    const clientLogos2 = [
      { name: 'Builder_1', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&q=80' },
      { name: 'Builder_2', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=200&q=80' },
      { name: 'Builder_3', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&q=80' },
      { name: 'Builder_4', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200&q=80' },
      { name: 'Builder_5', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=200&q=80' },
      { name: 'Builder_6', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=200&q=80' }
    ];

    return (
      <section id='clients' className="py-20 bg-gray-50" data-name="clients-served" data-file="components/ClientsServed.js">
        <div className="mx-auto px-4 sm:px-6 lg:px-36">
          <h2 className="text-4xl text-center text-[var(--primary-color)] mb-2">Trusted by Industry Leaders</h2>
          <h3 className="text-xl text-center text-[var(--text-secondary)] mb-12">We're proud to partner with innovative companies across various industries</h3>
          
          <div className="mb-8 overflow-hidden">
            <div className="flex animate-scroll space-x-8">
              {[...clientLogos1, ...clientLogos1].map((client, idx) => (
                <div key={idx} className="flex-shrink-0 bg-white rounded-lg min-w-[200px] h-28 flex items-center justify-center p-4 shadow-sm">
                  <img src={client.image} alt={client.name} className="max-w-full max-h-full object-contain" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} loading="lazy" />
                  <span className="text-lg font-bold text-[var(--primary-color)] hidden">{client.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8 overflow-hidden">
            <div className="flex animate-scroll-reverse space-x-8">
              {[...clientLogos2, ...clientLogos2].map((client, idx) => (
                <div key={idx} className="flex-shrink-0 bg-white rounded-lg min-w-[200px] h-28 flex items-center justify-center p-4 shadow-sm">
                  <img src={client.image} alt={client.name} className="max-w-full max-h-full object-contain" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} loading="lazy" />
                  <span className="text-lg font-bold text-[var(--primary-color)] hidden">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll { animation: scroll 20s linear infinite; }
          .animate-scroll-reverse { animation: scroll-reverse 20s linear infinite; }
        `}</style>
      </section>
    );
  } catch (error) {
    console.error('ClientsServed component error:', error);
    return null;
  }
}