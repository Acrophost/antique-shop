import React, { FunctionComponent } from 'react';

interface HTMLAttribute {
    className: string;
}

const FurnitureMini: FunctionComponent<HTMLAttribute> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" data-name="furniture-mini" viewBox="0 0 478 658" {...props}>
            <defs />
            <path
                fill="#f0efef"
                d="M142.33 645.94a31.26 31.26 0 003 12.06H0V0h478v440.74c-4.76-8.07-23.69-14.23-48.33-19.62-46.32-5.45-94.1-9.32-145.86-8.87-2.13-12.62-4.51-24.29-7.67-33 1.31.17 1.38-1.47 1.1-3.62l-39.53-219.41c.19-2.51-1.36-3.34-3.51-3.61-8.48-.4-15.45-4.25-20.15-13.25.25-1-3-1.69-7.55-2.19-9.68-18-20.63-30.83-34.39-32.08-12.1-.18-21.89 5.5-27.48 21.9-5-.48-10.07 1.94-9.69 3.83-1.29 3.5-1.41 4.8-4.33 6.46l-11.28-.44c-5.33.15-9.11 1.42-8.87 5.59l33.4 262.26c2 17.48 3.29 34 1.42 45.45-1.38 20.58-2.77 41.11-4.81 51.47-.77 2.45-1 4.87 1.64 7.11 8.21 14.91 14.79 32.93 15.44 62.31 1.09 11-2.23 26.23-10.3 46.11l-5.8 18.28a39 39 0 01.88 10.52zM357.4 638.16c-20.43-3.91-42.6-6.93-44.9-20.15-.52-3-.23-10.17 0-17.08-2.43-4.87-15.67-4.61-28.86-4.38a261.43 261.43 0 01-104.63 16l-4.49 9.52c7.7 11.16 9.18 23.13 4.33 35.94h185.51c.73-1 1.54-2.12 2.45-3.19-3.14-14.4-6.28-16.88-9.41-16.66zM478 582v-94.6c-7 12-12.21 28.51-12.08 57.66 2.19 13.73 7.89 26.07 12.08 36.94zm-92.24-28.69c18.49-3.74 37.92-4.5 58-3.07.15-26.61 2.18-50.67 9.41-73.37l-54.09 28.36c.87 6.79 3 11.39 1 16.32-6.84 8.95-11.48 19.65-14.32 31.78zm-26.83-45.89L286 500.55c1.92 12.79 2.74 25 1.64 36.24 17.56 2.33 30 8.25 26.61 25.35a99.76 99.76 0 0042.38 0 123.31 123.31 0 017.67-37.28h-4.93c-1.56-2.45-.83-10.34-.44-17.42zM478 620.64a14.44 14.44 0 01-2.34 2c-9.2 1.35-20.69.22-23.76-2.41-.11-.86-.27-2.16-.44-3.5-4.55-11-6.08-21.5 3.07-30.55a38.72 38.72 0 00-6.46-12.18c-29.73-1.75-43.86.22-66.47 8.21v8.22c-.49 12 .88 26.2 12.15 52.67A135.06 135.06 0 01399 658h79zm-134-35c1.2 6.28-.17 12.26-3.73 18l14.13 4.82A170.24 170.24 0 01355 584zm-90.25-174.89c.51-8.56-.36-20.08-1.64-32.46l-79 16.86c3.8 12.22 7.66 24.41 7.72 37.94 12.4-8.68 36.8-16.09 72.92-22.34zm28 144c-2.23 5.85-5.66 10.48-6.35 14.78l11.6-1a17 17 0 013.4-12.37 32.85 32.85 0 00-8.67-1.41zM181 490.8l-.76 12.76-4.55 1.69c5.8 14.28 8.72 30.82 9.47 49.06.91 10.61 1.38 20.6.66 28.91 6.13 5.48 40.54.74 64.28-7 .56-6.19 3.63-14 6.46-21.68 8.26-15.87 9.87-34.93 5.81-56.72z"
            />
        </svg>
    );
};

export default FurnitureMini;