import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';
const HomeServices = () => {

    const servicesData = [
        {
            id: 1,
            title: 'Fluoride Treatment',
            image: fluoride,
            description: 'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist.'
        },
        {
            id: 2,
            title: 'Cavity Filling',
            image: cavity,
            description: 'Cavities are permanently damaged areas in the hard surface of your teeth that develop into tiny openings or holes.'
        },
        {
            id: 3,
            title: 'Teeth Whitening',
            image: whitening,
            description: 'Tooth whitening or tooth bleaching is the process of lightening the color of human teeth.'
        }
    ]

    return (
        <div className='mb-24 w-11/12 mx-auto'>
            <div className='text-center mb-16'>
                <h4 className='text-accent font-bold text-xl'>OUR SERVICES</h4>
                <h2 className='text-secondary font-normal text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                {
                    servicesData.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default HomeServices;
