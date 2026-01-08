import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading/Heading';
import { Container } from './components/Container/Container';
import { Timer } from 'lucide-react';

function App() {
  return (
    <>
      <Heading>
        <Timer />
        Chronos
      </Heading>
      <Container>Hello world! </Container>
    </>
  );
}

export default App;
