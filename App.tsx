import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';
import RootNav from './navigation/RootNav';

function App() {
  return (
    <Provider store={Store}>
      <RootNav />
    </Provider>
  );
}
export default App;
