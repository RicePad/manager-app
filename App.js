import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import LoginForm from './src/components/LoginForm';


// Redux Setup
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
// User authentication
import firebase from 'firebase';

//Handles asynchoronus action creators
import thunk from 'redux-thunk';



const store = createStore(reducers, {}, applyMiddleware(thunk));
console.log('store.getState()', store.getState())


class App extends Component<Props> {
    componentWillMount(){
     
    }
  

  render() {
    return (
      <Provider store={store}>
        <View>
          <Header headerText="Manager App" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}



export default App;