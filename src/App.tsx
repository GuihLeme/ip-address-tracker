import { UserProvider } from './hooks/user'

import Layout from './components/Layout';

import GlobalStyle from "./styles/global";
import { Container } from './styles/App';



function App() {

  return (
    <UserProvider>
      <Container>
        <GlobalStyle />
        <Layout />
      </Container>
    </UserProvider>
  );
}

export default App;
