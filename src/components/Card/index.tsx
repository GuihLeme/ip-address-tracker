import React from 'react';
import { useUser } from '../../hooks/user';

import { Container } from './styles';

const Card: React.FC = () => {
  const { user } = useUser();
  console.log(user)

  const { ip, location, isp } = user;

  return user.location !== undefined ? (
    <Container>
      <div>
        <span>Ip Address</span>
        <strong>{ip}</strong>
      </div>
      <div>
        <span>Location</span>
        <strong>{location.city}, {location.region} {location.postalCode}</strong>
      </div>
      <div>
        <span>Timezone</span>
        <strong>UTC {location.timezone}</strong>
      </div>
      <div>
        <span>Isp</span>
        <strong>{isp}</strong>
      </div>
    </Container>
  ) : (
    <Container>
      <span>Ip Address</span>
      <strong>Carregando...</strong>
      <span>Location</span>
      <strong>Carregando...</strong>
      <span>Timezone</span>
      <strong>Carregando...</strong>
      <span>Isp</span>
      <strong>Carregando...</strong>
    </Container>
  );
}

export default Card;
