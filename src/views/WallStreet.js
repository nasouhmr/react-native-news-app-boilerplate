import React from "react";
import {
    View,
    ActivityIndicator,
    FlatList 
} from "react-native";
import NewsStyle from '../assets/css/News'; 
import Article from '../components/Article';


export default class WallStreet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            refreshing: false,
            dataSource: []
        };
    }

    handleRefresh = () => {
        this.componentDidMount();
    };

    render() {
        if (this.state.loading) {
            return (
                <View style={NewsStyle.loader}>
                    <ActivityIndicator size="large" color="#006BB6" />
                </View>
            )
        }
        return (
            <View style={NewsStyle.container}>
                <FlatList
                    data={this.state.dataSource.articles}
                    keyExtractor={item => item.title.toString()}
                    renderItem={item => this.renderItem(item)}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                />
            </View>
        )
    }

    componentDidMount() {
        fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=b3330c3c691f41f1b55ad02c7bbabbf9")
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    loading: false,
                    dataSource: responseJson
                })
            })
            .catch(error => console.log(error)) //to catch the errors if any            
    } 

    renderItem = (data) => {
        return (
            <Article data={data} theme={"green"} navigation={this.props.navigation}/>
        )
    }

}
