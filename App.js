import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/welcomeScreen';
//import {AppTabNavigator} from './components/AppTabNavigator';
//import {createAppContainor,createSwitchNavigator} from 'react-navigation';
//import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
  return (
    <View>
      <WelcomeScreen/>
    </View>
  );
  }
}



