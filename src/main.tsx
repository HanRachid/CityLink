import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {AuthProvider} from './AuthProvider.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
