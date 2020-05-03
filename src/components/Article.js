import React, { Component } from 'react';
import NewsStyle from '../assets/css/News';
import {
    Image,
    View, 
    Text,
    TouchableOpacity
} from "react-native";
import moment from "moment"; 


export default class Article extends Component {

    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <TouchableOpacity style={NewsStyle.item} onPress={this.viewPost.bind(this, this.props.data)}>
                <Text style={NewsStyle.title}>{this.props.data.item.title}</Text>
                <View style={NewsStyle.dateSource}>
                    <Text style={[NewsStyle.source, this.themeColor()]}>{this.props.data.item.source.name}</Text>
                    <Text style={NewsStyle.date}>
                        {moment(this.props.data.item.publishedAt).startOf('hour').fromNow()}
                    </Text>
                </View>
                <Image
                    resizeMode='cover'
                    source={{ uri: this.props.data.item.urlToImage }}
                    style={{ width: "100%", height: 250 }}
                />
                <Text style={NewsStyle.authro}>By {this.props.data.item.author}</Text>
                <Text style={NewsStyle.body}>{this.props.data.item.description}</Text>              
            </TouchableOpacity>);
    }

    viewPost = (item) => {
        this.props.navigation.navigate('Details', {
            data: item,
            theme:this.props.theme
        });
    }

    themeColor() {
        if (this.props.theme == 'red') {
            return (NewsStyle.red);
        }
        if (this.props.theme == 'blue') {
            return (NewsStyle.blue);
        }
        if (this.props.theme == 'orange') {
            return (NewsStyle.orange);
        }
        if (this.props.theme == 'green') {
            return (NewsStyle.green);
        }
        if (this.props.theme == 'purple') {
            return (NewsStyle.purple);
        }
    }

}
