import React from 'react';
import gmail from '../../Assests/Icons/Gmail-logo.png';
import location from '../../Assests/Icons/location-3.png';
import phone from '../../Assests/Icons/phone.png';
import linkedin from '../../Assests/Icons/linkedin.png';
import facebook from '../../Assests/Icons/facebook.png';
import github from '../../Assests/Icons/github.png';
import instagram from '../../Assests/Icons/instagram.png';

const Contact = () => {
    return (
        <div className='container mx-auto '>
            <h2 className="text-3xl font-semibold text-center uppercase divider">
                Contact With me
            </h2>

            <div className=' mt-16 lg:flex'>
                <div className='lg:w-1/2 mb-16 lg:mr-36'>
                    <div className='flex items-center mb-6'>
                        <div className='w-8 mr-6'>
                            <img src={location} alt="" />
                        </div>
                        <h3 className="text-xl font-semibold">Noakhali, Bangladesh</h3>
                    </div>
                    <div className='flex items-center mb-6'>
                        <div className='w-8 mr-6'>
                            <img src={phone} alt="" />
                        </div>
                        <h3 className="text-xl font-semibold">+8801810315067</h3>
                    </div>
                    <div className='flex items-center mb-6'>
                        <div className='w-12 mr-6'>
                            <img src={gmail} alt="" />
                        </div>
                        <h3 className="text-xl font-semibold">marufhossainmunna21@gmail.com</h3>
                    </div>

                    <h3 className="text-xl font-semibold mt-20 text-center mb-6 divider"> Follow More</h3>

                    <div className='grid grid-cols-4 gap-2 w-3/4 mx-auto'>
                        <a href="https://www.linkedin.com/in/maruf-hossain-munna/">
                            <img className='w-8' src={linkedin} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/maruf-hossain-munna/">
                            <img className='w-10' src={github} alt="" />
                        </a>
                        <a href="https://web.facebook.com/maruf.hossain.munna01">
                            <img className='w-8' src={facebook} alt="" />
                        </a>
                        <a href="https://instagram.com/maruf__hossain__munna">
                            <img className='w-8' src={instagram} alt="" />
                        </a>
                    </div>
                </div>

                <div className='lg:w-1/2'>
                    <h3 className="text-2xl font-semibold mb-8 text-center">How Can I Help You?</h3>

                    <form action="" className=''>
                        <input type="text" placeholder=" Full Name" className="input input-bordered w-full mb-5" />
                        <input type="email" placeholder=" Email Address" className="input input-bordered w-full mb-5" />
                        <input type="text" placeholder="Subject" className="input input-bordered w-full mb-5" />
                        <textarea className="textarea textarea-bordered w-full" placeholder="Message"></textarea>
                        <input type="submit" value="Send Message" 
                          className='btn btn-outline btn-primary w-full  rounded-full px-16 mt-4'
                         />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contact;