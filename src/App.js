import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Routes from './routes';

function App() {
  return (
    <Router>
      <main>
        <Routes />
      </main>
      <Sidebar />
    </Router>
  );
}

export default App;
