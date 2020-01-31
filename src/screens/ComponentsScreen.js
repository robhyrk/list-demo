import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

const ComponentsScreen = () => {
    return (
    <View>
        <Text style={styles.subHeader}>My Name is </Text>
        <Text style={styles.textStyle}>hello doofus face!</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24
    },
    subHeader: {
        fontSize: 48
    }
})

export default ComponentsScreen