import React from "react";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import Map, {NavigationControl, Marker} from 'react-map-gl';
import maplibregl from 'maplibre-gl';

export default function MapCom() {


  return (
    <div style={{ height: '50vh', width: '90%', margin: 'auto' }}>
      <Map mapLib={maplibregl} 
        initialViewState={{
          longitude: 18.524122,
          latitude: 50.109410,
          zoom: 15,
        }}
        style={{width: "100%", height: "100%", border: "1px solid rgba(0, 0, 0, 0.089)", borderRadius: '10px'}}
        mapStyle="https://api.maptiler.com/maps/dataviz/style.json?key=sfvxcnZPHEy0e4SLy1EO"
      >
        <Marker key='Hossa' latitude='50.109410' longitude='18.524122'>
             </Marker>
        <NavigationControl position="top-left" />
      </Map>
    </div>
  );
}