import { useField } from '@unform/core';
import { InputHTMLAttributes, useEffect, useRef } from 'react';
import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  error: string | undefined,
}

const Input: React.FC<InputProps> = ({ name, error }) => {
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
      {error && <Error>{error}</Error>}
    </Container>
  );
}

export default Input;
