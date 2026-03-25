import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy-950">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
