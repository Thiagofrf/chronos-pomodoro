import { Container } from './components/Container/Container';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { Home } from './pages/Home/Home';

import './styles/theme.css';
import './styles/global.css';

function App() {
  return (
    <>
      <Container>
        <TaskContextProvider>
          <Home />
        </TaskContextProvider>
      </Container>
    </>
  );
}

export default App;
