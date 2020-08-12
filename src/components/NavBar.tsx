import React, { ReactElement } from 'react';

const NavBar = (): ReactElement => (
    <header className="nav-bar">
        <button className="nav__menu-button">
            Menu
            <div className="nav__hamburger-menu"></div>
        </button>
    </header>
);

export default NavBar;
