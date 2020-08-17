import React, { ReactElement, Component } from 'react';
import Logo from '../svgs/Logo';

type LocationProps = {
    location: string;
};

type NavState = {
    menuClass: string;
    sidebarClass: string;
    active: number;
};

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
            this.setState({ menuClass: 'nav__menu-button', sidebarClass: 'nav__sidebar' });
        }
    }

    didComponentMount(): void {
        const sidebarButtons = document.getElementsByClassName('nav__sidebar-button');

        for (let i = 0; i < sidebarButtons.length; i++) {
            if (i === this.state.active) sidebarButtons[i].classList.add('active');
            else sidebarButtons[i].classList.remove('active');
        }
    }

    render(): ReactElement {
        return (
            <header className="nav-bar">
                <div className={this.state.sidebarClass}>
                    <button className="nav__sidebar-button" data-content="Home">
                        Home
                    </button>
                    <button className="nav__sidebar-button" data-content="What do we do?">
                        What do we do?
                    </button>
                    <button className="nav__sidebar-button" data-content="Current discounts">
                        Current discounts
                    </button>
                    <button className="nav__sidebar-button" data-content="Our antiques">
                        Our antiques
                    </button>
                    <button className="nav__sidebar-button" data-content="How to get in touch with us?">
                        How to get in touch with us?
                    </button>
                </div>
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
