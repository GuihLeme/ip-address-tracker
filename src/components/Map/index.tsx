import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { useUser } from '../../hooks/user';
import mapIcon from '../../utils/mapIcon';

import { Container } from './styles';

const Map: React.FC = () => {
  const { user } = useUser();

  return user.location !== undefined ? (
    <Container>
      <img src="/pattern-bg.png" alt="background" />
      <MapContainer center={[user.location.lat, user.location.lng]} zoom={15} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ3VpaGxlbWUiLCJhIjoiY2tnNnJtN2E5MDA4aDJ0bnJxZ2RvMzVxbCJ9.S3WZXlwFwl5bYWW0qDBLMA"
        />
        <Marker
          position={[user.location.lat, user.location.lng]}
          icon={mapIcon}
        />
      </MapContainer>
    </Container>
  ) : (
    <Container>
      <img src="/pattern-bg.png" alt="background" />
    </Container>
  );
}

export default Map;
