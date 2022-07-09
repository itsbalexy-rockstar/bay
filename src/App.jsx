import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Social from "./components/Social"
import Services from "./components/Services"
import './ui/classes/classes.css'
import Experience from "./components/Experience"
import Circle from "./components/Circle"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="w-full">
     <Navbar />
     <Hero />
     <Social />
     <Experience />
     <Services />
     <Circle />
     <Contact />
     <Footer />
    </div>
  )
}

export default App
