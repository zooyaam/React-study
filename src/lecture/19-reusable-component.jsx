import { createRoot } from 'react-dom/client';
import FormControl from '../components/FormControl';

function App() {
  return (
    <div id="app">
      <FormControl />
      <FormControl />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
