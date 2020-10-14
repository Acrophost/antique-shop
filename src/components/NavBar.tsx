import React, { ReactElement, Component, RefObject } from 'react';
import Logo from '../svgs/Logo';

interface LocationProps {
    refs: RefObject<HTMLDivElement>[];
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
            this.props.refs[1] &&
            this.props.refs[1].current &&
            window.pageYOffset < this.props.refs[1].current.offsetTop - 300
        ) {
            this.setState({ active: 0 });
            window.history.pushState('', 'The Antique Store', '/');
        } else if (
            this.props.refs[2] &&
            this.props.refs[2].current &&
            window.pageYOffset < this.props.refs[2].current.offsetTop - 300
        ) {
            this.setState({ active: 1 });
            window.history.pushState('', 'The Antique Store', '/about');
        } else if (
            this.props.refs[3] &&
            this.props.refs[3].current &&
            window.pageYOffset < this.props.refs[3].current.offsetTop - 400
        ) {
            this.setState({ active: 2 });
            window.history.pushState('', 'The Antique Store', '/sales');
        } else if (
            this.props.refs[4] &&
            this.props.refs[4].current &&
            window.pageYOffset < this.props.refs[4].current.offsetTop - 400
        ) {
            this.setState({ active: 3 });
            window.history.pushState('', 'The Antique Store', '/gallery');
        } else {
            this.setState({ active: 4 });
            window.history.pushState('', 'The Antique Store', '/contact');
        }

        this.changeActive(previous);
    }

    scrollToComponent(val: number, name: string): void {
        if (this.props.refs[val].current && this.props.refs[val]) {
            this.props.refs[val].current!.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });

            window.history.pushState({}, 'The Antique Store', name);
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
                                this.scrollToComponent(0, '/');
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
                                this.scrollToComponent(1, '/about');
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
                                this.scrollToComponent(2, '/sales');
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
                                this.scrollToComponent(3, '/gallery');
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
                                this.scrollToComponent(4, '/contact');
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
                        this.scrollToComponent(0, '/');
                    }}
                >
                    <Logo className="nav__logo" />
                </button>
            </header>
        );
    }
}

export default NavBar;
