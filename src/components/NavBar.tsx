import React, { ReactElement, Component } from 'react';
import Logo from '../svgs/Logo';

interface LocationProps {
    location: string;
}

interface NavState {
    menuClass: string;
    sidebarClass: string;
    active: number;
}

class NavBar extends Component<LocationProps> {
    state: NavState;

    constructor(props: LocationProps) {
        super(props);

        this.state = {
            menuClass: 'nav__menu-button',
            sidebarClass: 'nav__sidebar',
            active: 0,
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

    componentDidMount(): void {
        const sidebarButtons = document.getElementsByClassName('nav__sidebar-text');
        for (let i = 0; i < sidebarButtons.length; i++) {
            if (i === this.state.active) sidebarButtons[i].classList.add('active');
            else sidebarButtons[i].classList.remove('active');
        }
    }

    render(): ReactElement {
        return (
            <header className="nav-bar">
                <ul className={this.state.sidebarClass}>
                    <li className="nav__sidebar-button">
                        <a className="nav__sidebar-text" data-content="Home" href="/">
                            Home
                        </a>
                    </li>
                    <li className="nav__sidebar-button">
                        <a className="nav__sidebar-text" data-content="What do we do?" href="about">
                            What do we do?
                        </a>
                    </li>
                    <li className="nav__sidebar-button">
                        <a className="nav__sidebar-text" data-content="Current discounts" href="sales">
                            Current discounts
                        </a>
                    </li>
                    <li className="nav__sidebar-button">
                        <a className="nav__sidebar-text" data-content="Our antiques" href="gallery">
                            Our antiques
                        </a>
                    </li>
                    <li className="nav__sidebar-button">
                        <a className="nav__sidebar-text" data-content="How to get in touch with us?" href="contact">
                            How to get in touch with us?
                        </a>
                    </li>
                </ul>
                <button className={this.state.menuClass} onClick={this.openSidebar}>
                    <div className="nav__menu-text">Menu</div>
                    <div className="nav__hamburger-menu"></div>
                </button>

                <button className="nav__logo-container">
                    <Logo className="nav__logo" />
                </button>
            </header>
        );
    }
}

export default NavBar;
