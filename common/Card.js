import React from 'react';
import { View, StyleSheet } from 'react-native';


const Card = (props) => {
  return(
    <View style={styles.cardStyle}>
      { props.children }
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
    cardStyle: {
      marginLeft: 18, //extern
      marginRight: 18,
      marginTop: 10,
      borderWidth:2,
      borderRadius: 5,
     //paddingLeft:"8%", // intern
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: 'black',
      shadowOpacity: 0.1
    }
  });

 