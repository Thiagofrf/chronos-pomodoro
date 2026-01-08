import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { Timer } from 'lucide-react';

function App() {
  return (
    <>
      <Heading>
        Olá mundo!
        <button>
          <Timer />
        </button>
      </Heading>
      <p>Lorem ipsum dolor sit amet</p>
    </>
  );
}

export default App;
