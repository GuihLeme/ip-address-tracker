import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100vw - 3rem);
  max-width: 555px;
  margin: 0rem auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background: white;

  border-radius: 16px;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, .3);

  margin-bottom: 1.5rem;

  position: relative;

  input {
    flex: 1;
    padding: 1.25rem;
    border-radius: 16px 0 0 16px;
    border: none;
  }

  button {
    border: none;
    background-color: black;
    padding: 1.25rem 1.5rem;
    border-radius: 0 16px 16px 0;
    transition: all .2s;

    &:hover {
      background-color: hsl(0, 0%, 17%);
      cursor: pointer;
    }
  }
`

export const Error = styled.span`
  position: absolute;
  top: -1.5rem;
  right: 0;
  color: #A7333F;
  font-weight: 700;
`
