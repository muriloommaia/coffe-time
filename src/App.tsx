import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './Pages/Home';
import './styles/font-styles.css';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
