import React, { ReactElement } from 'react';

import './styles/App.scss';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Sales from './components/Sale';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App(): ReactElement {
    return (
        <div className="App">
            <NavBar />
            <Home />
            <About />
            <Sales />
            <Gallery />
            <Contact />
        </div>
    );
}

export default App;
