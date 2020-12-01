import React from 'react';
import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from "./Util";
import "../Styles/Map.css";

function Map({ countries, casesType, center, zoom }) {
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer
                    url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution= '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'     
                />
                {/* Loop through countries and draw circles on map  */}
                {showDataOnMap(countries, casesType)}
            </LeafletMap>
        </div>
    )
}

export default Map;
