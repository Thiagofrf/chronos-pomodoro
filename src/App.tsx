import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading/Heading';
import { Container } from './components/Container/Container';
import { Logo } from './components/Logo/Logo';

function App() {
  return (
    <>
      <Heading>
        <Logo />
      </Heading>
      <Container>Hello world! </Container>
    </>
  );
}

export default App;
