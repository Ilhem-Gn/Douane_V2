import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, TextInput, ImageBackground, TouchableOpacity, Alert, Button, Image
    
} from "react-native";
import Header from '../common/Header';
import { createStackNavigator, createAppContainer } from "react-navigation";


class Produit extends React.Component {

            render(){
                return(
            <View>
                  
                     <Header itemImage= {require('../res/book2.jpg')} >Produit</Header>
                 
           
              
              <View style = {styles.cont} >
                            <TouchableOpacity>
                                
                                 <Text style = {styles.button}>
                                     Afficher
                                 </Text>

                            </TouchableOpacity>
             </View>
     
            </View>
        );
    }
}



  const AppNavigator = createStackNavigator({
    Produit: {
      screen: Produit
    }
  });
export default Produit;

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
      },

     
    
    cont:{
        alignItems: 'center',
        paddingTop: 28,
        paddingBottom:0,
        
       
    },

    cont2:{
    shadowColor: 'rgba(46, 29, 157, 0.7)',
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 20 ,
    shadowOffset : { width: 1, height: 13},
    
    },



    tail: {
        backgroundColor : 'pink',
        height : 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text2: {
       /// fontSize: 15,
        //fontWeight: '100',
        //fontSize: 20,
        // backgroundColor : "#E4E4DC",
         //textDecorationLine: 'underline',
         borderRadius: 25 ,
         color: 'black',
         //height: 50, width: 100
         
        
	

    },
    
    button:{
        color:'#fff',
        borderWidth: 2,
        padding: 20,
        borderColor: 'transparent', 
        backgroundColor: '#9fa8da',
        borderRadius: 60,
        fontSize: 19,
        fontWeight: 'bold',
        height: 60,
        width: 200,
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        
    },

    MainContainer :{
 
        // Setting up View inside content in Vertically center.
        //justifyContent: 'center',
        //to make it in the center of page
        flex:1,
        //between text and border
        margin: 15,
        paddingTop:'20%',
        paddingBottom:3
         
        },
         
        TextInputStyleClass:{
         
        // Setting up Hint Align center.
        textAlign: 'center',
         
        // Setting up TextInput height as 50 pixel.
        height: 55,
        width:310,
        marginLeft: 33,
        fontSize: 20,
         
        // Set border width.
         borderWidth: 2,
         
         // Set border Hex Color Code Here.
         borderColor: '#c5cae9',
         
        // Set border Radius.
         borderRadius: 25 ,
         
        //Set background color of Text Input.
        // backgroundColor : "#E4E4DC",

         shadowOpacity: 0.75,
         shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 0, width: 0 },
         
        },
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
});