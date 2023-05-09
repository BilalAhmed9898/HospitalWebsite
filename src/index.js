import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter  as Router} from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <App />
      </Router>
    </MantineProvider>
  </React.StrictMode>
);

