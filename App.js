import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';

// Redux Setup
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

const store = createStore(reducers);
console.log('store.getState()', store.getState())


export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Header headerText="Manager App" />
        </View>
      </Provider>
    );
  }
}

