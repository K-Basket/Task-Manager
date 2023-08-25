import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.scss';
// import { Provider } from 'react-redux';
// import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
//<React.StrictMode>
    //<Provider store={store}> 
      //<PersistGate loading={null} persistor={persistor}> 
        <BrowserRouter basename = 'Task-Manager'>
          <App />
        </BrowserRouter>
     // </PersistGate> 
    // </Provider> 
  //</React.StrictMode>
);

// basename="/Task-Manager"