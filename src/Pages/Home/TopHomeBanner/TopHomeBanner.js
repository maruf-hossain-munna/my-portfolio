import React from 'react';
import TextAnimation from "react-text-animations";
import DownloadResume from '../Home/DownloadResume';

const TopHomeBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">

                        <div className='text-4xl font-bold'>
                            <TextAnimation.Slide target="Maruf Hossain" text={['Maruf Hossain', 'Front End Developer', 'React js Developer', 'MERN Stack Developer']}>
                                Hey There, I'm Maruf Hossain
                                {/* <h1 className="text-5xl font-bold">I'm Maruf Hossain</h1> */}
                            </TextAnimation.Slide>
                        </div>

                        <p className="py-6">I am a Front End Developer with knowledge of different Web development technologies seeking
                            a position in an organization where I can use my skills to the company's advantage while having
                            the scope to develop my own skills.</p>
                        <button  className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHomeBanner;