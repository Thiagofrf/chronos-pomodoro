import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container/Container';
import { Logo } from './components/Logo/Logo';
import { Menu } from './components/Menu/Menu';
import { Home } from './components/Home/Home';

function App() {
  return (
    <>
      <Container>
        <Logo />
        <Menu />
        <Home />
      </Container>
    </>
  );
}

export default App;
