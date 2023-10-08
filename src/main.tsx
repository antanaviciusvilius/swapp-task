import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { store } from './store/store.ts';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename={import.meta.env.DEV ? '/' : '/swapp-task/'}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
)
