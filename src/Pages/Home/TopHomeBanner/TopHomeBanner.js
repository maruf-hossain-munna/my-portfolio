import React from 'react';
import imageTwo from '../../../Assests/Images/image-2.jpg';
import { Typewriter } from 'react-simple-typewriter';
import '../TopHomeBanner/HomeBanner.css';


const TopHomeBanner = () => {
    return (
        <div>

            <div className="hero lg:px-40 lg:py-24 pb-16">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-full'>
                        <img src={imageTwo} alt='' className=" w-72 h-72 rounded-full shadow-xl" />
                    </div>
                    <div className='lg:px-16'>
                        <h1 className="lg:text-4xl text-2xl font-bold">Maruf Hossain Munna</h1>
                        <h4 className='text-2xl text-blue-600 font-semibold'>
                            <Typewriter
                                words={['MERN Stack Developer', 'Front-end Developer', 'React js Developer']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            // onLoopDone={handleDone}
                            // onType={handleType}
                            />
                        </h4>

                        <p className="py-6 text-xl ">I am a Front End Developer with knowledge of different Web development technologies seeking
                            a position in an organization where I can use my skills to the company's advantage while having
                            the scope to develop my own skills.
                        </p>
                        <div className=''>
                            <a href="Front-end-resume-single.pdf" download="Maruf's Resume" >
                                <button className="text btn btn-outline btn-primary rounded-full lg:px-8 lg:mr-16 ">Download Resume</button>
                            </a>
                            <button className=" btn btn-outline btn-dark rounded-full px-8 ml-6">Contact</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default TopHomeBanner;