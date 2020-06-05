import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };


    render() {
        const { center, zoom } = (this.props as any);
        return (
            // Important! Always set the container height explicitly
            <div className='vh-100 w-100 map-wrapper'>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDo_KmVZN7Eo_Rns_COL3jnkgn6tDl06XU' }}
                    defaultCenter={center}
                    defaultZoom={zoom}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;