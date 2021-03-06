import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import LoginForm from './src/components/LoginForm';
import RouterComponent from './RouterComponent';
import { 
  API_KEY, 
  AUTH_DOMAIN,
  DATABASE_URL, 
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSANGER_SENDER_ID   }from './secret.js'


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


class App extends Component{
    componentWillMount() {
     var config = {
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DATABASE_URL,
      projectId: PROJECT_ID,
      storageBucket: STORAGE_BUCKET ,
      messagingSenderId: MESSANGER_SENDER_ID
  };
  firebase.initializeApp(config);
    }
  

  render() {
    return (
      <Provider store={store}>
          <RouterComponent />
      </Provider>
    );
  }
}



export default App;