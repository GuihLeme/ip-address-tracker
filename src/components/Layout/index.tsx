import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import api from '../../services/api';

import Card from '../Card';
import Input from '../Input';
import Map from '../Background';

import { Container } from './styles';

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
    ip: 'Loading...',
    isp: 'Loading...',
    location: {
      city: 'Loading...',
      region: 'Loading...',
      postalCode: 'Loading...',
      timezone: 'Loading...',
      lat: 1,
      lng: 1
    }
  });
  const [error, setError] = useState<string>()

  useEffect(()=>{
    api
      .get<UserProps>(`/v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}`)
      .then(response => setUser(response.data))
  },[])
  console.log(user)

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          search: Yup.string()
            .required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const searchString = data.search.trim();
        const isSearchStringAnIpAddress = !!searchString.match(/^\d/) //it should return a boolean based on the first ~character

        if(isSearchStringAnIpAddress) {
          const response = await api.get(`v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}&ipAddress=${searchString}`)
          setUser(response.data)
        } else {
          const HTTPRegex = /^https?:\/\//;
          const isSearchStringStartsWithHTTP = searchString.startsWith('http')
          if (isSearchStringStartsWithHTTP) {
            const httpString = searchString.match(HTTPRegex)
            const httpLength = httpString?.[0].length

            const parsedSearchString = searchString.slice(httpLength)

            const response = await api.get(`v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}&domain=${parsedSearchString}`)
            setUser(response.data)
          } else {
            const response = await api.get(`v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}&domain=${searchString}`)
            setUser(response.data)
          }
        }
        setError(undefined)
      } catch (err) {
        setError('Invalid IP address or Domain!')
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
          <Input name='search' error={error}/>
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
