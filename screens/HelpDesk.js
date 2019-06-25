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
    Dimensions,Button,AppRegistry, TouchableOpacity
} from "react-native";


import Card from '../common/Card';
import CardItem from '../common/CardItem';
import Header from '../common/Header';
import Input from '../common/Input';


class HelpDesk extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '', textname:'' };
        }
      
        clearText(){
          this.setState({text:'',textname:''})
        }


    render() {
        return (
            <View>

                <Header itemImage= {require('../res/blue_BG.png')}  >HelpDesk</Header>

                <Text style={styles.txt}>Reclamation</Text>

               <Card>
                  <CardItem>
                   
                     <Input
                          label='Nom'
                          placeholder='Entrer votre nom'
                          secureTextEntry={false}
                         onChangeText={(textname) => this.setState({textname})}
                        value={this.state.text}
                     />
                  </CardItem>

                  <CardItem>
                   
                     <Input
                          label='Prenom'
                          placeholder='Entrer votre prenom'
                          secureTextEntry={false}
                          onChangeText={(username) => this.setState({ username  }) }
                     />
                  </CardItem>

                  <CardItem>
                   
                     <Input
                          label='Adresse'
                          placeholder='Entrer votre adresse'
                          secureTextEntry={false}
                          onChangeText={(username) => this.setState({ username  }) }
                     />
                  </CardItem>

                  <CardItem>
                   
                     <Input
                          label='N Telephone'
                          placeholder='Enter votre Num_Tel'
                          secureTextEntry={false}
                          onChangeText={(username) => this.setState({ username  }) }
                     />
                  </CardItem>

                  <CardItem>
                   
                     <Input
                          label='Structure  '
                          placeholder='Entrer la Structure concernee'
                          secureTextEntry={false}
                          onChangeText={(username) => this.setState({ username  }) }
                     />
                  </CardItem>


                  <CardItem>
                   
                  <View style={styles.textAreaContainer} >
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Entrer votre reclamation"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}

                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                     />
                </View>
                </CardItem>
               </Card> 


                       <View style = {styles.cont} >
                            <TouchableOpacity   onPress={()=>this.clearText()} style={styles.btnd} 
                            >
                                 <Text style = {styles.button}>
                                     Envoyer
                                 </Text>
                            </TouchableOpacity>

                            <TouchableOpacity   onPress={()=>this.clearText()} 
                            style={paddingLeft='100'}
                            >
                                 <Text style = {styles.button}>
                                     Annuler
                                 </Text>
                            </TouchableOpacity>
                </View>            
                 </View>

            
        );
    }
}

//AppRegistry.registerComponent('clear-text', () => HelpDesk);


export default HelpDesk;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
       justifyContent: 'space-around',
    },
    textAreaContainer: {
        borderColor: "transparent",
        borderWidth: 1,
        padding: 5
      },
      textArea: {
        height: 120,
        justifyContent: "flex-start",
        fontSize: 17,
      },
      txt:{
        color:"#866ec7",
        fontSize: 26,
        marginTop: 12,
        marginBottom: 12,
        fontStyle:"italic",
        fontWeight:"bold",
        textAlign:"center"
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
         width: 140,
         textAlign: 'center',
         justifyContent: 'center',
         fontFamily: 'sans-serif',
         
     },
     cont:{
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 28,
      paddingBottom:0,
  },
  btnd:{
   paddingLeft: 70,
  }

});