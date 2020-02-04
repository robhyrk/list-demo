import React from 'react';
import { Text, StyleSheet, View, Button} from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return <View>
        <Text>{color}</Text>
        <Button onPress={()=> onIncrease()} title={`Increase ${color}`}></Button>
        <Button onPress={()=> onDecrease()} title={`Decrease ${color}`}></Button>
    </View>
}

const sttyles = StyleSheet.create()

export default ColorCounter