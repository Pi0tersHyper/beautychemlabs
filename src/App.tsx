import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Certifications from './components/Certifications';
import About from './components/About';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-white-50">
        <Navbar />
        <Hero />
        <Certifications />
        <About />
        <Products />
        <WhyUs />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
