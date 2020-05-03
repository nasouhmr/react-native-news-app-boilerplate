import React from 'react';
import Google from '../../views/Google'
import Details from '../../views/Details'
import { createStackNavigator } from 'react-navigation-stack';
import NavigationDrawerStructure from '../NavigationDrawerStructure';

const Google_StackNavigator = createStackNavigator({
  Google: {
    screen: Google,
    navigationOptions: ({ navigation }) => ({
      title: 'Google',
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#343434',
      },
      headerTintColor: '#fff',
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({      
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#343434',
      },
      headerTintColor: '#fff',
    }),
  }
});

export default Google_StackNavigator;