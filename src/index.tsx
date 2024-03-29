import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter basename='/glacksite'>
      <Container>
        <App />
      </Container>
    </BrowserRouter>
);
