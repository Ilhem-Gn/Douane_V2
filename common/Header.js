import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import { black } from 'ansi-colors';

export default class Header extends Component {

    render(){
        return(
            
            <View style={styles.header}  >
                <Text style={styles.headerText} >
                   {this.props.children }
                </Text>          
        
    </View>
        );
    }

}

const styles = StyleSheet.create({
    header: {
        backgroundColor : '#536dfe',
        height : 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        
    },
    headerText: {
        //fontFamily: 'rosemary', 
        color: "#fff",
       fontSize: 26,
       fontWeight: '900',
       //fontWeight: 'bold',
       //borderColor: '#fff',
      // borderWidth: 2,
       padding: 20,
       marginTop:60,
       marginLeft:-230,
       paddingLeft: 40,
       paddingRight: 40,
      // backgroundColor: 'rgba(258,59,098,.1)' 
      }
    
});