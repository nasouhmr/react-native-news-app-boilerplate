import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

class NavigationDrawerStructure extends Component {
    //Structure for the navigatin Drawer
    toggleDrawer = () => {
      //Props to open/close the drawer
      this.props.navigationProps.toggleDrawer();
    };
    render() {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            {/*Donute Button Image */}
            <Image
              source={require('../assets/images/drawer.png')}
              style={{ width: 25, height: 25, marginLeft: 15 }}
            />
          </TouchableOpacity>
        </View>
      );
    }
}

export default NavigationDrawerStructure;