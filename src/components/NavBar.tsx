import React, { ReactElement } from 'react';
import Logo from '../svgs/Logo';

const NavBar = (): ReactElement => (
    <header className="nav-bar">
        <button className="nav__menu-button">
            Menu
            <div className="nav__hamburger-menu"></div>
        </button>

        <button className="nav__logo-container">
            <Logo className="nav__logo" />
        </button>
    </header>
);

export default NavBar;
