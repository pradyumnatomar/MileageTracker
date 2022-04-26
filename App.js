import React from 'react';
import {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import NavigationRoutes from './src/navigation';
import store from './src/redux/store';

export default App = () => (
  <Provider store={store}>
    <StatusBar barStyle={'light-content'} />
    <NavigationRoutes />
  </Provider>
);
