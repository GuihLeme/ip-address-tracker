import { useField } from '@unform/core';
import { InputHTMLAttributes, useEffect, useRef } from 'react';
import { Container } from './styles';

// interface User {
//   ip: string,
//   isp: string,
//   location: {
//     city: string,
//     region: string,
//     postalCode?: string,
//     timezone: string,
//     lat: number,
//     lng: number,
//   }
// }

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
}

const Input: React.FC<InputProps> = ({ name }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    fieldName, registerField, defaultValue,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        ref={inputRef}
        defaultValue={defaultValue}
      />
      <button type='submit'>
        <img src="/icon-arrow.svg" alt="Arrow right" />
      </button>
    </Container>
  );
}

export default Input;
