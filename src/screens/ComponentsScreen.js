//part 1 import labraries
import React from 'react';
import {Text, StyleSheet, View } from 'react-native';

// part 2 function to return jsx
const ComponentsScreen =() =>{
    const name = "Patrick";
return (
    <View>
<Text style={styles.textStyle}>Getting started with React Native</Text>
<Text style={styles.subHeaderStyle}>My name is {name}</Text>
</View>
);
};

//part 3 create stylesheet
const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45
    },
    subHeaderStyle:{
        fontSize:20
    }
});

//p[art 4 export to other part of proj
export default ComponentsScreen;
