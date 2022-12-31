import React from 'react';
import Contact from '../../Contact/Contact';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';
import TopHomeBanner from '../TopHomeBanner/TopHomeBanner';

const Home = () => {
    return (
        <div className=''>
            <TopHomeBanner></TopHomeBanner>
            <Skill></Skill>
            <Projects></Projects>
            <AboutMe></AboutMe>
            <Contact></Contact>
        </div>
    );
};

export default Home;