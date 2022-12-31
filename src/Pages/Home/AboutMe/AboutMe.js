import React from 'react';
import myImg from '../../../Assests/Images/image-1.jpg';

const AboutMe = () => {
    return (
        <div className='container mx-auto'>
            <h2 className="text-3xl font-semibold text-center uppercase divider">
                About me
            </h2>

            <div className="hero py-12">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2'>
                        <img src={myImg} alt=''
                         className="max-w-sm mx-auto rounded-lg shadow-xl" />
                    </div>
                    <div className='lg:w-1/2 lg:mt-0 mt-10'>
                        <h1 className="lg:text-4xl text-2xl mb-2 font-bold"> I'm Maruf Hossain Munna </h1>
                        <p className='text-xl font-semibold'>From <span className='text-blue-700'>Noakhali, Bangladesh</span></p>
                        <p className="text-xl py-5">
                            I'm currently working with MERN Stack Development.
                            I have been working with Javascript & it's library React js for 8 months.
                            I have also a little knowledge with node js, Express js, jwt, mongodb for backend development.
                            And also I'm expert in create a responsive web application by Raw css & it's two frameworks(tailwind & bootstrap).
                            <br /> <br />
                            I'm a Medical student, But my dream is become a Senior MERN Stack Developer. I want to build my career through it.
                            I'm very  dedicated & panctual for my work & I'm also a quick learner.
                            I can explore a new technology by reading their documentation.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;