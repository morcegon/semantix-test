import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Normalize } from 'styled-normalize';

import Sidebar from './components/Sidebar';
import Routes from './routes';
import GlobalStyles from './styles/global';

function App() {
  return (
    <Router>
      <Normalize />
      <GlobalStyles />
      <main>
        <Routes />
      </main>
      <Sidebar />
    </Router>
  );
}

export default App;
