import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  img {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }

  .leaflet-container {
    height: calc(100vh - 300px);
    width: 100vw;
  }
`
