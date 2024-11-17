import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

const Map = () => {
    const position = [50.588174, 3.105113]

    return (
        <MapContainer center={position} zoom={20} scrollWheelZoom={false} className={"z-50 max-h-[500px]"}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;