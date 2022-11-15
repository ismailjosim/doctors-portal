import React from 'react';

const AppModal = ({ service }) => {
    const { name } = service
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">{name}</h3>
                    <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn btn-error text-white">Cancel</label>
                        <label htmlFor="booking-modal" className="btn btn-primary text-white">Submit</label>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AppModal;
