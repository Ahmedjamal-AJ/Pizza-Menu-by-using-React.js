import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Detail from './Components/Detail';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div>
      <App />
      <Detail />
    </div>
  </React.StrictMode>
);

reportWebVitals();

