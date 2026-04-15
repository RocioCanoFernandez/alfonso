import React from 'react'
import { Phone, Mail, Globe, Instagram, Linkedin, Facebook, Download, ShieldCheck, ChevronRight, MessageCircle } from 'lucide-react'
import './index.css'

function App() {
  const data = {
    name: "Alfonso Recio",
    role: "Gerente comercial",
    slogan: "Porque lo que mereces debe ser simple y efectivo",
    email: "alfonso@solucionesconkalma.es",
    phone: "673646345",
    phoneUrl: "+34673646345",
    website: "https://solucionesconkalma.es/",
    instagram: "https://www.instagram.com/solucionesconkalmasl?igsh=MTVwNWQ5ZW0wOXR0ZA%3D%3D&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/alfonso-recio-sanchez-681b37357",
    facebook: "https://www.facebook.com/profile.php?id=61583843648352",
    logoUrl: "/logo - soluciones con kalma.jpeg",
    profileImgUrl: "/alfonso.jpeg",
    bgOverlayUrl: "/fondo.png",
    seviaiLogoUrl: "/logo_sin_fondo.png"
  }

  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${data.name}
ORG:Soluciones con Kalma
TITLE:${data.role}
TEL;TYPE=WORK,VOICE:${data.phoneUrl}
EMAIL;TYPE=PREF,INTERNET:${data.email}
URL:${data.website}
END:VCARD`;

  const handleDownloadVCard = () => {
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'alfonso_recio.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hub-container">
      {/* VCard Button at Top Right */}
      <button onClick={handleDownloadVCard} className="vcard-btn-floating" title="Guardar contacto" aria-label="Guardar contacto">
        <Download size={22} />
      </button>

      {/* Hero Header */}
      <header className="hero">
        <div 
          className="hero-overlay" 
          style={{ backgroundImage: `url('${data.bgOverlayUrl}')` }}
        ></div>
        
        <div className="hero-content">
          <div className="logo-container">
            <img 
              src={data.logoUrl} 
              alt="Soluciones con Kalma" 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<h2 style="font-weight: 800; letter-spacing: 1px; color: var(--accent-cyan);">Soluciones con Kalma</h2>';
              }} 
            />
          </div>
          
          <h1 className="name">{data.name}</h1>
          <p className="role">{data.role}</p>
          <p className="slogan">"{data.slogan}"</p>
        </div>
      </header>

      {/* Profile Area */}
      <section className="profile-section">
        <div className="profile-img-container">
          <img src={data.profileImgUrl} alt={data.name} className="profile-img" onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Alfonso+Recio&background=12C7CF&color=fff&size=200' }} />
        </div>
      </section>

      {/* Quick Contact Badges */}
      <div className="contact-badges">
        <a href={`tel:${data.phoneUrl}`} className="badge">
          <Phone size={18} />
          <span>{data.phone}</span>
        </a>
        <a href={`mailto:${data.email}`} className="badge">
          <Mail size={18} />
          <span>{data.email}</span>
        </a>
      </div>

      <main className="content">
        
        {/* Services Resume */}
        <div className="services-card">
          <h3 className="services-title">
            <ShieldCheck size={20} />
            Nuestros Servicios
          </h3>
          <p className="services-text">
            Soluciones para hogares y negocios en telecomunicaciones, luz y gas, y seguridad. 
            Te ayudamos a encontrar la opción más conveniente con asesoramiento cercano y seguimiento personalizado.
          </p>
          <p className="services-subtext">
            Asesoramiento en telefonía y fibra, luz y gas, y sistemas de seguridad y alarmas.
          </p>
        </div>

        {/* Main CTA */}
        <a href={`https://wa.me/${data.phoneUrl.replace('+', '')}?text=Hola%20${data.name.split(' ')[0]},%20me%20gustar%C3%ADa%20solicitar%20un%20estudio.`} target="_blank" rel="noopener noreferrer" className="main-cta">
          Solicitar estudio
        </a>

        {/* Links */}
        <h3 className="section-title">Presencia Digital</h3>
        <div className="links-container">
          <a href={data.website} target="_blank" rel="noopener noreferrer" className="link-card">
            <div className="link-card-left">
              <div className="link-icon-container">
                <Globe size={20} />
              </div>
              <span>Web Corporativa</span>
            </div>
            <ChevronRight size={20} className="link-arrow" />
          </a>
          
          <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="link-card">
            <div className="link-card-left">
              <div className="link-icon-container">
                <Instagram size={20} />
              </div>
              <span>Instagram</span>
            </div>
            <ChevronRight size={20} className="link-arrow" />
          </a>

          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="link-card">
            <div className="link-card-left">
              <div className="link-icon-container">
                <Linkedin size={20} />
              </div>
              <span>LinkedIn</span>
            </div>
            <ChevronRight size={20} className="link-arrow" />
          </a>

          <a href={data.facebook} target="_blank" rel="noopener noreferrer" className="link-card">
            <div className="link-card-left">
              <div className="link-icon-container">
                <Facebook size={20} />
              </div>
              <span>Facebook</span>
            </div>
            <ChevronRight size={20} className="link-arrow" />
          </a>
        </div>

      </main>

      {/* SeviAI Ecosystem Footer */}
      <div className="seviai-footer" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '0.5rem',
        padding: '1.5rem', 
        marginTop: '1rem', 
        paddingBottom: '5rem',
        opacity: 0.6,
        fontSize: '0.7rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontWeight: '600',
        color: 'var(--text-muted)',
        flexWrap: 'wrap'
      }}>
        <p>© 2026 Soluciones con Kalma</p>
        <div style={{ width: '1px', height: '12px', backgroundColor: 'var(--border-gray)' }}></div>
        <p style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          SeviAI Ecosystem
          <img src={data.seviaiLogoUrl} alt="SeviAI" style={{ height: '12px', opacity: 0.8, filter: 'grayscale(100%)' }} />
        </p>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="floating-actions">
        <a 
          href={`https://wa.me/${data.phoneUrl.replace('+', '')}?text=Hola%20Alfonso,%20vengo%20de%20tu%20tarjeta%20digital.%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n.`}
          target="_blank" 
          rel="noopener noreferrer" 
          className="fab fab-whatsapp"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </div>
  )
}

export default App
