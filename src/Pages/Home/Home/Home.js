import React from 'react';
import ContactWithMe from '../../Contact/ContactWithMe';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import ProgressBarWithTooltip from '../Skill/ProgressBar';
import Skill from '../Skill/Skill';
import TopHomeBanner from '../TopHomeBanner/TopHomeBanner';
import WhatIDo from '../WhatIDo/WhatIDo';

const Home = () => {
    return (
        <div className='text-white'>
            <TopHomeBanner></TopHomeBanner>
            <WhatIDo></WhatIDo>
            <Projects></Projects>
            <Skill></Skill>
            <AboutMe></AboutMe>
            <ContactWithMe></ContactWithMe>
        </div>
    );
};

export default Home;