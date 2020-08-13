import React, { ReactElement } from 'react';
import HomeBackground from '../svgs/HomeBackground';

const Home = (): ReactElement => (
    <div className="home">
        <div className="home__title-container">
            <svg className="home__accent-line" height="100" width="700">
                <line x1="0" y1="0" x2="800" y2="0" />
            </svg>
            <h1 className="home__title">The Antique House</h1>
        </div>
        <HomeBackground className="home__background-furniture" />
    </div>
);

export default Home;
