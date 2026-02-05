import { Container } from './components/Container/Container';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessagesContainer } from './components/MessagesContainer/MessagesContainer';
import { MainRouter } from './routers/MainRouter/MainRouter';

import './styles/theme.css';
import './styles/global.css';

function App() {
  return (
    <>
      <Container>
        <TaskContextProvider>
          <MessagesContainer>
            <MainRouter />
          </MessagesContainer>
        </TaskContextProvider>
      </Container>
    </>
  );
}

export default App;
