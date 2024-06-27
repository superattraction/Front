import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const externalScriptUrl = process.env.REACT_APP_NAVER_MAPS_CLIENT_ID;
if (externalScriptUrl) {
  const script = document.createElement('script');
  script.src = externalScriptUrl;
  script.async = true;
  document.body.appendChild(script);
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </>
);
reportWebVitals();