import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import CtaCard from './CtaCard';
const CallToAction = () => {

    const ctaData = [
        {
            id: 1,
            heading: "Opening Hours",
            bodyText: 'Lorem Ipsum is simply dummy text of the pri',
            bg: 'bg-gradient-to-r from-[#19D3AE -38.67%] to-[ #0FCFEC 129.78%]',
            img: clock
        },
        {
            id: 1, heading: "Visit our location", bodyText: 'Brooklyn, NY 10036, United States', bg: '#3A4256', img: marker
        }
        ,
        {
            id: 1, heading: "Opening Hours", bodyText: 'Lorem Ipsum is simply dummy text of the pri', bg: 'bg-gradient-to-r from-[#19D3AE -38.67%] to-[ #0FCFEC 129.78%],', img: phone
        }
    ]


    return (
        <div>
            {
                ctaData.map(data => <CtaCard key={data.id} data={data}></CtaCard>)
            }
        </div>
    );
};

export default CallToAction;
