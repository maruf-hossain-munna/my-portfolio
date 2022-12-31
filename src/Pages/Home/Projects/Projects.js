import React from 'react';

const Projects = () => {
    return (
        <div className='container mx-auto my-20'>
            <h2 className="text-3xl uppercase font-semibold text-center divider my-16"> Projects</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold">Bikroy Bazar</h2>
                        <h4 className='text-lg font-semibold '>It is an E-Commerce Website</h4>
                        <p> It's a reselling website, User divided by 3 parts like- Buyer, Seller, Admin.
                            Seller can add any sell post,
                            Buyer can Booked any products,
                            Admin can remove any buyer or seller.
                        </p>
                        <div className='flex justify-between my-4'>
                            <a href="https://github.com/maruf21hossain/bikroy-bazar-client" target="_blank">
                                <button className="btn btn-outline">Client Side</button>
                            </a>
                            <a href="https://github.com/maruf21hossain/bikroy-bazar-server" target="_blank">
                                <button className="btn btn-outline">Server Side</button>
                            </a>
                            <a href="https://bikroy-bazar-8754e.web.app" target="_blank">
                                <button className="btn btn-outline btn-primary">Live Website</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;