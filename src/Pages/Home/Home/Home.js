import React from 'react';
import TopHomeBanner from '../TopHomeBanner/TopHomeBanner';
import DownloadResume from './DownloadResume';

const Home = () => {
    return (
        <div>
            <TopHomeBanner></TopHomeBanner>
            <h2>This is home page</h2>
            <DownloadResume></DownloadResume>
        </div>
    );
};

export default Home;