import React, { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState('all')

  const projects = [
    { id: 1, title: 'Modern Nature Residential', category: 'residential', desc: 'Sleman, Yogyakarta', size: '1500 m²' },
    { id: 2, title: 'Tenno Coffee & Eatery', category: 'commercial', desc: 'Standardized Modern Cafe Concept', size: 'Commercial Space' },
    { id: 3, title: 'The Sanca Eatery & Bakery', category: 'commercial', desc: 'Classic Modern Integration', size: 'Progress 100%' },
    { id: 4, title: 'Classic Modern Hotel Renovation', category: 'hospitality', desc: 'Facade & Interior Redesign', size: 'Premium Suites' },
    { id: 5, title: 'Ranting Coffeeshop', category: 'commercial', desc: 'Jepara Branch Project', size: 'Cozy Architectural Vibe' },
    { id: 6, title: 'Art Deco Inspired Pavilion', category: 'residential', desc: 'High-end Styling Details', size: 'Exclusive Residential' }
  ]

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab)

  return (
    <div style={{ 
      backgroundColor: '#0a0a0a', 
      color: '#f5f5f5', 
      fontFamily: '"Helvetica Neue", Arial, sans-serif', 
      minHeight: '100vh',
      margin: 0,
      padding: 0
    }}>
      {/* HEADER & NAV */}
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '30px 5%', 
        borderBottom: '1px solid #1a1a1a',
        letterSpacing: '1px'
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '20px', textTransform: 'uppercase', letterSpacing: '3px' }}>
          ADITYARCH STUDIO<span style={{ color: '#888' }}>.</span>
        </div>
        <nav style={{ display: 'flex', gap: '25px', fontSize: '14px', textTransform: 'uppercase' }}>
          <a href="#about" style={{ color: '#aaa', textDecoration: 'none' }}>About</a>
          <a href="#projects" style={{ color: '#aaa', textDecoration: 'none' }}>Projects</a>
          <a href="#contact" style={{ color: '#aaa', textDecoration: 'none' }}>Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section id="about" style={{ padding: '80px 5%', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '42px', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '20px' }}>
          Architecture & Interior Design
        </h1>
        <p style={{ color: '#888', fontSize: '16px', lineHeight: '1.8', letterSpacing: '0.5px' }}>
          We craft space with a meticulous balance of masculinity, smart functionality, and timeless aesthetics. 
          Specializing in High-End Residential, Japanese-Scandinavian (Japandi) harmony, Art Deco accents, 
          and highly functional Commercial spaces.
        </p>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="projects" style={{ padding: '40px 5% 80px 5%', borderTop: '1px solid #1a1a1a' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
          <h2 style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '20px', fontWeight: '400' }}>Selected Works</h2>
          
          {/* TABS FILTER */}
          <div style={{ display: 'flex', gap: '15px' }}>
            {['all', 'residential', 'commercial', 'hospitality'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeTab === tab ? '#fff' : '#555',
                  textTransform: 'uppercase',
                  fontSize: '12px',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  fontWeight: activeTab === tab ? 'bold' : 'normal',
                  padding: '5px 10px',
                  borderBottom: activeTab === tab ? '1px solid #fff' : '1px solid transparent',
                  transition: 'all 0.3s'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              style={{ 
                border: '1px solid #151515', 
                backgroundColor: '#0f0f0f', 
                padding: '30px', 
                borderRadius: '4px',
                transition: 'transform 0.2s',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'between'
              }}
            >
              <div>
                <span style={{ fontSize: '10px', textTransform: 'uppercase', color: '#555', letterSpacing: '2px', fontWeight: 'bold' }}>
                  {project.category}
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: '400', margin: '10px 0 5px 0', letterSpacing: '0.5px' }}>
                  {project.title}
                </h3>
                <p style={{ color: '#777', fontSize: '14px', margin: '0 0 20px 0' }}>
                  {project.desc}
                </p>
              </div>
              <div style={{ marginTop: 'auto', borderTop: '1px solid #1a1a1a', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#444' }}>
                <span>Scale / Status</span>
                <span style={{ color: '#aaa' }}>{project.size}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER & CONTACT */}
      <footer id="contact" style={{ 
        padding: '60px 5%', 
        backgroundColor: '#050505', 
        borderTop: '1px solid #1a1a1a',
        textAlign: 'center'
      }}>
        <h4 style={{ textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '15px', fontWeight: '400' }}>Inquiries & Collaboration</h4>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '30px' }}>Let's build standard-defining space together.</p>
        <a 
          href="mailto:contact@adityarch.studio" 
          style={{ 
            padding: '12px 30px', 
            border: '1px solid #333', 
            color: '#fff', 
            textDecoration: 'none', 
            fontSize: '13px', 
            textTransform: 'uppercase',
            letterSpacing: '2px',
            borderRadius: '2px',
            backgroundColor: '#0a0a0a'
          }}
        >
          Get In Touch
        </a>
        <div style={{ marginTop: '60px', color: '#333', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>
          &copy; 2026 Adityarch Studio. All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
