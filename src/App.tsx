import React, { Component, ReactElement } from 'react';

import './styles/App.scss';

import Loader from './components/Loader';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Sales from './components/Sale';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

import Antiques from './data/Antiques';

class App extends Component {
    state = {
        loading: true,
        refs: [
            React.createRef<HTMLDivElement>(),
            React.createRef<HTMLDivElement>(),
            React.createRef<HTMLDivElement>(),
            React.createRef<HTMLDivElement>(),
            React.createRef<HTMLDivElement>(),
        ],
    };

    componentDidMount(): void {
        //setTimeout(() => {
        this.setState({ loading: false });
        //}, 6700);
    }

    render(): ReactElement {
        if (this.state.loading) {
            return <Loader />;
        } else {
            return (
                <div className="App">
                    <NavBar refs={this.state.refs} />
                    <Home refs={this.state.refs} id="home-module" />
                    <About refs={this.state.refs} id="about-module" />
                    <Sales refs={this.state.refs} id="sales-module" />
                    <Gallery antiques={Antiques} refs={this.state.refs} id="gallery-module" />
                    <Contact refs={this.state.refs} id="contact-module" />
                </div>
            );
        }
    }
}

export default App;
