import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppoinmentOption from './AppoinmentOption';

const AvailableAppoinments = ({selectedDate}) => {
    const [appoinmentOptions, setAppointmentOptions] = useState([])
     const [treatment, setTreatment] = useState(null);


    useEffect( () =>{
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    },[])
    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Availeable Appoinments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appoinmentOptions.map(option => <AppoinmentOption
                    key={option._id}
                    appoinmentOption={option}
                    setTreatment={setTreatment}
                    ></AppoinmentOption>)
                }
            </div>
            {
            treatment &&
            <BookingModal
            selectedDate={selectedDate}
            treatment={treatment}
            setTreatment={setTreatment}
            ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppoinments;