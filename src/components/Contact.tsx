import React, {
    FunctionComponent,
    ForwardRefRenderFunction,
    ComponentPropsWithoutRef,
    RefObject,
    useEffect,
} from 'react';

import MapContainer from './MapContainer';

const fwRef: ForwardRefRenderFunction<HTMLDivElement, ComponentPropsWithoutRef<'div'>> = (props, ref) => (
    <div className="contact" ref={ref} {...props}></div>
);

const ContactEl = React.forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(fwRef);

interface Location {
    address: string;
    lat: number;
    lng: number;
}

interface RefProps {
    refs: RefObject<HTMLDivElement>[];
    id: string;
    location: Location;
    zoomLevel: number;
}

const Contact: FunctionComponent<RefProps> = (props: RefProps) => {
    props.refs[4] = React.createRef<HTMLDivElement>();

    useEffect(() => {
        const animateContact = (): void => {
            const mapContainer = document.getElementsByClassName('contact__animated-box')[0];
            const title = document.getElementsByClassName('contact__title')[0];
            const info = document.getElementsByClassName('contact__info')[0];
            const line = document.getElementsByClassName('contact__accent-line')[0];

            if (!props.refs[4].current || !mapContainer) return;

            const top = props.refs[4].current.getBoundingClientRect().top;

            if (top <= 700 && !mapContainer.classList.contains('contactBox-in')) {
                mapContainer.classList.add('contactBox-in');
                title.classList.remove('out');
                info.classList.remove('out');
                line.classList.remove('out');
            }
            if (top > 700 && mapContainer.classList.contains('contactBox-in')) {
                mapContainer.classList.remove('contactBox-in');
                title.classList.add('out');
                info.classList.add('out');
                line.classList.add('out');
            }
        };
        window.addEventListener('scroll', animateContact);
        return (): void => {
            window.removeEventListener('scroll', animateContact);
        };
    }, []);

    return (
        <ContactEl ref={props.refs[4]} id={props.id}>
            <h2 className="contact__title">How to get in touch with us?</h2>
            <svg className="contact__accent-line" height="100" width="700">
                <line x1="0" y1="0" x2="800" y2="0" />
            </svg>
            <div className="contact__content">
                <div className="contact__info">
                    <div className="contact__phone-mail">
                        <p>
                            <span>Give us a call</span>: +00 000 000 000
                        </p>
                        <p>
                            <span>Or send us an email</span>: thisisanemail@mail.com
                        </p>
                    </div>
                    <div className="contact__adress">
                        <span>Our Address:</span>
                        <p>SomeStr 12</p>
                        <p>00000 SomePlace, SomeCountry</p>
                    </div>
                    <div className="contact__hours">
                        <span>We{"'"}re open every day!</span>
                        <p>Monday - Friday: 00:00 - 00:00</p>
                        <p>Saturday: 00:00 - 00:00</p>
                        <p>Sunday: 00:00 - 00:00</p>
                    </div>
                </div>
                <div id="map">
                    <div className="contact__animated-box">
                        <MapContainer location={props.location} zoomLevel={props.zoomLevel} />
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </ContactEl>
    );
};

export default Contact;
