import Hero from "../src/hero/Hero";
import Navbar from "../src/Navbar/Navbar";
import Features from "../src/hero/Features"
import Power from "../src/hero/Power";
import Experience from "../src/hero/Experience"
import Footer from "../src/Footer/Footer.jsx"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Power />
      <Experience />
      <Footer />
      
    </div>
  )
}

export default App;