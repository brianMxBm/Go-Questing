import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';
import RootNavigator from './navigation/RootNavigation';

function App() {
  return (
    <Provider store={Store}>
      <RootNavigator />
    </Provider>
  );
}
export default App;
