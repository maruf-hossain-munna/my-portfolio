import React from 'react';

const Skill = () => {
    return (
        <div className='container mx-auto'>
            <h2 className="text-3xl font-semibold text-center divider uppercase mb-16">Professional Skill </h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-24">
                <div className='grid grid-cols-1 gap-4 p-6 lg:shadow-2xl shadow-lg rounded-2xl'>
                    <h2 className="text-2xl font-semibold text-center">
                        Front-end Development
                    </h2>
                    <div>
                        <div className='flex justify-between'>
                            <h4 className="text-2xl font-semibold">HTML5</h4>
                            <h6 className="text-lg text-blue-700">98%</h6>
                        </div>
                        <progress className="progress progress-primary w-full" value="98" max="100"></progress>
                    </div>
                    <div>
                        <h4 className="text-2xl font-semibold">CSS3</h4>
                        <progress className="progress progress-primary w-full" value="95" max="100"></progress>
                    </div>
                    <div>
                        <h4 className="text-2xl font-semibold">Tailwind</h4>
                        <progress className="progress progress-primary w-full" value="97" max="100"></progress>
                    </div>
                    <div>
                        <h4 className="text-2xl font-semibold">Bootstrap</h4>
                        <progress className="progress progress-primary w-full" value="94" max="100"></progress>
                    </div>
                    <div>
                        <h4 className="text-2xl font-semibold">Javascript</h4>
                        <progress className="progress progress-primary w-full" value="70" max="100"></progress>
                    </div>
                    <div>
                        <h4 className="text-2xl font-semibold">React Js </h4>
                        <progress className="progress progress-primary w-full" value="85" max="100"></progress>
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-4 p-6 lg:shadow-2xl shadow-lg rounded-2xl'>
                    <h2 className="text-2xl font-semibold  text-center">
                        Back-end Development
                    </h2>
                    <div>
                        <h4 className="text-2xl font-semibold">Node Js </h4>
                        <progress className="progress progress-primary w-full" value="55" max="100"></progress>
                    </div>
                    <div>
                        <h4 className="text-2xl font-semibold">Express Js </h4>
                        <progress className="progress progress-primary w-full" value="50" max="100"></progress>
                    </div>
                    <div>
                        <h4 className="text-2xl font-semibold">MongoDb </h4>
                        <progress className="progress progress-primary w-full" value="60" max="100"></progress>
                    </div>
                    <div>
                        <h4 className="text-2xl font-semibold">JWT</h4>
                        <progress className="progress progress-primary w-full" value="65" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;