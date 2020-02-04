import React, {useReducer} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const COUNTER = 1

const reducer = (state, action) => {
    return {...state, count: state.count + action.payload}
}

const CounterScreen = () => {

const [state, dispatch] = useReducer(reducer, {count: 0})

    return (
        <View>
            <Button title="Increase" onPress={() => {
                dispatch({type: 'change_count', payload: COUNTER})
            }}/>
            <Button title="Decrease" onPress={() => {
                dispatch({type: 'change_count', payload: -COUNTER})
            }}/>
            <Text>Current Count:{state.count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default CounterScreen