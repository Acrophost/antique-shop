import React, { FunctionComponent } from 'react';

import MapContainer from './MapContainer';

const Contact: FunctionComponent = () => {
    const location = { address: 'The Antique House', lat: 53.224, lng: -4.197 };
    const zoomLevel = 14;

    return (
        <div className="contact">
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
                    <MapContainer location={location} zoomLevel={zoomLevel} />
                </div>
            </div>
        </div>
    );
};

export default Contact;
