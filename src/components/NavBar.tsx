import React, { ReactElement, Component, RefObject } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import Logo from '../svgs/Logo';

interface LocationProps {
    refs: RefObject<HTMLDivElement>[];
}

interface NavState {
    menuClass: string;
    sidebarClass: string;
}

class NavBar extends Component<LocationProps> {
    state: NavState;

    constructor(props: LocationProps) {
        super(props);

        this.state = {
            menuClass: 'nav__menu-button',
            sidebarClass: 'nav__sidebar',
        };

        this.openSidebar = this.openSidebar.bind(this);
    }

    openSidebar(): void {
        if (this.state.menuClass === 'nav__menu-button') {
            this.setState({ menuClass: 'nav__menu-button open', sidebarClass: 'nav__sidebar open' });
        } else {
            this.setState({ menuClass: 'nav__menu-button', sidebarClass: 'nav__sidebar open closing' });
            setTimeout(() => {
                this.setState({ menuClass: 'nav__menu-button', sidebarClass: 'nav__sidebar' });
            }, 1500);
        }
    }

    render(): ReactElement {
        return (
            <header className="nav-bar">
                <ul className={this.state.sidebarClass}>
                    <li className="nav__sidebar-button">
                        <Link
                            className="nav__sidebar-text"
                            data-content="Home"
                            to="home-module"
                            duration={3000}
                            smooth={true}
                            spy={true}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav__sidebar-button">
                        <Link
                            className="nav__sidebar-text"
                            data-content="What do we do?"
                            to="about-module"
                            duration={3000}
                            smooth={true}
                            spy={true}
                        >
                            What do we do?
                        </Link>
                    </li>
                    <li className="nav__sidebar-button">
                        <Link
                            className="nav__sidebar-text"
                            data-content="Current discounts"
                            to="sales-module"
                            duration={1000}
                            smooth={true}
                            spy={true}
                        >
                            Current discounts
                        </Link>
                    </li>
                    <li className="nav__sidebar-button">
                        <Link
                            className="nav__sidebar-text"
                            data-content="Our antiques"
                            to="gallery-module"
                            duration={1000}
                            offset={20}
                            smooth={true}
                            spy={true}
                        >
                            Our antiques
                        </Link>
                    </li>
                    <li className="nav__sidebar-button">
                        <Link
                            className="nav__sidebar-text"
                            data-content="How to get in touch with us?"
                            to="contact-module"
                            duration={1000}
                            smooth={true}
                            spy={true}
                            offset={50}
                        >
                            How to get in touch with us?
                        </Link>
                    </li>
                </ul>
                <button className={this.state.menuClass} onClick={this.openSidebar}>
                    <div className="nav__menu-text">Menu</div>
                    <div className="nav__hamburger-menu"></div>
                </button>

                <Link className="nav__logo-container" to="home-module" duration={1000} spy={true} smooth={true}>
                    <Logo className="nav__logo" />
                </Link>
            </header>
        );
    }
}

export default NavBar;
