import React from 'react';
import Tech from '../../views/Tech'
import Details from '../../views/Details'
import { createStackNavigator } from 'react-navigation-stack';
import NavigationDrawerStructure from '../NavigationDrawerStructure';

const Tech_StackNavigator = createStackNavigator({
  Tech: {
    screen: Tech,
    navigationOptions: ({ navigation }) => ({
      title: 'Technology',
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

export default Tech_StackNavigator;