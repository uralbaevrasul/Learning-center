import { createRoot } from 'react-dom/client'
import './index.css'
import "./i18n"
import Navbar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import Result from './components/results.jsx'
import Courses from './components/courses.jsx'
import Prices from './components/prices.jsx'
import Statistics from './components/statistik.jsx'
import Footer from './components/footer.jsx'
createRoot(document.getElementById('root')).render(
  <main className="bg-orange-50 min-h-screen font-sans selection:bg-orange-200 selection:text-orange-900">
    <Navbar />
    <Hero />
    <Courses />
    <Result />
    <Prices />
    <Statistics />
    <Footer />
  </main>
)
