import React from 'react';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';
import TopHomeBanner from '../TopHomeBanner/TopHomeBanner';

const Home = () => {
    return (
        <div>
            <TopHomeBanner></TopHomeBanner>
            <Skill></Skill>
            <Projects></Projects>
        </div>
    );
};

export default Home;