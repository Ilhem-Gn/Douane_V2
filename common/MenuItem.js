import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Tarif from '../screens/Tarif';

import { Button } from 'react-native';




export default class MenuItem extends React.Component {
    render() {
        
      return (
        <Button  onPress={this.props.onPress} style={styles.btn}>
         
              <Text style={styles.text}>{this.props.title}</Text>
               
        </Button>
          
      );
    }
  }
          // en press react-native



const styles = StyleSheet.create({
    menuItem: {
        width: '33.333333%' ,
        height: '50%' ,
        padding: 20 ,
       // borderColor: '#1A237E',
       // backgroundColor: '#fff',
       shadowColor: 'black',
       shadowOffset: { width:6, height: 4 },
       shadowOpacity: 1,
       shadowRadius: 2,  
       elevation: 5,
       

    },
    /*shadow: {
      shadowColor: '#202020',
      //shadowOffset: {width: 2, height:4},
      shadowRadius: 5,
      shadowOpacity: 1,

    },*/
    image: {
        width: '160%',
        height: '180%' ,
        opacity: 0.8 ,
        borderColor : 'transparent',
        borderWidth: 3,
        borderRadius: 20,
        //borderColor: '#1A237E',
       shadowColor: 'black',
        shadowOffset: {
           width: 2,
           height: 3
        },
         shadowRadius: 5,
         shadowOpacity: 1.0
     /*
         // android (Android +5.0)
         elevation: 3,*/
       },
    btn: {
        color:"#866ec7"
        
    },
    
    view: {
        position: 'absolute',
        backgroundColor: 'red',
        /*shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,*/
      },
      
      touchable: {
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset:{  width: 10,  height: 10,  }, //ess
        shadowColor: 'black',
        shadowOpacity: 1.0,
      },
      text: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
         // child
        //bottom: -65, // position where you want
        //left: 36
        
      },

});

