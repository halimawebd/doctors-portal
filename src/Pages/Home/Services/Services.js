import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';




const Services = () => {
    const servicesData = [
        {
            id:1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typessetting indust Ipsum',
            img:fluoride
        },
        {
            id:2,
            name: 'cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typessetting indust Ipsum',
            img:cavity
        },
        {
            id:1,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typessetting indust Ipsum',
            img:whitening
        },
    ]
    return (
      <div className='mt-16'>
        <div className='text-center'>
        <h3 className='text-xl font-bold text-primary uppercase'>Our Service</h3>
        <h2 className='text-3xl'>Services We Provide</h2>
        </div>
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
            servicesData.map(service =><Service
             key={service.id}
                service={service}
            ></Service>
               
           
          
            )
        }
        </div>
      </div>
    );
};

export default Services;