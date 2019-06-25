import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    Button,
    TouchableOpacity
} from "react-native";

//import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


import LinearGradient from 'react-native-linear-gradient';
import Header from '../common/Header';
import MenuItem from '../common/MenuItem';
import Tarif from '../screens/Tarif';
import Map from '../screens/Map';
import News from '../screens/News';
import Statistique from '../screens/Statistique';
import HelpDesk from '../screens/HelpDesk';

import { createStackNavigator, createAppContainer } from "react-navigation";



class Home extends Component {


   

    render() {
        return (
           
            <View >
               
                   <Header itemImage= {require('../res/blue_BG.png')}  >H O M E</Header>
                      
                      <View style={styles.cont}>

                         <View style={styles.container} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Tarif')} >
                                 <Text style = {styles.button}>
                                       Tarif Douanier 
                                 </Text>
                            </TouchableOpacity>
                         </View>
                         <View style={styles.container} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Map')} >
                                 <Text style = {styles.button}>
                                       Map 
                                 </Text>
                            </TouchableOpacity>
                         </View>
                         <View style={styles.container} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('News')}>
                                 <Text style = {styles.button}>
                                        News 
                                 </Text>
                                 
                            </TouchableOpacity>
                         </View>
                         <View style={styles.container} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Statistique')}>
                                 <Text style = {styles.button}>
                                       Statistique 
                                 </Text>
                            </TouchableOpacity>
                         </View>
                         <View style={styles.container} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('HelpDesk')}>
                                 <Text style = {styles.button}>
                                        HelpDesk 
                                 </Text>
                            </TouchableOpacity>
                         </View>

                      </View>

                </View>
                     
         
           // < AppStackNavigator/>
        );
    }
}
export default Home;

const AppStackNavigator =createStackNavigator({
    Tarif_page:Tarif,
});

const styles = StyleSheet.create({

    cont:{
        alignItems: 'center',
        paddingTop: 53,
        //addingBottom: 0, 
    },
    container: {
        paddingTop:'3%',
        paddingBottom:'3%',

    },
    iconRight:{
        marginRight: 4,
    },
    menuContainer1: { //image
        height: '30%',
        width: '110%',
        flexDirection: 'row',
        flexWrap: 'wrap',
       justifyContent: 'space-around',
      // position:'[absolute', 'relative']',
      //justifyContent: 'center',
        marginTop: '-2.4%',
        marginRight: '-10%',
        marginLeft: '-6.99%', //9
       // paddingLeft: '3%',
       paddingRight:'10%',
       flexWrap: 'wrap',

        marginBottom: '-10%',

      },
    button:{
        color:'#64b5f6',
        borderWidth: 2,
        padding: 18,
        borderColor: '#c5cae9', 
        backgroundColor: 'transparent',
        borderRadius: 25,
        fontSize: 19,
        fontWeight: 'bold',
        height: 70,
        width: 200,
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
    },
      menuContainer2: { //image
        height: '38%',
        width: '200%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        //justifyContent: 'center',
        marginRight: '-10%',
        marginLeft: '1.7%',
        marginTop: '-2%',
        paddingRight:'7.2%',
        //marginLeft: '3%',
        marginBottom: '-7%',
    
      },
      menuContainer3: { //image
        height: '31%',
        width: '110%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        //justifyContent: 'space-between',
        marginTop: '-8.4%',
        //marginLeft: '3%',
        //marginTop: '-2%',
        
        marginRight: '-10%',
        marginLeft: '-6.99%', //9
       // paddingLeft: '3%',
       paddingRight:'10%',
       flexWrap: 'wrap',
       justifyContent: 'space-around',

       // marginBottom: '-10%',
    
      },

});