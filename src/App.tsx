import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container/Container';
import { Home } from './pages/Home/Home';

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
