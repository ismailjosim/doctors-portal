import React from 'react';
import CallToAction from './CallToAction';
import Featured from './Featured';
import Hero from './Hero';
import HomeAppointment from './HomeAppointment';
import HomeServices from './HomeServices';

const Home = () => {



    return (
        <section>
            <Hero />
            <CallToAction />
            <HomeServices />
            <Featured />
            <HomeAppointment />
        </section>
    );
};

export default Home;


