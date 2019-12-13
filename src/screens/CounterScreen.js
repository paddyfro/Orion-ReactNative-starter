import React, {useReducer} from 'React';
import {View, Text, StyleSheet, Button} from 'react-native';

const reducer = (state, action)=>{
    //state === {count:number}
    //action === { type: 'increase' || 'decrease' , payload: 1 || -1}
    switch(action.type){
        case 'increase':
            return {...state, count: state.count + action.payload};
        case 'decrease':
            return {...state, count: state.count + action.payload};
        default:
            return state;
    }
};

const CounterScreen = () =>{
    const [state, dispatch] = useReducer(reducer, {count:0});
    const {count} = state;

    

    return(
        <View>
        <Button title='increase' onPress={() => {
            dispatch({ type: 'increase', payload: 1 })
           //dpnt do this
            // counter++;
        }} />
        <Button title='Decrease' onPress={() =>{
            //counter--;
            dispatch({ type: 'increase', payload: -1 })
        }} />
        <Text>Current Count: {count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;