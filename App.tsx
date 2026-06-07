import React from 'react'

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh', 
      fontFamily: 'sans-serif',
      backgroundColor: '#111',
      color: '#fff',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>Adityarch Studio</h1>
      <p style={{ color: '#aaa', fontSize: '18px' }}>Architecture & Interior Design Portfolio</p>
      <hr style={{ width: '50px', borderColor: '#555', margin: '20px 0' }} />
      <p style={{ color: '#666', fontSize: '14px' }}>Website is under maintenance. Shifting components to root directory.</p>
    </div>
  )
}

export default App
