import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

interface UserProps {
  ip: string,
  isp: string,
  location: {
    city: string,
    region: string,
    postalCode?: string,
    timezone: string,
    lat: number,
    lng: number,
  }
}

interface UserContextData {
  user: UserProps,
  setUser: (user: UserProps) => void;
}

export const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserProps>({} as UserProps);

  useEffect(()=>{
    const getUser = async () => {
      const { data } = await api.get('')
      setUser(data)
    }
    getUser()
  },[])

  return (
    <UserContext.Provider value={{
      user, setUser
    }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUser(): UserContextData {
  const context = useContext(UserContext);

  return context;
}

