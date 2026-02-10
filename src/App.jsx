import './App.css'
import { NavBar, Footer } from './components/Layout'
import { Hero, AboutSection, ProjectsSection, BlogSection, ContactSection } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-base-200  flex flex-col">
      <NavBar />

      <main className="flex-1">
        
        <ContactSection />
        <AboutSection />
        <ProjectsSection />
        <BlogSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
