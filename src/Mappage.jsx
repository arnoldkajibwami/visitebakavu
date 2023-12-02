import React from "react";
import GoogleMapReact from 'google-map-react';
import Breadcrumb from "./Breadcrump"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Mappage() {
    const defaultProps = {
        center: {
            lat: -2.5043273,
            lng: 28.8658361
        },
        zoom: 11
    };


    return (

        <>
            <Breadcrumb page={"Map"} />
            <h1 className="mt-5 text-center">RD CONGO Map</h1>
            <div className="container" style={{ height: '100vh', width: '100%', marginBottom:"50px", marginTop:"50px"}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        </>
    );
}