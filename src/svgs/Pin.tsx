import React, { FunctionComponent } from 'react';

interface HTMLAttribute {
    className: string;
}

const Pin: FunctionComponent<HTMLAttribute> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" data-name="Warstwa 1" viewBox="0 0 327 633" {...props}>
            <defs />
            <path
                fill="#3a3335"
                d="M169.64 0L327 216 182 633 0 216zm-2.79 135.54a81.31 81.31 0 1081.31 81.3 81.31 81.31 0 00-81.31-81.3z"
            />
        </svg>
    );
};

export default Pin;
