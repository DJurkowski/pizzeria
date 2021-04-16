import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routing';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}

export default App;
