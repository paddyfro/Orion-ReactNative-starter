import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxScreen = () =>{
    return (
        <View style = {styles.viewStyle}>
        <View style = {styles.viewStyleOne}/>
        <View style = {styles.viewStyleTwo}/>
        <View style = {styles.viewStyleThree}/>
        </View>
    );
};

const styles = StyleSheet.create({
viewStyle:{
    borderWidth:3,
    borderColor: 'black',
    flexDirection:"row",
    justifyContent:'space-around'
},
viewStyleOne:{
    height:100,
    width:100,
    backgroundColor:'red',
    alignSelf:'flex-start'
},
viewStyleTwo:{
    height:100,
    width:100,
    backgroundColor:'green',
    marginTop:100   
},
viewStyleThree:{
    height:100,
    width:100,
    backgroundColor:'purple',
},
});

export default BoxScreen;