function ClientsServed() {
  try {
    const clientLogos1 = [
      { name: 'Atharva Developers', image: 'https://atharvadevelopers.in/wp-content/uploads/2024/09/Screenshot-2024-09-25-132527-1024x352.png' },
      { name: 'Runwal Realty', image: 'https://runwalrealty.com/wp-content/themes/runwal/images/mainLogo.svg' },
      { name: 'L%T Realty', image: 'https://www.lntrealty.com/wp-content/themes/lntrealty/assets/images/brand-logo-desktop.webp' },
      { name: 'H. Rishabraj', image: 'https://static.wixstatic.com/media/715bd3_ffee3db0b3d2490a9b3061ff5e71e6fd~mv2.png/v1/fill/w_212,h_111,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/new%20logo.png' },
      { name: 'Godrej Properties', image: 'https://www.godrejwoodscapes.live/project/godrej-properties-logo.webp' },
      { name: 'Raymond Realty', image: 'https://raymondrealty.in/images/logo-black-23-12-25.svg' },
      { name: 'Avigna Developers', image: 'assets/logos/avigna_developers_logo.webp' },
      { name: 'Vira Developers', image: 'https://viragroup.in/wp-content/uploads/2026/01/vira_logo_colered.svg' },
      { name: 'Alliance City', image: 'https://www.alliancecity.co.in/assets/img/logo.png' },
      { name: 'JE & VEE Group', image: 'https://jnvinfra.com/wp-content/uploads/2024/02/logo-small.png' },
      { name: 'Ajmera Developers', image: 'https://www.propmart.co/wp-content/uploads/2021/11/download-1.png' },
      { name: 'Inspira Builders', image: 'https://i0.wp.com/www.inspirabuilders.com/wp-content/uploads/2019/10/Inspira-Logo-Blue.jpg?w=200&ssl=1' },
    ];
    const clientLogos2 = [
      { name: 'Purvankara Group', image: 'https://www.puravankara.com/images/purvankara-logo.svg' },
      { name: 'Lotus Developers', image: 'https://assets-netstorage.groww.in/stocks-ipo/logos/SriLotusDevelopersRealtyLtd_58377396_94305.png' },
      { name: 'Kalpataru Developers', image: 'https://cdn.brandfetch.io/idGdvjS8kO/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1767143324011' },
      { name: 'Prestige Group', image: 'https://d1t2fddy6amcvs.cloudfront.net/images/logo.svg' },
      { name: 'Hiranandani Group', image: 'https://www.hiranandani.com/img/Hiranandani-logo.png' },
      { name: 'K Raheja Corp', image: 'https://iconlogovector.com/uploads/images/2025/11/lg-6916615554b5f-K-Raheja-Corp.webp' },
      { name: 'Mahindra Life Spaces', image: 'https://mldlprodstorage.blob.core.windows.net/live/2022/10/mahindra_logo_new_horizontal-scaled.webp' },
      { name: 'Sugee Developers', image: 'https://static.wixstatic.com/media/3241d3_c3c4bc63abc748b2930a326cb9e40a19~mv2.png/v1/fill/w_110,h_53,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sugee%20Logo_Register_1-08.png' },
      { name: 'PCPL', image: 'assets/logos/pcpl_logo.webp' },
      { name: 'Shelaji Group', image: 'https://shelajigroup.com/images/logo.png' },
      { name: 'Mahaveer Contructions', image: 'https://mahaveerconstruction.com/wp-content/uploads/2021/04/logoNew-1.png' },
      { name: 'Mayfair Housing', image: 'https://mayfairhousing.com/Content/assets/img/logo/logo.png' },
    ];

    return (
      <section id='clients' className="py-20 bg-gray-50" data-name="clients-served" data-file="components/ClientsServed.js">
        <div className="mx-auto px-4 sm:px-6 lg:px-36">
          <h2 className="text-4xl text-center text-[var(--primary-color)] mb-2">Trusted by Industry Leaders</h2>
          <h3 className="text-xl text-center text-[var(--text-secondary)] mb-12">We're proud to partner with innovative companies across various industries</h3>
          
          <div className="mb-8 overflow-hidden">
            <div className="flex animate-scroll space-x-8">
              {[...clientLogos1, ...clientLogos1].map((client, idx) => (
                <div key={idx} className="flex-shrink-0 bg-white rounded-lg min-w-[200px] max-w-[200px] h-28 flex items-center justify-center p-2 shadow-sm">
                  <img src={client.image} alt={client.name} className="max-w-full max-h-full object-contain" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} loading="lazy" />
                  <span className="text-lg font-bold text-[var(--primary-color)] hidden">{client.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8 overflow-hidden">
            <div className="flex animate-scroll-reverse space-x-8">
              {[...clientLogos2, ...clientLogos2].map((client, idx) => (
                <div key={idx} className="flex-shrink-0 bg-white rounded-lg min-w-[200px] max-w-[200px] h-28 flex items-center justify-center p-4 shadow-sm">
                  <img src={client.image} alt={client.name} className="max-w-full max-h-full object-contain" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} loading="lazy" />
                  <span className="text-lg font-bold text-[var(--primary-color)] hidden">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ClientsServed component error:', error);
    return null;
  }
}