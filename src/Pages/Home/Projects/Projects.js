import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DisplayProjects from './DisplayProjects';
import './projects.css';
import github from '../../../Assests/Icons/github.png'
import liveLink from '../../../Assests/Icons/liveLink.png'

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('Projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div id='projects' className='container mx-auto my-20'>
            <h2 className="lg:text-5xl text-3xl text-pink-600 font-semibold text-center font-serif lg:mt-10 mt-0 mb-8"> Projects</h2>

            <div class="lg:mx-0 mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                <div class=" portfolio-box potfolio-box-1 rounded-2xl">
                    <div className='title-div w-full h-full flex justify-center items-center backdrop-brightness-75'>
                        <div>
                            <h2 className='title font-semibold lg:text-2xl text-xl'> bikroy Bazar Website</h2>
                            <div className='flex gap-6 justify-center mt-3'>
                                <a href="">
                                    <img className='h-10 w-10 rounded-full' src={github} alt="" />
                                </a>
                                <a href="">
                                    <img className='h-10 w-10 rounded-full' src={liveLink} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class=" portfolio-box potfolio-box-2 rounded-2xl">
                    <div className='title-div w-full h-full flex justify-center items-center backdrop-brightness-75'>
                        <div>
                            <h2 className='title font-semibold lg:text-2xl text-xl'> Learn Confidently</h2>
                            <div className='flex gap-6 justify-center mt-3'>
                                <a href="">
                                    <img className='h-10 w-10 rounded-full' src={github} alt="" />
                                </a>
                                <a href="">
                                    <img className='h-10 w-10 rounded-full' src={liveLink} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class=" portfolio-box potfolio-box-1 rounded-2xl">
                    <div className='title-div w-full h-full flex justify-center items-center backdrop-brightness-75'>
                        <div>
                            <h2 className='title font-semibold lg:text-2xl text-xl'> bikroy Bazar Website</h2>
                            <div className='flex gap-6 justify-center mt-3'>
                                <a href="">
                                    <img className='h-10 w-10 rounded-full' src={github} alt="" />
                                </a>
                                <a href="">
                                    <img className='h-10 w-10 rounded-full' src={liveLink} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* <div>
                {
                    projects.map( project => <DisplayProjects
                        key={project.id}
                        project ={project}
                    ></DisplayProjects>)
                }
            </div> */}

        </div>
    );
};

export default Projects;