import React, { Component } from 'react';
import {
    Image,
    Text,
    View 
} from "react-native";
import NewsStyle from '../assets/css/News';
import moment from "moment"; 
 

export default class Details extends Component {    
    render() {
        const { navigation } = this.props; 
        return (
            <View style={NewsStyle.container}>
                <Text style={NewsStyle.title}>{navigation.getParam('data').item.title}</Text>             
                <View style={NewsStyle.dateSource}>
                    <Text style={[NewsStyle.source, this.themeColor()]}>{navigation.getParam('data').item.source.name}</Text>
                    <Text style={NewsStyle.date}>
                        {moment(navigation.getParam('data').item.publishedAt).startOf('hour').fromNow()}
                    </Text>
                </View>
                <Image
                    resizeMode='cover'
                    source={{ uri: navigation.getParam('data').item.urlToImage }}
                    style={{ width: "100%", height: 250 }}
                />
                <Text style={NewsStyle.authro}>By {navigation.getParam('data').item.author}</Text>
                <Text style={NewsStyle.body}>{navigation.getParam('data').item.content}</Text>  
            </View>
        );
    }

    themeColor() {
        const { navigation } = this.props; 
        if (navigation.getParam('theme') == 'red') {
            return (NewsStyle.red);
        }
        if (navigation.getParam('theme') == 'blue') {
            return (NewsStyle.blue);
        }
        if (navigation.getParam('theme') == 'orange') {
            return (NewsStyle.orange);
        }
        if (navigation.getParam('theme') == 'green') {
            return (NewsStyle.green);
        }
        if (navigation.getParam('theme') == 'purple') {
            return (NewsStyle.purple);
        }
    }
} 