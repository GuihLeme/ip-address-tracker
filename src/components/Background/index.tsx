import React, { useState } from 'react';
import { MapContainer } from 'react-leaflet'
import { LatLngLiteral } from 'leaflet';

import { Container } from './styles';
import { useEffect } from 'react';
import MapContent from './MapContent';

interface Position extends LatLngLiteral {
  lat: number,
  lng: number,
}

const initialPosition = { lat: 1, lng: 1 };

const Map: React.FC<Position> = ({ lat, lng }) => {
  const [position, setPosition] = useState(initialPosition);

  useEffect(()=>{
    const newPosition = { lat, lng }
    setPosition(newPosition)
  },[lat, lng])

  return (
    <Container>
      <img src="/pattern-bg.png" alt="background" />
      <MapContainer center={position} zoom={13}>
        <MapContent position={position}/>
      </MapContainer>
    </Container>
  )
}

export default Map;
