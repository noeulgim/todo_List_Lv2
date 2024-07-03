import Router from './router/router';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/config/store';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}/>
      <Router />
    </Provider>
  );
}

export default App;
