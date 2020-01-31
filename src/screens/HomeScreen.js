import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return <View>
      <Text style={styles.text}>Calimo</Text>
      <Button 
        title="Go To Components Demo"
        onPress={() => navigation.navigate('Components')}
        />
        <Button
        title="Go To List" 
        onPress={()=> navigation.navigate('List')}
        />
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
