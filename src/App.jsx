import React, { useEffect } from 'react'
import './App.css'
import Home from './sections/Home/Home'
import About from './sections/About/About'
import Certificates from './sections/Certificates/Certificates'
import Projects from './sections/Projects/Projects'
import Footer from './components/Footer/Footer'
import "aos/dist/aos.css";
import AOS from "aos";
import Experience from './sections/Experience/Experience'

const App = () => {
    useEffect(() => {
        AOS.init({
            once: false,
        });
    });
    return (
        <div className='app'>
            <div data-aos="fade-down" data-aos-duration="800" className="HomeSection">
                <Home />
            </div>

            <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="200" className="AboutSection">
                <About />
            </div>

            <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="200" className="AboutSection">
                <Experience />
            </div>

            <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="200" className="CerSection">
                <Certificates />
            </div>

            <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="200" className='ProjectSection'>
                <Projects />
            </div>
            <Footer />
        </div>
    )
}

export default App
