import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import Card from '../Card';
import Input from '../Input';
import Map from '../Map';

import { Container } from './styles';
import api from '../../services/api';

interface FormData {
  search: string,
}

interface UserProps {
  ip: string,
  isp: string,
  location: {
    city: string,
    region: string,
    postalCode: string,
    timezone: string,
    lat: number,
    lng: number,
  }
}

const Layout: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [user, setUser] = useState<UserProps>({
    ip: 'Carregando...',
    isp: 'Carregando...',
    location: {
      city: 'Carregando...',
      region: 'Carregando...',
      postalCode: 'Carregando...',
      timezone: 'Carregando...',
      lat: 1,
      lng: 1
    }
  });

  useEffect(()=>{
    api
      .get<UserProps>(`/v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}`)
      .then(response => setUser(response.data))
  },[])

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          search: Yup.string()
            .required('Search for an IP or domain correctly'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const searchString = data.search;
        const isSearchAnIpAddress = !!searchString.match(/^\d/) //it should return a boolean based on the first ~character

        if(isSearchAnIpAddress) {
          const response = await api.get(`v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}&ipAddress=${searchString}`)
          setUser(response.data)
        } else {
          const response = await api.get(`v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}&domain=${searchString}`)
          setUser(response.data)
        }
      } catch (err) {
        console.log(err)
      }
    },
  [setUser]);

  return (
    <Container>
      <div className='background'>
        <Map
          lat={user.location.lat}
          lng={user.location.lng}
        />
      </div>
      <div className='content'>
        <h1>IP Address Tracker</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name='search' />
        </Form>
        <Card
          isp={user.isp}
          ip={user.ip}
          location={user.location}
        />
      </div>
    </Container>
  )
}

export default Layout;
