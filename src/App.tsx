import { Container } from './components/Container/Container';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { Home } from './pages/Home/Home';
import { MessagesContainer } from './components/MessagesContainer/MessagesContainer';
import { BrowserRouter, Routes, Route } from 'react-router';

import './styles/theme.css';
import './styles/global.css';
import { NotFound } from './pages/NotFound/NotFound';
import { AboutPomodoro } from './pages/About/About';

function App() {
  return (
    <>
      <Container>
        <TaskContextProvider>
          <MessagesContainer>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-pomodoro' element={<AboutPomodoro />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </MessagesContainer>
        </TaskContextProvider>
      </Container>
    </>
  );
}

export default App;
