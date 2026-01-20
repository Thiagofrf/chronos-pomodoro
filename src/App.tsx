import { useState } from 'react';

import { Container } from './components/Container/Container';
import { Home } from './pages/Home/Home';
import { TaskStateModel } from './models/TaskStateModel';

import './styles/theme.css';
import './styles/global.css';

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

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
