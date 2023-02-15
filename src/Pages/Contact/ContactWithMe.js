import React from 'react';
import email from '../../Assests/Icons/Social/email.png';
import facebook from '../../Assests/Icons/Social/facebook.png';
import github from '../../Assests/Icons/Social/github.png';
import linkedin from '../../Assests/Icons/Social/linkedin.png';
import phone from '../../Assests/Icons/Social/phone.png';
import location from '../../Assests/Icons/Social/location.png';

const ContactWithMe = () => {
    return (
        <div id='contact' className='container mx-auto my-12 lg:px-0 px-4'>
            <h2 className="lg:text-5xl text-3xl text-pink-600 font-semibold text-center font-serif mb-12">Contact With Me </h2>

            <div className='lg:flex'>

                <div className='px-6 py-8 bg-white text-black rounded-xl lg:mt-0 mt-10'>
                    <h2 className="text-3xl font-bold mb-6">Contact Info</h2>

                    <div className='flex items-center'>
                        <div className='mr-4'>
                            <img className='w-16 rounded-full p-2' src={location} alt="" />
                        </div>
                        <div>
                            <h4 className="lg:text-2xl text-xl font-bold">Location</h4>
                            <p className='lg:text-xl text-lg font-semibold'> Noakhali, Bangladesh</p>
                        </div>
                    </div>

                    <div className='flex items-center my-6'>
                        <div className='mr-4'>
                            <img className='w-24 rounded-full' src={email} alt="" />
                        </div>
                        <div>
                            <h4 className="lg:text-2xl text-xl font-bold">Email</h4>
                            <p className='lg:text-xl text-lg font-semibold'> marufhossainmunna21@gmail.com </p>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div className='mr-4'>
                            <img className='w-16 rounded-full p-2' src={phone} alt="" />
                        </div>
                        <div>
                            <h4 className="lg:text-2xl text-xl font-bold">Phone Number</h4>
                            <p className='lg:text-xl text-lg font-semibold'>+8801810315067</p>
                        </div>
                    </div>

                    <h4 className="text-2xl font-bold mt-10">Follow More</h4>
                    <div className='flex items-center mt-2'>
                        <a href="https://web.facebook.com/maruf.hossain.munna01/">
                            <img className='w-10' src={facebook} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/maruf-hossain-munna/">
                            <img className='w-10 mx-6' src={linkedin} alt="" />
                        </a>
                        <a href="https://github.com/maruf-hossain-munna">
                            <img className='w-10' src={github} alt="" />
                        </a>
                    </div>
                </div>


                <div className='lg:w-2/3 lg:ml-12'>
                    <h2 className='lg:text-4xl text-3xl font-bold my-4'>Send A Message</h2>
                    <p className="text-xl mb-8">Hi, thanks for contacting us. We've received your message and appreciate you reaching out.</p>

                    <div>
                        <form >
                            <div className='grid lg:grid-cols-2 gap-6 grid-cols-1'>
                                <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
                                <input type="email" placeholder="Your Email Address" className="input input-bordered w-full" />
                                <input type="number" placeholder="Your Phone Number" className="input input-bordered w-full" />
                                <input type="text" placeholder="Subject" className="input input-bordered w-full" />
                            </div>
                            <textarea className="textarea w-full textarea-bordered my-6" placeholder="Message"></textarea>
                            <input type="submit"
                                className='btn bg-white hover:bg-transparent text-black hover:text-white border-2 border-black hover:border-white w-full'
                                value="Submit" />
                        </form>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ContactWithMe;