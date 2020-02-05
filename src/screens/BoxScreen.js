import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle1}>Child 2</Text>
            <Text style={styles.textStyle2}>Child 3</Text>
            <Text style={styles.textStyle3}>Child 4</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        height: 200
    },
    textStyle1: {
        borderWidth:1,
        borderColor:'red',
        top: 10
    },
    textStyle2: {
        borderWidth:1,
        borderColor:'red',
        flex: 1,
        alignSelf: 'center'
    },
    textStyle3: {
        borderWidth:1,
        borderColor:'red',
    }
})

export default BoxScreen