import { useState } from 'react'
import './App.css'
import TraceViewer from './components/TraceViewer'
import About from './components/About'

function App() {
  const [currentView, setCurrentView] = useState<'demo' | 'about'>('demo')

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="logo">AgentLens</h1>
        <nav className="nav">
          <button 
            className={currentView === 'demo' ? 'nav-link active' : 'nav-link'}
            onClick={() => setCurrentView('demo')}
          >
            Demo
          </button>
          <button 
            className={currentView === 'about' ? 'nav-link active' : 'nav-link'}
            onClick={() => setCurrentView('about')}
          >
            About
          </button>
        </nav>
      </header>
      
      <main className="app-main">
        {currentView === 'demo' ? <TraceViewer /> : <About />}
      </main>
    </div>
  )
}

export default App
