import React from 'react';

const Exceptionals = ({exceptionals}) => {
    // console.log(exceptionals)
    const {name, description, img} = exceptionals;
    return (
        <div>
          <div className="card card-side bg-base-100 shadow-xl">
  <figure className='px-10 pt-10'>
    <img src={img} alt="Movie"/>
    </figure>
  <div className="card-body justify-center">
    <h2 className="card-title">{name}</h2>
    <p className='flex-grow-0'>{description}</p>
    
      <div>
      <button className="btn btn-primary w-fit">Watch</button>
      </div>
    </div>
  </div>
</div>
        
    );
};

export default Exceptionals;