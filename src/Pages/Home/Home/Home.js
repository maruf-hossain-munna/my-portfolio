import React from 'react';
import Contact from '../../Contact/Contact';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';
import TopHomeBanner from '../TopHomeBanner/TopHomeBanner';

const Home = () => {
    return (
        <div>
            <TopHomeBanner></TopHomeBanner>
            <Skill></Skill>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;