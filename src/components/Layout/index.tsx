import React from 'react';

import Card from '../Card';
import Input from '../Input';
import Map from '../Map';

import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <div className='background'>
        <Map />
      </div>
      <div className='content'>
        <h1>IP Address Tracker</h1>
        <Input />
        <Card />
      </div>
    </Container>
  );
}

export default Layout;
