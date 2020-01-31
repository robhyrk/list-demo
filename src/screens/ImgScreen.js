import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImgScreen = () => {
    return (
    <View>
        <ImageDetail score="8" title="Forest" imageSource={require('../../assets/images/forest.jpg')}/>
        <ImageDetail score="9" title="Beach" imageSource={require('../../assets/images/beach.jpg')}/>
        <ImageDetail score="1" title="Mountains" imageSource={require('../../assets/images/mountain.jpg')}/>
    </View>
    )
}

const styles = StyleSheet.create({
})

export default ImgScreen