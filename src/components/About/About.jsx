import React from 'react';
import SectionHeading from '../Shared/SectionHeading';
import History from './AboutSections/History';
import PageHeader from './AboutSections/PageHeader';
const About = () => {

    return (
        <div>
            <PageHeader />
            <div className='my-10 w-11/12 mx-auto'>

                <History />
            </div>
        </div>
    );
};

export default About;
