import React, { useEffect } from 'react';
import { TileLayer, Marker, useMap } from 'react-leaflet'
import mapIcon from '../../../utils/mapIcon';

interface MapContentProps {
  position: {
    lat: number,
    lng: number,
  }
}

const MapContent: React.FC<MapContentProps> = ({ position }) => {
  const map = useMap();

  useEffect(()=>{
    map.flyTo(position)
  },[map, position])

  return (
    <>
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
