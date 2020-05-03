import React from 'react';
import About from '../../views/About'
import { createStackNavigator } from 'react-navigation-stack';
import NavigationDrawerStructure from '../NavigationDrawerStructure';

const About_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    About: {
      screen: About,
      navigationOptions: ({ navigation }) => ({
        title: 'NEWSER',
        headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#343434',
        },
        headerTintColor: '#fff',
      }),
    },
});

export default About_StackNavigator;