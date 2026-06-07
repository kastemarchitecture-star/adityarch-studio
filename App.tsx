import React, { useState } from 'react'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Data 8 Koleksi Rumah Klasik Modern Eropa sesuai spesifikasi
  const premiumHouses = [
    { id: 1, name: 'The Louvre Pavilion', category: 'Signature', price: 'Rp 4,5 M - 6 M', ROI: '12-15% / Year', features: 'Grand Pillars, High Ceiling, Symmetrical Facade' },
    { id: 2, name: 'Versailles Executive', category: 'Signature', price: 'Rp 7,5 M - 9 M', ROI: '14-18% / Year', features: 'Private Courtyard, Mansard Roof, Ornate Details' },
    { id: 3, name: 'The Florence Estate', category: 'Classic', price: 'Rp 3,8 M - 5 M', ROI: '11-14% / Year', features: 'Arched Windows, Juliet Balconies, Ivory Stone' },
    { id: 4, name: 'Milano Modern Classic', category: 'Modern', price: 'Rp 4,2 M - 5.5 M', ROI: '13-16% / Year', features: 'Minimalist Cornice, Iron Cast Rails, Sleek Layout' },
    { id: 5, name: 'The Vienna Manor', category: 'Classic', price: 'Rp 5,0 M - 6.8 M', ROI: '12-16% / Year', features: 'Double Height Foyer, Marble Flooring, Classic Portico' },
    { id: 6, name: 'Amsterdam Heritage', category: 'Modern', price: 'Rp 3,5 M - 4.8 M', ROI: '10-13% / Year', features: 'Compact Luxury, Brick Elements, Tall Windows' },
    { id: 7, name: 'The Monaco Villa', category: 'Signature', price: 'Rp 12 M - 15 M', ROI: '15-20% / Year', features: 'Infinity Pool View, Grand Chandelier Hall, Smart Home' },
    { id: 8, name: 'London Georgian Row', category: 'Classic', price: 'Rp 6,0 M - 8 M', ROI: '12-15% / Year', features: 'Timeless Brick & Stone, Formal Dining, Private Study' }
  ]

  const filteredHouses = selectedCategory === 'All' 
    ? premiumHouses 
    : premiumHouses.filter(h => h.category === selectedCategory)

  // Desain Token / Palet Warna
  const colors = {
    gold: '#C9A962',
    charcoal: '#2C2C2C',
    dark: '#1A1A1A',
    ivory: '#FFFFF0',
    white: '#FFFFFF'
  }

  return (
    <div style={{ backgroundColor: colors.dark, color: colors.white, fontFamily: '"Cormorant Garamond", "Inter", sans-serif', minHeight: '100vh', margin: 0 }}>
      
      {/* HEADER NAVIGATION */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '25px 8%', borderBottom: '1px solid #333', backgroundColor: '#111', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ fontSize: '22px', fontWeight: 'bold', letterSpacing: '4px', color: colors.gold }}>
          ADITYARCH <span style={{ color: colors.white, fontWeight: '300' }}>STUDIO & BUILD</span>
        </div>
        <nav style={{ display: 'flex', gap: '30px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px' }}>
          <a href="#hero" style={{ color: colors.white, textDecoration: 'none' }}>Home</a>
          <a href="#why-us" style={{ color: '#aaa', textDecoration: 'none' }}>Value Proposition</a>
          <a href="#collection" style={{ color: '#aaa', textDecoration: 'none' }}>Collection</a>
          <a href="#services" style={{ color: '#aaa', textDecoration: 'none' }}>Services</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section id="hero" style={{ padding: '120px 8%', textAlign: 'center', backgroundImage: 'linear-gradient(to bottom, #111, #1a1a1a)', borderBottom: `4px solid ${colors.gold}` }}>
        <span style={{ color: colors.gold, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '14px', fontWeight: '600' }}>Premium Investment-Focused Architecture</span>
        <h1 style={{ fontSize: '54px', fontWeight: '300', margin: '20px 0', letterSpacing: '3px', lineHeight: '1.2' }}>
          European Modern Classic Collection
        </h1>
        <p style={{ maxWidth: '750px', margin: '0 auto 40px auto', color: '#bbb', fontSize: '16px', lineHeight: '1.8' }}>
          Kami merancang dan membangun hunian mewah berstandar tinggi yang mengintegrasikan keindahan arsitektur klasik Eropa dengan proyeksi peningkatan nilai investasi aset jangka panjang secara presisi.
        </p>
        <a href="#contact" style={{ backgroundColor: colors.gold, color: colors.dark, padding: '15px 35px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', borderRadius: '0px', boxShadow: '0 4px 15px rgba(201, 169, 98, 0.2)' }}>
          Request Free Survey & Consultation
        </a>
      </section>

      {/* WHY CHOOSE US - VALUE PROPOSITION */}
      <section id="why-us" style={{ padding: '80px 8%', backgroundColor: '#222' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '400', letterSpacing: '2px' }}>Why Invest With ADITYARCH?</h2>
          <div style={{ width: '60px', height: '2px', backgroundColor: colors.gold, margin: '15px auto' }}></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          <div style={{ padding: '25px', backgroundColor: colors.dark, borderLeft: `3px solid ${colors.gold}` }}>
            <h3 style={{ color: colors.gold, fontSize: '18px', margin: '0 0 10px 0' }}>High ROI Projections</h3>
            <p style={{ color: '#aaa', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>Setiap desain disimulasikan untuk memaksimalkan nilai jual kembali properti dan apresiasi tanah kawasan.</p>
          </div>
          <div style={{ padding: '25px', backgroundColor: colors.dark, borderLeft: `3px solid ${colors.gold}` }}>
            <h3 style={{ color: colors.gold, fontSize: '18px', margin: '0 0 10px 0' }}>Meticulous Craftsmanship</h3>
            <p style={{ color: '#aaa', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>Detail ornamen pilar, cornic, dan layout ruang Eropa klasik dikerjakan dengan presisi tinggi oleh spesialis kami.</p>
          </div>
          <div style={{ padding: '25px', backgroundColor: colors.dark, borderLeft: `3px solid ${colors.gold}` }}>
            <h3 style={{ color: colors.gold, fontSize: '18px', margin: '0 0 10px 0' }}>Integrated Custom Furniture</h3>
            <p style={{ color: '#aaa', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>Integrasi langsung antara struktur sipil bangunan, keselarasan interior interior, hingga standardisasi furnitur kustom.</p>
          </div>
        </div>
      </section>

      {/* CURATED COLLECTION COMPONENT */}
      <section id="collection" style={{ padding: '80px 8%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '50px', flexWrap: 'wrap', gap: '25px' }}>
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: '400', letterSpacing: '2px', margin: 0 }}>The Curated Collection</h2>
            <p style={{ color: '#888', margin: '10px 0 0 0', fontSize: '14px' }}>8 tipe rumah pilihan dengan karakteristik arsitektur kuat & valuasi komparatif.</p>
          </div>
          
          {/* CATEGORY FILTER BUTTONS */}
          <div style={{ display: 'flex', gap: '10px', backgroundColor: '#111', padding: '5px', borderRadius: '0px' }}>
            {['All', 'Signature', 'Classic', 'Modern'].map((cat) => (
              <button key={cat} onClick={() => setSelectedCategory(cat)} style={{ padding: '8px 20px', border: 'none', backgroundColor: selectedCategory === cat ? colors.gold : 'transparent', color: selectedCategory === cat ? colors.dark : '#888', cursor: 'pointer', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', transition: '0.3s' }}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* HOUSES GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '35px' }}>
          {filteredHouses.map((house) => (
            <div key={house.id} style={{ backgroundColor: '#1f1f1f', border: '1px solid #333', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '25px', backgroundColor: '#151515', borderBottom: '1px solid #2a2a2a', position: 'relative' }}>
                <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: colors.gold, backgroundColor: 'rgba(201, 169, 98, 0.1)', padding: '4px 10px', position: 'absolute', top: '25px', right: '25px' }}>
                  {house.category}
                </span>
                <h3 style={{ fontSize: '22px', fontWeight: '400', margin: '0 0 5px 0', letterSpacing: '1px' }}>{house.name}</h3>
                <p style={{ textTransform: 'uppercase', fontSize: '11px', color: '#666', letterSpacing: '1px', margin: 0 }}>Premium House Model</p>
              </div>
              
              <div style={{ padding: '25px', flexGrow: 1 }}>
                <p style={{ color: '#aaa', fontSize: '13px', lineHeight: '1.6', margin: '0 0 20px 0', fontStyle: 'italic' }}>
                  "{house.features}"
                </p>
                <div style={{ borderTop: '1px solid #2a2a2a', paddingTop: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                    <span style={{ color: '#666' }}>Est. Investment Budget:</span>
                    <span style={{ color: colors.white, fontWeight: 'bold' }}>{house.price}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                    <span style={{ color: '#666' }}>Target Value ROI:</span>
                    <span style={{ color: '#4CAF50', fontWeight: 'bold' }}>{house.ROI}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE SERVICES */}
      <section id="services" style={{ padding: '80px 8%', backgroundColor: '#151515', borderTop: '1px solid #2a2a2a' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '400', letterSpacing: '2px' }}>Integrated Services</h2>
          <p style={{ color: '#666', fontSize: '14px', margin: '5px 0 0 0' }}>Satu ekosistem layanan lengkap dari hulu ke hilir</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '25px' }}>
          {['Architectural Design', 'General Construction', 'Luxury Interior Planning', 'Custom Fine Furniture'].map((service, index) => (
            <div key={index} style={{ padding: '30px 20px', backgroundColor: colors.dark, textAlign: 'center', border: '1px solid #222' }}>
              <div style={{ color: colors.gold, fontSize: '24px', marginBottom: '15px', fontWeight: 'bold' }}>0{index + 1}</div>
              <h4 style={{ fontSize: '16px', fontWeight: '400', margin: 0, letterSpacing: '1px', textTransform: 'uppercase' }}>{service}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* LEAD GENERATION & CONTACT FOOTER */}
      <footer id="contact" style={{ backgroundColor: '#0f0f0f', padding: '80px 8% 40px 8%', borderTop: `1px solid ${colors.gold}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '50px', marginBottom: '60px' }}>
          <div>
            <h4 style={{ color: colors.gold, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>ADITYARCH STUDIO</h4>
            <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.6' }}>
              Menyatukan kemewahan seni arsitektur Eropa dengan efisiensi rekayasa konstruksi modern serta kepastian nilai investasi yang terukur.
            </p>
          </div>
          <div>
            <h4 style={{ color: colors.gold, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>Contact Information</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#aaa', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><strong>WhatsApp:</strong> +62 821 4777 7570</li>
              <li><strong>Email:</strong> info@adityarchstudio.com</li>
              <li><strong>Office HQ:</strong> Teritip, Balikpapan Timur</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: colors.gold, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>Service Area</h4>
            <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.6' }}>
              Melayani konsultasi, perencanaan, dan pengerjaan proyek konstruksi skala nasional di seluruh area strategis Indonesia.
            </p>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid #222', paddingTop: '30px', textAlign: 'center', fontSize: '12px', color: '#555', letterSpacing: '1px' }}>
          &copy; 2026 ADITYARCH Studio & Build. All rights reserved. Premium Production Version 2.0.0.
        </div>
      </footer>

    </div>
  )
}

export default App
