import React from 'react';
import { EnterpriseProvider } from './components/EnterpriseContext';
import Panel from './components/Panel.js';

function App() {
  return (
    <EnterpriseProvider>
      <Panel />
    </EnterpriseProvider>
  );
}

export default App;
