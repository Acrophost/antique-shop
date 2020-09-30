import React, { FunctionComponent } from 'react';

interface HTMLAttribute {
    className: string;
}

const HourglassLoader: FunctionComponent<HTMLAttribute> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" id="loader" viewBox="0 0 516 516" {...props}>
            <defs />
            {/* Background */}
            <circle id="background" cx="258" cy="258" r="258" />
            {/* Hourglass */}
            <path
                id="hourglass"
                fill="#d2d2d1"
                d="M257.72 249.43c3.44-1.86 79.55-1.07 82.33 0 10.34 4.92 20.33 17 22.26 34.32 4.18 22.34-23.11 64.16-32.93 72.36-9.62 12.27-17.75 23.76-17.85 31.07v6.5c1.73 5.92 4.19 11.77 8.92 16.74 12.65 15.95 24.7 31.11 34.27 49.32a73.23 73.23 0 019.22 32.26c-.69 12.8-4.09 24.4-14.84 32.7l-7.83 4.49c-2.69 2.08-75.66 5.55-83.55-.09-8.78-5.28-14.66-13.05-18.32-22.73-1.6-13.31-1.82-25.73 2.09-35.48a119.38 119.38 0 0119-37.57l22.51-30.6c4.25-5.33 4.95-20.71 1.16-27.13l-22-30.38a129.17 129.17 0 01-24.82-53.34 42.29 42.29 0 015.8-26.67c3.17-6.15 8.48-11.2 14.58-15.77z"
                transform="translate(-42 -125)"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="0 300.49 390.24; 0 300.49 390.24; 180 300.49 390.24; 180 300.49 390.24"
                    begin="0s"
                    dur="7s"
                    keyTimes="0; 0.75; 0.95; 1"
                    repeatCount="indefinite"
                    fill="freeze"
                    additive="sum"
                />
            </path>
            {/* Upper sand */}
            <path
                id="upper_sand"
                d="M303.8 378.81c5.77-9.06 11-11.33 12.52-16.21a57.5 57.5 0 013.17-6.65c8.49-6.89 13.7-12.12 19.09-21.21a7.25 7.25 0 01.9-1.22 57.2 57.2 0 007.88-11.31c2.52-4.74-.18-10.88-5-11.4-28.41-3.08-56-3.94-82.07-.41-4.51.61-7.17 6.2-5.1 10.86 5.58 12.57 12.94 24.12 23.22 32.78a7.4 7.4 0 012.19 3.08c3 8.15 8.25 15.71 12.64 22.31 2.34 3.62 7.89 4.47 10.56-.62z"
                className="sand"
                data-name="upper sand"
            >
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    keyTimes="0; 0.65; 1"
                    values="-42 -120; -42 -42; -42 -42"
                    dur="7s"
                    repeatCount="indefinite"
                    additive="sum"
                />
                <animate
                    attributeType="CSS"
                    attributeName="opacity"
                    values="1;1;0;0"
                    keyTimes="0; 0.7; 0.71; 1"
                    dur="7s"
                    repeatCount="indefinite"
                />
            </path>
            <path
                id="upper_overlay"
                d="M312.05 382.21l-1 5v6.5c1.73 5.92 4.2 11.77 8.93 16.74 12.65 15.95 24.7 31.11 34.26 49.32a73 73 0 019.21 32.23c-.69 12.8-4.08 24.4-14.84 32.7l-7.83 4.49c-2.68 2.08-75.66 5.55-83.54-.09-8.79-5.28-14.66-13.05-18.32-22.73-1.61-13.31-1.83-25.73 2.08-35.48a119.59 119.59 0 0119-37.57l22.5-30.61c4.25-5.33 4.73-15.44 3.66-20.88z"
                className="upper-overlay"
                data-name="upper overlay"
                transform="translate(-42 -122)"
            ></path>
            {/* Lower sand */}
            <path
                id="lower_sand"
                d="M241.8 507.08c3.67 8.87 9.77 16.38 24 22.11 3 1 59.12.26 66.71-1 13.05-2.08 19-9.69 23.81-19.24-.21-4-.5-5.87-3.09-7.89l-44.53-24c-6.21-3.44-12.73-3.17-19.48 0l-46.38 25.66a5 5 0 00-1.04 4.36z"
                className="sand"
                data-name="lower sand"
                transform="translate(-42 -125)"
            >
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    keyTimes="0; 0.6; 1"
                    values="-42 -65; -42 -120; -42 -120"
                    dur="7s"
                    repeatCount="indefinite"
                />
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="0 300.49 390.24; 0 300.49 390.24; 180 300.49 390.24; 180 300.49 390.24"
                    begin="0s"
                    dur="7s"
                    keyTimes="0; 0.75; 0.95; 1"
                    repeatCount="indefinite"
                    fill="freeze"
                    additive="sum"
                />
            </path>
            <path
                id="overlay"
                d="M257.24 249.43c3.44-1.86 79.54-1.07 82.33 0 10.34 4.92 20.33 17 22.26 34.32 4.17 22.34-23.11 64.16-32.93 72.36-9.62 12.27-17.76 23.76-17.86 31.07v6.5c1.73 5.92 4.2 11.77 8.93 16.74 12.65 15.95 24.7 31.11 34.26 49.32a73 73 0 019.22 32.26c-.69 12.8-4.08 24.4-14.84 32.7l-7.83 4.49c-2.68 2.08-75.66 5.55-83.54-.09-8.79-5.28-14.66-13.05-18.32-22.73-1.61-13.31-1.83-25.73 2.08-35.48a119.59 119.59 0 0119-37.57l22.5-30.61c4.25-5.33 4.94-20.71 1.16-27.13l-22-30.38a129.28 129.28 0 01-24.81-53.34 42.16 42.16 0 015.8-26.67c3.17-6.14 8.48-11.19 14.59-15.76zM300 125C157.51 125 42 240.51 42 383s115.51 258 258 258 258-115.51 258-258-115.51-258-258-258z"
                className="hourglass-overlay"
                transform="translate(-42 -125)"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="0 300.49 390.24; 0 300.49 390.24; 180 300.49 390.24; 180 300.49 390.24"
                    begin="0s"
                    dur="7s"
                    keyTimes="0; 0.75; 0.95; 1"
                    repeatCount="indefinite"
                    fill="freeze"
                    additive="sum"
                />
            </path>
            {/* Sand fall */}
            <g id="falling_sand" data-name="falling sand">
                <path
                    fill="none"
                    stroke="#086475"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="4"
                    strokeDasharray="1,6"
                    strokeDashoffset="200.00"
                    d="M256.64 252.24 l-.36 153.04"
                >
                    <animate attributeName="stroke-dashoffset" dur="3s" to="1.00" repeatCount="indefinite" />
                    <animate
                        attributeName="d"
                        dur="7s"
                        values="M256.64,400 L256.64,240; M256.64,400 L256.64,260; M256.64,400 L256.64,320; M256.64,400 L256.64,450"
                        keyTimes="0; 0.58; 0.65; 1"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeType="CSS"
                        attributeName="opacity"
                        values="1;1;0;0"
                        keyTimes="0; 0.65; 0.8; 1"
                        dur="7s"
                        repeatCount="indefinite"
                    />
                </path>
            </g>
            {/* Hourglass outer ring */}
            <path
                id="hourglass-2"
                fill="none"
                stroke="#d2d2d1"
                strokeMiterlimit="10"
                strokeWidth="7"
                d="M215.24 124.43c3.44-1.86 79.54-1.07 82.33 0 10.34 4.92 20.33 17 22.26 34.32 4.17 22.34-23.11 64.16-32.93 72.36-9.62 12.27-17.76 23.76-17.86 31.07v6.5c1.73 5.92 4.2 11.77 8.93 16.74 12.65 15.95 24.7 31.11 34.26 49.32a73 73 0 019.22 32.26c-.69 12.8-4.08 24.4-14.84 32.7l-7.83 4.49c-2.68 2.08-75.66 5.55-83.54-.09-8.79-5.28-14.66-13.05-18.32-22.73-1.61-13.31-1.83-25.73 2.08-35.48a119.59 119.59 0 0119-37.57l22.5-30.61c4.25-5.33 4.94-20.71 1.16-27.13l-22-30.38a129.28 129.28 0 01-24.81-53.34 42.16 42.16 0 015.8-26.67c3.17-6.14 8.48-11.19 14.59-15.76z"
                data-name="hourglass"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="0 258.49 265.24; 0 258.49 265.24; 180 258.49 265.24; 180 258.49 265.24"
                    begin="0s"
                    dur="7s"
                    keyTimes="0; 0.75; 0.95; 1"
                    repeatCount="indefinite"
                    fill="freeze"
                />
            </path>
            <circle
                id="brown_ring"
                cx="258.49"
                cy="265.24"
                r="238.11"
                fill="none"
                stroke="#795040"
                strokeDasharray="124.68 41.56 10.39 31.17 166.24 124.68"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="14"
                data-name="brown ring"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 258.49 265.24"
                    to="360 258.49 265.24"
                    dur="20s"
                    begin="0s"
                    repeatCount="indefinite"
                    fill="freeze"
                />
            </circle>
            <circle
                id="blue_ring"
                cx="258.49"
                cy="265.24"
                r="212.8"
                fill="none"
                stroke="#87b0c0"
                strokeDasharray="120 80 10 30 90 60"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="14"
                data-name="blue ring"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="360 258.49 265.24"
                    to="0 258.49 265.24"
                    dur="15s"
                    begin="0s"
                    repeatCount="indefinite"
                    fill="freeze"
                />
            </circle>
        </svg>
    );
};

export default HourglassLoader;
