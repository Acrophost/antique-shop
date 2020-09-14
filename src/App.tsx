import React, { ReactElement } from 'react';

import './styles/App.scss';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Sales from './components/Sale';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

import Antiques from './data/Antiques';

function App(): ReactElement {
    const location = '/';

    return (
        <div className="App">
            <NavBar location={location} />
            <Home />
            <About />
            <Sales />
            <Gallery antiques={Antiques} />
            <Contact />
        </div>
    );
}

export default App;
