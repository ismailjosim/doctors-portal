import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppOption from './AppOption';
import AppModal from './AppModal';

const AppointmentAvailable = ({ selectedDate }) => {
    const [appOptions, setAppOptions] = useState([]);
    const [service, setService] = useState(null)

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppOptions(data))

    }, [])




    return (
        <section className='my-28'>
            <h2 className='text-xl text-primary font-medium text-center mt-5 mb-10'>Available Appointments on {format(selectedDate, 'PP')}</h2>
            <div className='lg:w-9/12 w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>{
                appOptions.map(
                    option => <AppOption
                        key={option._id}
                        option={option}
                        setService={setService}
                    >
                    </AppOption>
                )
            }
            </div>
            {service &&
                <AppModal service={service}></AppModal>
            }
        </section>
    );
};

export default AppointmentAvailable;
