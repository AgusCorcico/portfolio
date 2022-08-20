import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import Work from '../components/Work';
import AboutContent from '../components/AboutContent';
import TechnologiesContent from '../components/TechnologiesContent';




const Home = () => {
    return (
        <div>
            <Navbar/>
            <HeroImg/>
            <AboutContent/>
            <TechnologiesContent/>
            <Work/>
            <Footer />
        </div>
    )
}

export default Home