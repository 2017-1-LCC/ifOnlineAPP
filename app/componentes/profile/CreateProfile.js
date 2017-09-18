import React from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CreateForm from './CreateForm';

export default class CreateProfile extends React.Component {

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Novo Usuário</Text>
        </View>

        <View style={styles.formContainer}>
          <CreateForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#3498db',
  },
  logoContainer: {
    alignItems:'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  title: {  
    color: '#FFF',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9,
    fontSize:20
  }
})