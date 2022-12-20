import React from 'react';
import appoinment from '../../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section className='mt-16'
        
        style={{
            background:`url(${appoinment})`
            }}>
          
           <div className='text-center'>
        <h3 className='text-xl font-bold text-primary uppercase'>Contact Us</h3>
        <h2 className='hero text-white'>Stay connected with us</h2>
        </div>
        <div className="hero-content flex-col lg:flex-row-reverse">
         
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                
                <input type="text" placeholder="email address" className="input input-bordered" />
              </div>
              <div className="form-control">
               <input type="text" placeholder="submit" className="input input-bordered" />
                </div>
              <div className="form-control">
               <input type="text" placeholder="Your message" className="input input-bordered" />
                </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Contact;