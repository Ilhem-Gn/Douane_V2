import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    
} from "react-native";

class Map extends Component {
    render() {
        return (
                <View style={StyleSheet.container}>
                     <Text>Map</Text>
                </View>    
        );
    }
}
export default Map;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});