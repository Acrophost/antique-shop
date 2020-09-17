import React, { FunctionComponent } from 'react';

import Pin from '../svgs/Pin';

interface MarkerProps {
    lat: number;
    lng: number;
    text: string;
}

const MyMarker: FunctionComponent<MarkerProps> = (props: MarkerProps) => (
    <div className="pin">
        <Pin className="pin-icon" />
        <div className="pin-text">{props.text}</div>
    </div>
);

export default MyMarker;
