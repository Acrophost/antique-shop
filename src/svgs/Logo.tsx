import React, { FunctionComponent } from 'react';

interface HTMLAttribute {
    className: string;
}

const Logo: FunctionComponent<HTMLAttribute> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" id="bookcase-logo" viewBox="0 0 481.64 567" {...props}>
            <path
                fill="#f0efef"
                d="M0 0v29.53h27.7v508.78H0V567h113.77v-28.69H84.52V325.69H396.7v212.62h-28.12V567h113.06v-28.69h-28.12V29.53h28.12V0H368.58v29.53h28.12v212.35H84.52V29.53h29.25V0H0z"
            />
            <path
                d="M161.97 266.01h168.75v43.03H161.97z"
                className="nav__cls-2"
                transform="rotate(-71.87 120.74 256.124)"
            />
            <path
                d="M326.7 203.15h43.03V371.9H326.7z"
                className="nav__cls-2"
                transform="rotate(-18.13 -121.968 394.65)"
            />
            <path
                d="M85.53 268.37h168.75v43.03H85.53z"
                className="nav__cls-2"
                transform="rotate(-89.61 70.607 247.922)"
            />
            <path
                d="M337.53 268.37h168.75v43.03H337.53z"
                className="nav__cls-2"
                transform="rotate(-89.61 322.623 247.912)"
            />
        </svg>
    );
};

export default Logo;
