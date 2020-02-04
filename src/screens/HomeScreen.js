import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return <View>
      <Text style={styles.text}>Calimo</Text>
      {/* <Button 
        title="Go To Components Demo"
        onPress={() => navigation.navigate('Components')}
        />
        <Button
        title="Go To List" 
        onPress={()=> navigation.navigate('List')}
        />
        <Button 
        title="Go To Image Screen" 
        onPress={() => navigation.navigate('Image') }
        />
        <Button 
        title="Go To Counter Demo" 
        onPress={() => navigation.navigate('Counter') }
        />
        <Button 
        title="Go To Color Generator" 
        onPress={() => navigation.navigate('Color') }
        /> */}
        <Button 
        title="Go To Square Color Generator" 
        onPress={() => navigation.navigate('Square') }
        />

    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
