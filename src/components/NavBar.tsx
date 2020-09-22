import React, { ReactElement, Component, Dispatch, RefObject } from 'react';
import Logo from '../svgs/Logo';

interface LocationProps {
    location: string;
    setLocation: Dispatch<string>;
    refs: {
        home: RefObject<HTMLDivElement>;
        about: RefObject<HTMLDivElement>;
        sales: RefObject<HTMLDivElement>;
        gallery: RefObject<HTMLDivElement>;
        contact: RefObject<HTMLDivElement>;
    };
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
        this.checkLocation = this.checkLocation.bind(this);
    }

    componentDidMount(): void {
        window.onscroll = (): void => {
            window.addEventListener('scroll', this.checkLocation);
        };

        const buttons = document.getElementsByClassName('nav__sidebar-text');
        buttons[this.state.active].classList.add('active');
    }

    checkLocation(): void {
        if (
            this.props.refs.about &&
            this.props.refs.about.current &&
            window.pageYOffset < this.props.refs.about.current.offsetTop - 300
        ) {
            this.props.setLocation('/');
        } else if (
            this.props.refs.sales &&
            this.props.refs.sales.current &&
            window.pageYOffset < this.props.refs.sales.current.offsetTop - 300
        ) {
            this.props.setLocation('about');
        } else if (
            this.props.refs.gallery &&
            this.props.refs.gallery.current &&
            window.pageYOffset < this.props.refs.gallery.current.offsetTop - 400
        ) {
            this.props.setLocation('sales');
        } else if (
            this.props.refs.contact &&
            this.props.refs.contact.current &&
            window.pageYOffset < this.props.refs.contact.current.offsetTop - 400
        ) {
            this.props.setLocation('gallery');
        } else {
            this.props.setLocation('contact');
        }
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
                        <button
                            className="nav__sidebar-text"
                            data-content="Home"
                            onClick={(): void => {
                                if (!this.props.refs.home || !this.props.refs.home.current) return;
                                this.props.setLocation('/');
                                this.props.refs.home.current.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'nearest',
                                });
                                this.props.refs.home.current.focus();
                            }}
                        >
                            Home
                        </button>
                    </li>
                    <li className="nav__sidebar-button">
                        <button
                            className="nav__sidebar-text"
                            data-content="What do we do?"
                            onClick={(): void => {
                                if (!this.props.refs.about || !this.props.refs.about.current) return;
                                this.props.setLocation('about');
                                this.props.refs.about.current.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'nearest',
                                });
                                this.props.refs.about.current.focus();
                            }}
                        >
                            What do we do?
                        </button>
                    </li>
                    <li className="nav__sidebar-button">
                        <button
                            className="nav__sidebar-text"
                            data-content="Current discounts"
                            onClick={(): void => {
                                if (!this.props.refs.sales || !this.props.refs.sales.current) return;
                                this.props.setLocation('sales');
                                this.props.refs.sales.current.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'nearest',
                                });
                                this.props.refs.sales.current.focus();
                            }}
                        >
                            Current discounts
                        </button>
                    </li>
                    <li className="nav__sidebar-button">
                        <button
                            className="nav__sidebar-text"
                            data-content="Our antiques"
                            onClick={(): void => {
                                if (!this.props.refs.gallery || !this.props.refs.gallery.current) return;
                                this.props.setLocation('gallery');
                                this.props.refs.gallery.current.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'nearest',
                                });
                                this.props.refs.gallery.current.focus();
                            }}
                        >
                            Our antiques
                        </button>
                    </li>
                    <li className="nav__sidebar-button">
                        <button
                            className="nav__sidebar-text"
                            data-content="How to get in touch with us?"
                            onClick={(): void => {
                                if (!this.props.refs.contact || !this.props.refs.contact.current) return;
                                this.props.setLocation('contact');
                                this.props.refs.contact.current.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'nearest',
                                });
                                this.props.refs.contact.current.focus();
                            }}
                        >
                            How to get in touch with us?
                        </button>
                    </li>
                </ul>
                <button className={this.state.menuClass} onClick={this.openSidebar}>
                    <div className="nav__menu-text">Menu</div>
                    <div className="nav__hamburger-menu"></div>
                </button>

                <button
                    className="nav__logo-container"
                    onClick={(): void => {
                        this.props.setLocation('/');
                        if (this.props.refs.home && this.props.refs.home.current) {
                            this.props.refs.home.current.scrollIntoView({
                                behavior: 'smooth',
                                block: 'nearest',
                            });
                            this.props.refs.home.current.focus();
                        }
                    }}
                >
                    <Logo className="nav__logo" />
                </button>
            </header>
        );
    }
}

export default NavBar;
