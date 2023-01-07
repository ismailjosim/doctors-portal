import React from 'react';
import SectionHeading from '../../Shared/SectionHeading';
import { TiTick } from "react-icons/ti";
const Advantages = () => {
    const heading = {
        primary: "ADVANTAGES", secondary: "Why Choose Us?"
    }
    const specialty = [
        "24 Hour Emergency Service",
        "50+ Years of Combined Experience",
        "Invitation Premier Provider",
        "Offering Sedation Services",
        "Work with Most Insurance Plans",
        "Flexible Payment Options"
    ]

    return (
        <div className='bg-slate-200 py-20'>
            <SectionHeading heading={heading} ></SectionHeading>
            <div className='flex lg:flex-row flex-col gap-10 md:gap-5 lg:gap-20 w-11/12 mx-auto'>
                <div className='w-full lg:w-1/2 md:w-1/2'>slider</div>
                <div className='w-full lg:w-1/2 md:w-1/2'>
                    <p className='w-9/12'>Our dental clinic is a modern and comfortable facility, with a professional dental team who will take time to listen to your concerns, desired outcomes, and provide you with high quality dental care.
                    </p>
                    <ul className="my-10">
                        {
                            specialty.map((feature, idx) => {
                                return <li key={idx} className="flex items-center gap-2 mb-2">
                                    <TiTick className='text-primary text-lg' />
                                    <span>{feature}</span>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Advantages;
