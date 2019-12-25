import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


import Home from './src/components/Home';
import Login from './src/components/Login';
import Register from './src/components/Register';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';



class App extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Login />
    );
  }
}

const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  Register: {screen: Register},
  Home: {screen: Home},
});

const Nav = createAppContainer(MainNavigator);

const styles = StyleSheet.create({
  container : {
    flex:1, 
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  }
})

export default Nav;