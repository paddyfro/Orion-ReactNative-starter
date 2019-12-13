import React from 'react';
import { Text, StyleSheet,View, Button,TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  //console.log(props.navigation);
  return (
    <View style = {styles.viewStyle}>
    <Text style={styles.text}>Hi there! ya sexy bheast</Text>
    <Button 
    title="Go to components Demo"
    onPress={() => navigation.navigate('Components')}
    />
    <Button
    title = "Go to list demo"
    onPress = {() => navigation.navigate('List')}
    />
    <Button 
    title = "Go to Image Demo"
    onPress = {() => navigation.navigate('Image')}
    />
    <Button 
    title = "Go to Counter Demo"
    onPress = {() => navigation.navigate('Counter')}
    />
    <Button 
    title = "Go to Colours Demo"
    onPress = {() => navigation.navigate('Colour')}
    />
    <Button 
    title = "Go to Square Demo"
    onPress = {() => navigation.navigate('Square')}
    />
    <Button 
    title = "Go to TextScreen Demo"
    onPress = {() => navigation.navigate('Text')}
    />
    <Button 
    title = "Go to Box Demo"
    onPress = {() => navigation.navigate('Box')}
    />
    {/*
    <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
    <Text style={styles.text}>Go to List Demo</Text>
    <Text style={styles.text}>Go to List Demo</Text>
    <Text style={styles.text}>Go to List Demo</Text>
    </TouchableOpacity>
    */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  viewStyle:{
    justifyContent:'space-around',
    borderWidth:3,
    borderColor: 'black',
  }
});

export default HomeScreen;

