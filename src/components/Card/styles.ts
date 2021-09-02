import styled from 'styled-components';

import { Desktop, Mobile } from '../../styles/_breakpoints'


export const Container = styled.div`
  width: calc(100vw - 3rem);
  max-width: 68.75rem;
  margin: 0 auto;
  padding: 1rem;

  border-radius: 1rem;
  background: white;

  box-shadow: 1px 2px 8px rgba(0, 0, 0, .3);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    span {
      text-transform: uppercase;
      font-size: 0.75rem;
      font-weight: 700;
      color: hsl(0, 0%, 59%);
      letter-spacing: 1px;

      margin-bottom: .75rem;
    }
  }

  @media ${Mobile()} {
    display: flex;
    flex-direction: column;
    /* align-items: center;
    justify-content: center; */

    padding: 1.75rem;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    div:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  @media ${Desktop()} {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 10rem;

    div {
      display: flex;
      align-items: flex-start;
      width: 278px;
      padding: .75rem;
      margin-left: 1.25rem;
    }

    div:not(:last-child) {
      height: 60%;
      border-right: 1px solid hsl(0, 0%, 79%);
    }
  }

`
