import React from 'react';

const AppoinmentOption = ({ appointmentOptions, setTreatment, }) => {
    const {name, price, slots} = appointmentOptions;
    // console.log(appoinmentOptions)
    return (
        <div className="card shadow-xl">
        <div className="card-body text-center my-10">
          <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
          <p>{ slots.length > 0 ? slots[0] : 'Try Another day'}</p>
          <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
          <p><small>Price: ${price}</small></p>
          <div className="card-actions justify-center">
          <label
          disabled={slots.length === 0 }
          htmlFor="booking-modal" 
          className="btn btn-primary text-white"
          onClick={() => setTreatment( appointmentOptions)}
          >Book appoinment</label>
          </div>
        </div>
      </div>
    );
};

export default AppoinmentOption;