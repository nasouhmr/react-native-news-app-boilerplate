import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff"
    },
    list: {
        paddingVertical: 4,
        margin: 5,
        backgroundColor: "#ffffff"
    },
    item: {
        backgroundColor: '#fff',
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderBottomColor: '#e7e7e7',
        borderTopColor: '#e7e7e7',
        paddingTop: 5,
        paddingBottom: 5,
    },
    title: {
        paddingLeft: 10,
        paddingRight: 10,
        textTransform: "uppercase",
        fontSize: 18,
        marginTop: 5,
        fontWeight: 'bold'
    },
    orange: {
        backgroundColor: '#FF6400'
    },
    purple: {
        backgroundColor: '#7c00f3'
    },
    blue: {
        backgroundColor: '#0057de'
    },
    red: {
        backgroundColor: '#C21912'
    },
    green: {
        backgroundColor: '#009658'
    },
    dateSource: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 15,
        marginTop: 10,
        marginLeft: 10
    },
    source: {
        alignSelf: 'flex-start',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        borderRadius: 2,
        color: '#ffffff'
    },
    date: {
        fontSize: 12,
        display: 'flex',
        marginLeft: 10,
        marginTop: 3,
        color: "#666",
        textAlign: 'right',
        textTransform: 'uppercase'
    },
    authro: {
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 5,
        fontSize: 16,
        color: "#666",
        textTransform: 'uppercase'
    },
    body: {
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
        fontSize: 18,
        textAlign: 'justify'
    }
});