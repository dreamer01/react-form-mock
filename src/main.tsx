import React from 'react';
import ReactDOM from 'react-dom/client';

import { worker } from './mocks/browser';
import App from './App.tsx';
import './index.css';

if (process.env.NODE_ENV === 'development') {
  try {
    await worker.start({ quiet: true });
  } catch (error) {
    console.warn('Error while starting mock worker \n', error);
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
