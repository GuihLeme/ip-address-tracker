import { Container } from './styles';

const Input: React.FC = () => {
  return (
    <Container>
      <input type="number" placeholder="Search for any IP address or domain" />
      <button>
        <img src="/icon-arrow.svg" alt="Arrow right" />
      </button>
    </Container>
  );
}

export default Input;
