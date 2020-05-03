import React from 'react';
import WallStreet from '../../views/WallStreet'
import Details from '../../views/Details'
import { createStackNavigator } from 'react-navigation-stack';
import NavigationDrawerStructure from '../NavigationDrawerStructure';

const WallStreet_StackNavigator = createStackNavigator({
  WallStreet: {
    screen: WallStreet,
    navigationOptions: ({ navigation }) => ({
      title: 'Wall Street',
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

export default WallStreet_StackNavigator;