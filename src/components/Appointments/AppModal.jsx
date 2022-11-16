import { format } from 'date-fns';
import React from 'react';

const AppModal = ({ service, selectedDate, setService }) => {
    const { name, slots } = service;
    const date = format(selectedDate, 'PP')

    const handleModal = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.fullName.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const booking = {
            appointmentDate: date,
            treatmentName: name,
            patentName: name,
            slot,
            email,
            phone
        }
        // TODO: send data to the server. and once data is saved then close the modal and display success toast.
        console.log(booking);
        setService(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className='mb-8'>
                        <h3 className="font-bold text-lg">{name}</h3>
                    </div>

                    <form onSubmit={handleModal} className="space-y-6 ng-untouched ng-pristine ng-valid">
                        <div>
                            <input id="name" type="text" disabled defaultValue={date} className="w-full p-3 rounded-md border" />
                        </div>
                        <div>
                            <select name="slot" className="select select-accent w-full p-3 rounded-md border">
                                {
                                    slots.map((slot, idx) => <option value={slot} key={idx}>{slot}</option>)
                                }
                            </select>
                        </div>
                        <div>
                            <input required name="fullName" type="text" placeholder="Full Name" className="w-full p-3 rounded-md border input-primary" />
                        </div>
                        <div>
                            <input required name="phone" type="text" placeholder='Phone Number' className="w-full p-3 rounded-md border input-primary" />
                        </div>
                        <div>
                            <input name="email" type="email" placeholder='Email' className="w-full p-3 rounded-md border input-primary" />
                        </div>
                        <div className="modal-action">
                            <label htmlFor="booking-modal" className="btn btn-error text-white">Cancel</label>
                            <button type="submit" htmlFor="booking-modal" className="btn btn-primary text-white">Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    );
};

export default AppModal;
