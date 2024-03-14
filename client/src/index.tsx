import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/app';
import { EmoteContextProvider } from 'context/EmoteContext';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <EmoteContextProvider>
      <App />
    </EmoteContextProvider>
  </React.StrictMode>,
);
