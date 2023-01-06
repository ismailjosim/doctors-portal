import React from 'react';
import Contact from '../Contact Us/Contact';
import CallToAction from './CallToAction';
import Featured from './Featured';
import Gallery from './Gallery';
import Hero from './Hero';
import HomeAppointment from './HomeAppointment';
import HomeServices from './HomeServices';
import Testimonials from './Testimonials';

const Home = () => {



    return (
        <section>
            <Hero />
            <CallToAction />
            <HomeServices />
            <Featured />
            <HomeAppointment />
            <Gallery />
            <Testimonials />
            <Contact />
        </section>
    );
};

export default Home;


