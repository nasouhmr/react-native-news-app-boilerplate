import React from "react";
import {
    View,
    Text,
    Image,
    Linking,
    StyleSheet,
    ScrollView
} from "react-native";

export default class About extends React.Component {
    render() {
        return (
            <ScrollView style={styles.scrollView}>
            <View style={styles.view}>
                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={require('../assets/images/logo.png')}
                />
                <Text style={styles.text}>
                    NEWSER is a news app based on
                    <Text style={{color: 'blue'}}onPress={() => Linking.openURL('https://newsapi.org/')}> News API </Text>
                    , which provides top heading news from many sources and categories.
                    {"\n"}{"\n"}
                    Author   : Nasouh Almrstani  
                    {"\n"}
                    Facebook : <Text style={{color: 'blue'}}onPress={() => Linking.openURL('https://www.facebook.com/nasouh.almrstani')}> nasouh.almrstani </Text>
                    {"\n"}
                    Github   : <Text style={{color: 'blue'}}onPress={() => Linking.openURL('https://github.com/nasouhmr')}> @nasouhmr </Text>
                </Text>                
            </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    image: {
        width: "100%", 
        height:250,
        overflow: "visible"
    }, 
    text: {
        fontSize: 18,
        marginTop: 15,
        padding: 15, 
    }
});