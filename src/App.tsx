import { useState } from 'react';

import { Container } from './components/Container/Container';
import { Home } from './pages/Home/Home';
import { TaskStateModel } from './models/TaskStateModel';

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
