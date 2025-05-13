import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App2 } from './App2';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App2 />
    </React.StrictMode>
  );
}
