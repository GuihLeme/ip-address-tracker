import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import { LatLngLiteral } from 'leaflet';
import mapIcon from '../../../utils/mapIcon';

interface MapContentProps {
  position: {
    lat: number,
    lng: number,
  }
}

const initialLocation = { lat: -22.2154042, lng: -54.8331331 };

const MapContent: React.FC<MapContentProps> = ({ position }) => {
  const [location, setLocation] = useState(initialLocation);

  useEffect(() => {
    console.log(position)
  },[position])

  const map = useMap();

  useEffect(()=>{
    map.flyTo(position)
  },[map, position])



  return (
    <>
    <button>dawdwadaw</button>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
      />
      {position !== undefined &&
        (<Marker
          position={position}
          icon={mapIcon}
        />)
      }
    </>
  );
}

export default MapContent;
