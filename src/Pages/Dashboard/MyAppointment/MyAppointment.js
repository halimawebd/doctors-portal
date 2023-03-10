import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyAppointment = () => {
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings =[] } = useQuery({
      queryKey:['bookings', user?.email],
      queryFn: async () =>{
        const res = await fetch(url, {
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        });
        const data = await res.json();
        return data;
      }
    })
    console.log(bookings)
    return (
        <div>
            <h3 className="text-3xl">My Appointments</h3>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Treatment</th>
        <th>Date</th>
        <th>Time</th>
        <th>Payment</th>
      </tr> 
    </thead>
    <tbody>
      {
        
        bookings?.length && bookings?.map((bookings, i) =><tr key={bookings._id}>
          <th>{i+1}</th>
           <td>{bookings.patient}</td>
          <td>{bookings.treatment}</td>
          <td>{bookings.appoinmentDate}</td>
          <td>{bookings.slot}</td>
          <td>
            {
             bookings?.price && !bookings?.paid && <Link 
             to={`/dashboard/payment/${bookings._id}`}
             >
             <button 
             className='btn btn-primary btn-sm'
             >Pay</button> 
             </Link>
            }
            {
              bookings?.price && bookings?.paid && <div className='text-primary'>Paid</div>
            }
          
          </td>
        </tr>)
      }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;