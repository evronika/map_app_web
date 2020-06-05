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

    // componentDidUpdate(prevProps: any, nextProps: any) {
    //     if(prevProps !== this.props){
    //         console.log(nextProps);
    //         this.setState({
    //             fields: nextProps.fields,
    //             containerClass: nextProps.containerClass
    //         });
    //     }
    // }

    render() {
        const { center, zoom } = (this.props as any);
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
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