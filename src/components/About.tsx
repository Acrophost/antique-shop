import React, {
    FunctionComponent,
    ForwardRefRenderFunction,
    ComponentPropsWithoutRef,
    useEffect,
    RefObject,
} from 'react';

const fwRef: ForwardRefRenderFunction<HTMLDivElement, ComponentPropsWithoutRef<'div'>> = (props, ref) => (
    <div className="about" ref={ref} {...props}></div>
);

const AboutEl = React.forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(fwRef);

interface RefProps {
    refs: RefObject<HTMLDivElement>[];
    id: string;
}

const About: FunctionComponent<RefProps> = (props: RefProps) => {
    props.refs[1] = React.createRef<HTMLDivElement>();

    useEffect(() => {
        const animateAbout = (): void => {
            const titleContainer = document.getElementsByClassName('about__animatedBox')[0];
            const text = document.getElementsByClassName('about__text-container')[0];
            const line = document.getElementsByClassName('about__accent-line')[0];

            if (!props.refs[1].current || !titleContainer) return;
            const top = props.refs[1].current.getBoundingClientRect().top;
            const bottom = props.refs[1].current.getBoundingClientRect().bottom;

            if (top <= 800 && bottom >= -100 && !titleContainer.classList.contains('animatedBox-in')) {
                titleContainer.classList.add('animatedBox-in');
                text.classList.remove('out');
                line.classList.remove('out');
            }
            if ((top > 800 || bottom < -100) && titleContainer.classList.contains('animatedBox-in')) {
                titleContainer.classList.remove('animatedBox-in');
                text.classList.add('out');
                line.classList.add('out');
            }
        };
        window.addEventListener('scroll', animateAbout);
        return (): void => {
            window.removeEventListener('scroll', animateAbout);
        };
    }, []);

    return (
        <AboutEl ref={props.refs[1]} id={props.id}>
            <div className="about__animatedBox">
                <div className="about__title-container">
                    <h2 className="about__title">What do we do?</h2>
                    <svg className="about__accent-line" height="100" width="700">
                        <line x1="0" y1="0" x2="800" y2="0" />
                    </svg>
                </div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="about__text-container">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex ex, accumsan ut nisl egestas,
                    tincidunt ullamcorper diam. Cras semper tellus ipsum, vitae mattis turpis faucibus sed.
                </p>
                <p>
                    Praesent auctor aliquet viverra. Nulla scelerisque aliquet velit, quis varius dui tempus et. Mauris
                    id tincidunt erat. Cras arcu nunc, maximus eu venenatis ut, sodales at purus.
                </p>
                <p>
                    Pellentesque eget ligula porta, mattis diam id, feugiat dui. Cras a nisl velit. Fusce et quam dolor.
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
            </div>
        </AboutEl>
    );
};
export default About;
