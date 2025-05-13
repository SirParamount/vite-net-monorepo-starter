import React from 'react';
import ReactDOM from 'react-dom/client';
import { App1 } from './App1';
import './index.css';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App1 />
    </React.StrictMode>
  );
}
