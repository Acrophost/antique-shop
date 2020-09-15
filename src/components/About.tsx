import React, { FunctionComponent } from 'react';

const About: FunctionComponent = () => (
    <div className="about">
        <div className="about__title-container">
            <h2 className="about__title">What do we do?</h2>
            <svg className="about__accent-line" height="100" width="700">
                <line x1="0" y1="0" x2="800" y2="0" />
            </svg>
        </div>
        <div className="about__text-container">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex ex, accumsan ut nisl egestas, tincidunt
                ullamcorper diam. Cras semper tellus ipsum, vitae mattis turpis faucibus sed.
            </p>
            <p>
                Praesent auctor aliquet viverra. Nulla scelerisque aliquet velit, quis varius dui tempus et. Mauris id
                tincidunt erat. Cras arcu nunc, maximus eu venenatis ut, sodales at purus.
            </p>
            <p>
                Pellentesque eget ligula porta, mattis diam id, feugiat dui. Cras a nisl velit. Fusce et quam dolor.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
        </div>
    </div>
);

export default About;
