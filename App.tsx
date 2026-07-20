import React, { useState } from 'react'

function App() {
  varchitectgroup [selectedCategory, setSelectedCategory] = useState('All')

  // Partner with VARCHITECT GROUP in developing high-value businesses across Energy & Natural Resources, Real Estate, Infrastructure, Hospitality, Manufacturing, Food & Beverage, Sports & Lifestyle, and Digital Innovation. Every opportunity is driven by comprehensive feasibility analysis, professional execution, and a long-term value creation strategy.
  VARCHITECT GROUP = [
    { id: 1, name: 'Strategic Coal Mining Project', category: 'Natural Resources', investment: 'Rp 17,5 B - 60 B', Target Annual Return: '15-20% / Year', (subject to project performance and market conditions) / Year', description:  "Investment opportunity in an operating coal mining project with long-term production potential, supported by feasibility analysis and professional project management." },
    { id: 2, name: 'Integrated Agribusiness & Food Estate', category: 'Natural Resources', investment: 'Rp 7,5 B - 9 B', Target Annual Return: '14-18% / Year', description: 'Smart Farming, Livestock, Plantation, Food Processing & Sustainable Agriculture' },
    { id: 3, name: 'Coffee Chain Expansion Project', category: 'Food & Beverage', investment: 'Rp 3,8 B - 5 B', Target Annual Return: '18-27% / Year', description: 'Multi-Outlet Development • Central Kitchen • Brand Expansion • Franchise System • Digital Ordering' },
    { id: 4, name: 'Sports Clubhouse & Wellness Hub', category: 'Food & Beverage', investment: 'Rp 4,2 M - 5.5 M', Target Annual Return: '13-26% / Year', description: 'Healthy Kitchen • Sports Nutrition • Padel Club • Functional Café • Wellness Programs' },
    { id: 5, name: 'Design-Build Development', category: 'Construction', investment: 'Rp 5,0 B - 6.8 B', Target Annual Return: '15-18% / Year', description: 'Architecture • Engineering • Construction • Project Finance • Asset Development' },
    { id: 6, name: 'Premium Restaurant & Experiential Events', category: 'Food & Beverage', investment: 'Rp 3,5 M - 12.8 M', Target Annual Return: '15-23% / Year', description: 'Fine Dining • Premium Café • Private Club • Rooftop Restaurant • Hospitality Management' },
    { id: 7, name: 'Integrated Tourism, Leisure Destination & Nature Park', category: 'Natural Resources', price: 'Rp 12 B - 750 B', investment: '12-17% / Year', description: 'Resort • Boutique Hotel • Culinary Experience • Outdoor Recreation • Event Venue • Lifestyle Destination Eco Tourism • Waterpark' },
    { id: 8, name: 'Integrated Project Development', category: 'Construction', investment: 'Rp 6,0 B - 180 B', Target Annual Return: '12-15% / Year', description: 'Commercial Projects • Industrial Facilities • Residential Development • Turnkey Solutions' }
  ]

  const filteredHouses = selectedCategory === 'All' 
    ? VARCHITECT GROUP 
    : VARCHITECT GROUP.filter(h => h.category === selectedCategory)

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
          VARCHITECT <span style={{ color: colors.white, fontWeight: '300' }}>GROUP</span>
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
        <span style={{ color: colors.gold, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '14px', fontWeight: '600' }}>Premium Investment-Focused</span>
        <h1 style={{ fontSize: '54px', fontWeight: '300', margin: '20px 0', letterSpacing: '3px', lineHeight: '1.2' }}>
          Building the Future Through Strategic Investment & Integrated Development
        </h1>
        <p style={{ maxWidth: '750px', margin: '0 auto 40px auto', color: '#bbb', fontSize: '16px', lineHeight: '1.8' }}>
          VARCHITECT GROUP is a diversified investment and integrated business development company committed to creating sustainable value across strategic industries. Through investment, business planning, architecture, engineering, construction, manufacturing, and operational excellence, we transform opportunities into resilient businesses that drive long-term growth, foster innovation, and create shared prosperity for investors, partners, and communities.
        </p>
        <a href="#contact" style={{ backgroundColor: colors.gold, color: colors.dark, padding: '15px 35px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', borderRadius: '0px', boxShadow: '0 4px 15px rgba(201, 169, 98, 0.2)' }}>
          Consultation
        </a>
      </section>

      {/* WHY CHOOSE US - VALUE PROPOSITION */}
      <section id="why-us" style={{ padding: '80px 8%', backgroundColor: '#222' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '400', letterSpacing: '2px' }}>Why Choose VARCHITECT GROUP?</h2>
          <div style={{ width: '60px', height: '2px', backgroundColor: colors.gold, margin: '15px auto' }}></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          <div style={{ padding: '25px', backgroundColor: colors.dark, borderLeft: `3px solid ${colors.gold}` }}>
            <h3 style={{ color: colors.gold, fontSize: '18px', margin: '0 0 10px 0' }}>Feasibility-Driven Investment</h3>
            <p style={{ color: '#aaa', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>Investment Backed by Data & Strategy

Every investment opportunity is supported by comprehensive feasibility studies, market analysis, financial modeling, and risk assessment to enable informed investment decisions and sustainable long-term value creation.</p>
          </div>
          <div style={{ padding: '25px', backgroundColor: colors.dark, borderLeft: `3px solid ${colors.gold}` }}>
            <h3 style={{ color: colors.gold, fontSize: '18px', margin: '0 0 10px 0' }}>End-to-End Business Ecosystem</h3>
            <p style={{ color: '#aaa', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>One Integrated Business Ecosystem

From investment planning, architecture, engineering, construction, manufacturing, operations, and business expansion, VARCHITECT GROUP delivers integrated solutions across the entire value chain..</p>
          </div>
          <div style={{ padding: '25px', backgroundColor: colors.dark, borderLeft: `3px solid ${colors.gold}` }}>
            <h3 style={{ color: colors.gold, fontSize: '18px', margin: '0 0 10px 0' }}>Multi-Industry Expertise</h3>
            <p style={{ color: '#aaa', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>Diversified Strategic Portfolio

We develop high-value projects across Energy, Agriculture & Food Security, Construction, Hospitality, Food & Beverage, Sports & Wellness, Tourism, Manufacturing, and Business Innovation..</p>
          </div>
        </div>
      </section>

      {/* CURATED COLLECTION COMPONENT */}
      <section id="collection" style={{ padding: '80px 8%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '50px', flexWrap: 'wrap', gap: '25px' }}>
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: '400', letterSpacing: '2px', margin: 0 }}>Discover a diversified portfolio of high-potential businesses across Energy, Agriculture, Construction, Food & Beverage, Hospitality, Sports, Tourism, Manufacturing, and Business Innovation—designed to create sustainable value through strategic partnerships and integrated development.</h2>
            <p style={{ color: '#888', margin: '10px 0 0 0', fontSize: '14px' }}>8 Strategic Business Sectors
Diversified Investment Opportunities Across High-Growth Industries.</p>
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
                <p style={{ textTransform: 'uppercase', fontSize: '11px', color: '#666', letterSpacing: '1px', margin: 0 }}>Premium Business Model</p>
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
                    <span style={{ color: '#666' }}>Target Annual Return:</span>
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
          <p style={{ color: '#666', fontSize: '14px', margin: '5px 0 0 0' }}>Building a Fully Integrated Business Ecosystem from Upstream to Downstream</p>
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
            <h4 style={{ color: colors.gold, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>VARCHITECT GROUP</h4>
            <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.6' }}>
              One Ecosystem. Endless Opportunities.

Connecting investment, innovation, architecture, engineering, construction, manufacturing, hospitality, and operations into one integrated business ecosystem designed for sustainable growth..
            </p>
          </div>
          <div>
            <h4 style={{ color: colors.gold, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>Contact Information</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#aaa', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><strong>WhatsApp:</strong> +62 821 4777 7570</li>
              <li><strong>Email:</strong> kastemarchitecture@gmail.com</li>
              <li><strong>Office HQ:</strong> Semarang, Balikpapan, Jakarta</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: colors.gold, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>Service Area</h4>
            <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.6' }}>
              Building the Future Through Strategic Investment

VARCHITECT GROUP develops and manages high-value businesses across strategic industries through an integrated ecosystem that combines investment, business development, architecture, engineering, construction, manufacturing, operations, and innovation. We create sustainable enterprises designed to generate lasting value for investors, partners, and communities.
            </p>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid #222', paddingTop: '30px', textAlign: 'center', fontSize: '12px', color: '#555', letterSpacing: '1px' }}>
          &copy; 2026 VARCHITECT GROUP. All rights reserved. Premium Production Version 2.0.0.
        </div>
      </footer>

    </div>
  )
}

export default App
