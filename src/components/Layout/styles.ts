import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      margin: 2rem auto;
      color: white;
    }
  }





`
