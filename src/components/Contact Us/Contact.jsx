import React from 'react';
import PageHeader from '../About/AboutSections/PageHeader';
import SectionHeading from './../Shared/SectionHeading';
import ContactInfo from './ContactSections/ContactInfo';


const Contact = () => {
    const heading = {
        primary: "HOW TO FIND US", secondary: "We are Here to Help You"
    }


    return (
        <div>
            <PageHeader title="contact us" ></PageHeader>
            <div className='mt-10'></div>
            <SectionHeading heading={heading}></SectionHeading>
            <ContactInfo />
        </div>
    );
};

export default Contact;
