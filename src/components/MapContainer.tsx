import React, { FunctionComponent } from 'react';
import GoogleMapReact from 'google-map-react';

import MyMarker from './MyMarker';

interface Location {
    lat: number;
    lng: number;
    address: string;
}

interface LocationProps {
    location: Location;
    zoomLevel: number;
}

const MapContainer: FunctionComponent<LocationProps> = (props: LocationProps) => {
    return (
        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyAziz4tEZk0hv1enI5WiVoAnJzl1UUE7EY',
                    language: 'en',
                }}
                defaultCenter={{
                    lat: props.location.lat,
                    lng: props.location.lng,
                }}
                defaultZoom={props.zoomLevel}
            >
                <MyMarker lat={props.location.lat} lng={props.location.lng} text={props.location.address} />
            </GoogleMapReact>
        </div>
    );
};

export default MapContainer;
