import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DisplaySkills from './DisplaySkills';

const WhatIDo = () => {
    const [skills, setSkills] = useState([])
    useEffect(() => {
        fetch('CanDo.json')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])

    // console.log(skills)
    return (
        <div className='container mx-auto mb-12'>
            <h2 className="lg:text-5xl text-3xl text-pink-600 font-semibold text-center font-serif lg:mt-10 mb-8"> What I Do</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
                {
                    skills.map(skill => <DisplaySkills
                        key={skill.id}
                        skill={skill}
                    ></DisplaySkills>)
                }
            </div>
        </div>
    );
};

export default WhatIDo;