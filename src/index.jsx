import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './Redux/store/configureStore';

const store = configureStore();
console.log('state', store.getState());

store.subscribe(() => {
   console.log('state update', store.getState());
});

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>,
   document.getElementById('root'),
);
