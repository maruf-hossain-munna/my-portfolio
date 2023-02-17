import React from 'react';
import { Link } from 'react-router-dom';

const DisplaySkills = ({ skill }) => {
    const { title, logo, description } = skill;
    return (
        <div>
            <div className='p-5 shadow-2xl hover:border-y-2 hover:border-pink-600 h-60 rounded-xl do'>
                <img className='svg w-9 mb-4' src={logo} alt="" />
                <h2 className="lg:text-2xl text-xl font-semibold"> {title} </h2>
                <p className='mt-3 lg:mb-6 mb-3'>{description} </p>
                <Link className='text-pink-600 underline'> See Details </Link>
            </div>
        </div>
    );
};

export default DisplaySkills;