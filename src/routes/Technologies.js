import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import TechnologiesContent from '../components/TechnologiesContent';

const Technologies = () => {
    return (
        <div>
            <Navbar/>
            <HeroImg2 heading=" TECHNOLOGIES."/>
            <TechnologiesContent/>
            <Footer />
        </div>
    )
}

export default Technologies;