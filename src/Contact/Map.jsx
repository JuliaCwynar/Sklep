import React from "react";
import Map, {NavigationControl, Marker} from 'react-map-gl';
import maplibregl from 'maplibre-gl';

export default function MapCom() {


  return (
    <div style={{ height: '50vh', width: '90%', margin: 'auto' }}>
      <Map mapLib={maplibregl} 
        initialViewState={{
          longitude: 19.1343786,
          latitude: 51.9189046,
          zoom: 5.5
        }}
        style={{color: 'white'}}
        mapStyle="https://api.maptiler.com/maps/dataviz/style.json?key=sfvxcnZPHEy0e4SLy1EO">      
      </Map>
    </div>
  );
}