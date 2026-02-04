import { Container } from './components/Container/Container';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { Home } from './pages/Home/Home';
import { MessagesContainer } from './components/MessagesContainer/MessagesContainer';

import './styles/theme.css';
import './styles/global.css';

function App() {
  return (
    <>
      <Container>
        <TaskContextProvider>
          <MessagesContainer>
            <Home />
          </MessagesContainer>
        </TaskContextProvider>
      </Container>
    </>
  );
}

export default App;
