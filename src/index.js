import React from 'react';
import ReactDOM from 'react-dom';
import  App from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import GlobalStyle from './stlyles/style';
import 'modern-normalize/modern-normalize.css';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename='/Frontend-Project-SlimMom/'>
          <App />
          <GlobalStyle/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
