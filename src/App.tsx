import { Container } from './components/Container/Container';
import { Home } from './pages/Home/Home';

import './styles/theme.css';
import './styles/global.css';

function App() {
  return (
    <>
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
