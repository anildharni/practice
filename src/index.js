import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QuizAppContextProvider } from './components/store/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QuizAppContextProvider>
    <App />
  </QuizAppContextProvider>
);

