import Layout from './components/Layout';

import GlobalStyle from "./styles/global";
import { Container } from './styles/App';



function App() {

  return (
    <>
      <Container>
        <GlobalStyle />
        <Layout />
      </Container>
    </>
  );
}

export default App;
