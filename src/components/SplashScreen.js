import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View 
} from 'react-native';


export default class SplashScreen extends Component {

    constructor(props) {
        super(props);
    }

    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                2000
            )
        )
    }

    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
            this.props.navigation.navigate('App');
        }
    }

    render() {
        return (
            <View style={styles.viewStyles}>
               <Image
                    source={require('../assets/images/logo.png')}
                    style={{ width: 250 }}  
                    resizeMode='contain'
                />
                <Image
                    source={require('../assets/images/loader.gif')}
                    style={{ width: 150 }}  
                    resizeMode='contain'
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({ 
    viewStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#343434'
    },
    textStyles: {
        color: 'white',
        fontSize: 72,
        fontWeight: 'bold',
        textAlign: "center"
    }
}); 
