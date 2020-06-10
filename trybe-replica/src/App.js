import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TrybePage from './components/TrybePage'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <TrybePage />
    </BrowserRouter>
  );
}

export default App;