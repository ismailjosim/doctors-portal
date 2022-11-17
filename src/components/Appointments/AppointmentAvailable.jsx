import React, { useState } from 'react';
import { format } from 'date-fns';
import AppOption from './AppOption';
import AppModal from './AppModal';
import { useQuery } from '@tanstack/react-query';

const AppointmentAvailable = ({ selectedDate }) => {

    const [service, setService] = useState(null)

    const { data: appOptions = [] } = useQuery({
        queryKey: ['appOptions'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appOptions');
            const data = await res.json();
            return data.options;
        }
    })



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
                <AppModal
                    service={service}
                    selectedDate={selectedDate}
                    setService={setService}
                ></AppModal>
            }
        </section>
    );
};

export default AppointmentAvailable;
