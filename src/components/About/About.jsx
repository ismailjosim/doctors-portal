import React from 'react';
import Advantages from './AboutSections/Advantages';
import History from './AboutSections/History';
import PageHeader from './AboutSections/PageHeader';
const About = () => {

    return (
        <div>
            <PageHeader />
            <History />
            <Advantages />
        </div>
    );
};

export default About;
