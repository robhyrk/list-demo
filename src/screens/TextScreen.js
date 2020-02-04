import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, TextInput} from 'react-native';

const TextScreen = ({color, onIncrease, onDecrease}) => {
    const [name, setName] = useState('')
    return <View>
        <TextInput 
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newValue) => setName(newValue) }
        />
    <Text>My name is {name}</Text>
    </View>
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen