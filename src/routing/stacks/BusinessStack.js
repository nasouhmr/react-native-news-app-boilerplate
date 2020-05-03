import React from 'react';
import Business from '../../views/Business'
import Details from '../../views/Details'
import { createStackNavigator } from 'react-navigation-stack';
import NavigationDrawerStructure from '../NavigationDrawerStructure';

const Business_StackNavigator = createStackNavigator({
  Business: {
    screen: Business,
    navigationOptions: ({ navigation }) => ({
      title: 'Business',
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

export default Business_StackNavigator;