import React, { ReactElement, Component, RefObject } from 'react';
import Logo from '../svgs/Logo';

interface LocationProps {
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
        this.setActive = this.setActive.bind(this);
        this.changeActive = this.changeActive.bind(this);
    }

    componentDidMount(): void {
        window.onscroll = (): void => {
            window.addEventListener('scroll', this.checkLocation);
        };

        this.setActive();
    }

    checkLocation(): void {
        const previous = this.state.active;

        if (
            this.props.refs.about &&
            this.props.refs.about.current &&
            window.pageYOffset < this.props.refs.about.current.offsetTop - 300
        ) {
            this.setState({ active: 0 });
            window.history.pushState('', 'The Antique Store', '/');
        } else if (
            this.props.refs.sales &&
            this.props.refs.sales.current &&
            window.pageYOffset < this.props.refs.sales.current.offsetTop - 300
        ) {
            this.setState({ active: 1 });
            window.history.pushState('', 'The Antique Store', '/about');
        } else if (
            this.props.refs.gallery &&
            this.props.refs.gallery.current &&
            window.pageYOffset < this.props.refs.gallery.current.offsetTop - 400
        ) {
            this.setState({ active: 2 });
            window.history.pushState('', 'The Antique Store', '/sales');
        } else if (
            this.props.refs.contact &&
            this.props.refs.contact.current &&
            window.pageYOffset < this.props.refs.contact.current.offsetTop - 400
        ) {
            this.setState({ active: 3 });
            window.history.pushState('', 'The Antique Store', '/gallery');
        } else {
            this.setState({ active: 4 });
            window.history.pushState('', 'The Antique Store', '/contact');
        }

        this.changeActive(previous);
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

    changeActive(previous: number): void {
        const buttons = document.getElementsByClassName('nav__sidebar-text');
        buttons[previous].classList.remove('active');
        buttons[this.state.active].classList.add('active');
    }

    setActive(): void {
        const buttons = document.getElementsByClassName('nav__sidebar-text');
        buttons[this.state.active].classList.add('active');
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
                                this.props.refs.home.current.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start',
                                });
                                this.props.refs.home.current.focus();
                                window.history.pushState({}, 'The Antique Store', '/');
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
                                this.props.refs.about.current.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'nearest',
                                });
                                this.props.refs.about.current.focus();
                                window.history.pushState({}, 'The Antique Store', '/about');
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
                                this.props.refs.sales.current.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start',
                                });
                                this.props.refs.sales.current.focus();
                                window.history.pushState({}, 'The Antique Store', '/sales');
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
                                this.props.refs.gallery.current.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start',
                                });
                                this.props.refs.gallery.current.focus();
                                window.history.pushState({}, 'The Antique Store', '/gallery');
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
                                this.props.refs.contact.current.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'nearest',
                                });
                                this.props.refs.contact.current.focus();
                                window.history.pushState({}, 'The Antique Store', '/contact');
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
                        if (this.props.refs.home && this.props.refs.home.current) {
                            this.props.refs.home.current.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start',
                            });
                            this.props.refs.home.current.focus();
                            window.history.pushState({}, 'The Antique Store', '/');
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
