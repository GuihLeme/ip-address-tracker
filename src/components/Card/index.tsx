import React from 'react';

import { Container } from './styles';

interface CardProps {
  ip: string,
  isp: string,
  location: {
    city: string,
    region: string,
    postalCode?: string,
    timezone: string,
  }
}

const Card: React.FC<CardProps> = ({ isp, ip, location }) => (
  <Container>
    <div>
      <span>Ip Address</span>
      <strong>{ip}</strong>
    </div>
    <div>
      <span>Location</span>

      <strong>
        {location.city},
        {location.region}
        {location.postalCode}
      </strong>

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
)

export default Card;
