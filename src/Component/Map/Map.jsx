import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker issue in React Leaflet

const Map = () => {
  const position = [23.4607, 91.1809]; // Latitude, Longitude of Comilla

  return (
    <div className="py-10">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "300px", width: "100%", borderRadius: "20px" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Comilla, Bangladesh</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
