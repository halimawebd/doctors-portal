
import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import bg from '../../../assets/images/bg.png'



const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
  console.log(selectedDate);
    return (
        <header className='my-6'
        style={{
          background:`url(${bg.png})`
          }}
        >
            <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} alt="dentist chair"className="max-w-sm  rounded-lg shadow-2xl" />
    <div className='mr-6'>
    <DayPicker
    mode='single'
    selected={selectedDate}
    onSelect={setSelectedDate}
    />
   
    </div>
  </div>
</div>
        </header>
    );
};

export default AppointmentBanner;