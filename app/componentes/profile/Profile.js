import React from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity, StatusBar, AsyncStorage } from 'react-native';

export default class Profile extends React.Component {

   async componentWillMount() {
    try {
      const token = await AsyncStorage.getItem('id_token');
      const idUser = await AsyncStorage.getItem('id_user');
      const typeUser = await AsyncStorage.getItem('type_user');
    } catch (error) {
      // Error retrieving data
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Estou no profile </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

})