import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div id="app">
      <FormControl />
      <FormControl />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
