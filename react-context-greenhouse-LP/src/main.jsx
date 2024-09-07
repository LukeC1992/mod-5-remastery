import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ThemeProvider from './context/ThemeContext';
import ClimateContextProvider from './context/ClimateContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ClimateContextProvider>
        <App />
      </ClimateContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
