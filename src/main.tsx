import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

if (process.env.NODE_ENV === 'development' && process.env.MOCKS === 'true') {
  try {
    await import('./mocks/browser').then(async (module) => {
      const { worker } = module;
      await worker.start({ quiet: true });
    });
  } catch (error) {
    console.warn('Error while starting mock worker \n', error);
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
