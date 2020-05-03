import React from 'react';
import Home from '../../views/BitCoin'
import Details from '../../views/Details'
import { createStackNavigator } from 'react-navigation-stack';
import NavigationDrawerStructure from '../NavigationDrawerStructure';

const Home_StackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Bitcoin',
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

export default Home_StackNavigator;