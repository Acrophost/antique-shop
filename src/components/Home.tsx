import React, { ForwardRefRenderFunction, FunctionComponent, ComponentPropsWithoutRef, RefObject } from 'react';
import HomeBackground from '../svgs/HomeBackground';

const fwRef: ForwardRefRenderFunction<HTMLDivElement, ComponentPropsWithoutRef<'div'>> = (props, ref) => (
    <div className="home" ref={ref} {...props}></div>
);

const HomeEl = React.forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(fwRef);

interface RefProps {
    refs: RefObject<HTMLDivElement>[];
}

const Home: FunctionComponent<RefProps> = (props: RefProps) => {
    props.refs[0] = React.createRef<HTMLDivElement>();

    return (
        <HomeEl ref={props.refs[0]}>
            <div className="home__title-container">
                <svg className="home__accent-line" height="100" width="700">
                    <line x1="0" y1="0" x2="800" y2="0" />
                </svg>
                <h1 className="home__title">
                    The Antique <span>House</span>
                </h1>
            </div>
            <HomeBackground className="home__background-furniture" home-height={props.refs[0]} />
        </HomeEl>
    );
};

export default Home;
