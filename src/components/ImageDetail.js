import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail =({imageSource, title, imageScore}) =>{
   // console.log(props);
return <View>
    {/*<Image source={require('../../assets/beach.jpg')}/>*/}
    <Image source={imageSource}/>
    <Text>{title}</Text>
    <Text>Image score - {imageScore}</Text>
</View>
};

const styles = StyleSheet.create({});

export default ImageDetail;