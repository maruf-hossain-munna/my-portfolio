import React from 'react';
import bannerImg from '../../../Assests/Images/passportSize-2.jpg';

const TopHomeBanner = () => {
    return (
        <div>

            <div className="hero lg:px-56 py-32">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-3/4 rounded-full'>
                        <img src={bannerImg} alt='' className=" rounded-full shadow-xl" />
                    </div>
                    <div className='lg:px-16'>
                        <h1 className="text-4xl font-bold">Maruf Hossain Munna</h1>
                        <h4 className='text-2xl font-semibold'>Web Developer</h4>
                        <p className="py-6 text-xl ">I am a Front End Developer with knowledge of different Web development technologies seeking
                            a position in an organization where I can use my skills to the company's advantage while having
                            the scope to develop my own skills.
                        </p>
                        <div className=''>
                            <a href="Front-end-resume-single.pdf" download="Maruf's Resume" >
                                <button className="btn btn-outline btn-primary rounded-full px-8 lg:mr-16 ">Download Resume</button>
                            </a>
                            <button className="btn btn-outline btn-dark rounded-full px-8 ml-6">Contact</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default TopHomeBanner;