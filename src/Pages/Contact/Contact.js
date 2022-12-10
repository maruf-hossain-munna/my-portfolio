import React from 'react';

const Contact = () => {
    return (
        <div className='container mx-auto mt-32'>
            <h2 className="text-3xl font-semibold text-center uppercase divider">
                Contact With me
            </h2>

            <div className=' mt-16 lg:flex'>
                <div className='lg:w-1/3 '>
                    <div>
                        <h3 className="text-xl font-semibold">Noakhali, Bangladesh</h3>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">+8801810315067</h3>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">marufhossainmunna21@gmail.com</h3>
                    </div>
                </div>

                <div className='lg:mx-36'>
                    <h3 className="text-2xl font-semibold mb-8 text-center">How Can I Help You?</h3>

                    <form action="" className=''>
                        <input type="text" placeholder=" Full Name" className="input input-bordered w-full mb-5" />
                        <input type="email" placeholder=" Email Address" className="input input-bordered w-full mb-5" />
                        <input type="text" placeholder="Subject" className="input input-bordered w-full mb-5" />
                        <textarea className="textarea textarea-bordered w-full" placeholder="Message"></textarea>
                        <input type="submit" value="Send Message" className='btn btn-outline btn-primary rounded-full px-16 mt-4' />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contact;