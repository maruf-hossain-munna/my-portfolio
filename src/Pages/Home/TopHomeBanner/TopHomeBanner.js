import React from 'react';
import imageTwo from '../../../Assests/Images/image-2.jpg';
import { Typewriter } from 'react-simple-typewriter';
import '../TopHomeBanner/HomeBanner.css';


const TopHomeBanner = () => {
    return (
        <div>

            <div className="hero lg:px-40 lg:pb-32 lg:pt-48 pt-24 pb-16">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-full'>
                        <img src={imageTwo} alt='' className=" w-72 h-72 rounded-full shadow-xl" />
                    </div>
                    <div className='lg:px-16 mt-6 lg:mt-0'>
                        <h1 className="lg:text-5xl text-2xl font-bold">Maruf Hossain Munna</h1>
                        <h4 className='lg:text-3xl text-xl text-pink-600 font-bold'>
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

                        <p className="py-5 text-xl ">I am a Front End Developer with knowledge of different Web development technologies seeking
                            a position in an organization where I can use my skills to the company's advantage while having
                            the scope to develop my own skills.
                        </p>
                        <div className='lg:flex justify-between'>
                            <a href="Maruf Hossain Resume.pdf" download="Maruf's Resume" >
                                <button className="[word-spacing:3px] text-lg tracking-wider font-normal btn bg-pink-600 hover:bg-transparent text-white hover:border-2 hover:border-pink-600 rounded-full lg:px-8 w-full">
                                    Download Resume
                                </button>
                            </a>
                            <a href="https://www.fiverr.com/maruf_hossain21/develop-your-website-with-reactjs-and-nodejs" target='_blank'>
                                <button className="[word-spacing:3px] text-lg tracking-wider font-normal btn bg-transparent border-2 text-white border-pink-600 hover:bg-pink-600 hover:border-pink-600 rounded-full px-8 w-full lg:mt-0 mt-4">
                                    Order Now
                                </button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default TopHomeBanner;