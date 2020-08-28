/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { ReactNode } from 'react';
import Navigation from './src/Navigation';
import { ApolloProvider } from '@apollo/client';
import Client from './src/Client';

const App: () => ReactNode = () => {
  const NavigationContainer = Navigation.create();

  return (
    <ApolloProvider client={Client.apolloClient}>
      <NavigationContainer />
    </ApolloProvider>
  );
};

export default App;
