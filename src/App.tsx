import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container/Container';
import { Logo } from './components/Logo/Logo';
import { Menu } from './components/Menu/Menu';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Container>
        <Logo />
        <Menu />
        <Home />
        <Footer />
      </Container>
    </>
  );
}

export default App;
