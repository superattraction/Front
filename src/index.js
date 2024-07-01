import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Naver Maps API 스크립트를 동적으로 추가
const naverMapsClientId = process.env.REACT_APP_NAVER_MAPS_CLIENT_ID;
if (naverMapsClientId) {
  const script = document.createElement('script');
  script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${naverMapsClientId}&submodules=geocoder`;
  script.async = true;
  document.head.appendChild(script);
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();