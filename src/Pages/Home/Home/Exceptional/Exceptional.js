import React from 'react';
import treatment from '../../../../assets/images/treatment.png'
import Exceptionals from './Exceptionals';

const Exceptional = () => {
    const ExceptionalData = [
        {
            id: 1, 
            name: 'Exceptional Dental Care, on Your Terms',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page',
            img:treatment,
           
        },
    ]
    console.log(ExceptionalData);

    return (
        <div className='mt-16'>
            {
                 ExceptionalData.map(exceptionals =><Exceptionals
                    key={exceptionals.id}
                    exceptionals={exceptionals}
                 ></Exceptionals>)
            }
        </div>
    );
};

export default Exceptional;