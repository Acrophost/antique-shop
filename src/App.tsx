import React, { FunctionComponent, useState } from 'react';

import './styles/App.scss';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Sales from './components/Sale';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

import Antiques from './data/Antiques';

const App: FunctionComponent = () => {
    const [location, setLocation] = useState('/');
    const refs = {
        home: React.createRef<HTMLDivElement>(),
        about: React.createRef<HTMLDivElement>(),
        sales: React.createRef<HTMLDivElement>(),
        gallery: React.createRef<HTMLDivElement>(),
        contact: React.createRef<HTMLDivElement>(),
    };

    return (
        <div className="App">
            <NavBar location={location} setLocation={setLocation} refs={refs} />
            <Home refs={refs} />
            <About refs={refs} />
            <Sales refs={refs} />
            <Gallery antiques={Antiques} refs={refs} />
            <Contact refs={refs} />
        </div>
    );
};

export default App;
