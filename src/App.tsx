import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageConsultancy from './components/ImageConsultancy';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
    return (
        <div className="min-h-screen bg-gold-100">
            <Navbar />
            <Hero />
            <ImageConsultancy />
            <Services />
            <Gallery />
            <About />
            <Testimonials />
            <FinalCTA />
            <Footer />
            <FloatingButtons />
        </div>
    );
}

export default App;
