import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './App';
import './index.css';
import { populateProduce } from './store/produce'
import { addCart } from './store/cart';

const store = configureStore()

if (import.meta.env.MODE !== "production") {
  window.store = store;
  window.populateProduce = populateProduce;
  window.addCart = addCart;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
