import React, { FunctionComponent } from 'react';
import HourglassLoader from '../svgs/HourglassLoader';

const Loader: FunctionComponent = () => {
    return (
        <div className="loader-container">
            <HourglassLoader className="loader" />
        </div>
    );
};

export default Loader;
