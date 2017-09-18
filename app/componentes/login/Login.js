import React from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginForm from './LoginForm';

export default class Login extends React.Component {

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image 
          style={styles.logo}
          source={require('../../img/logo_ifba.jpg')} />

          <Text style={styles.title}>IF Online</Text>
        </View>

        <View style={styles.formContainer}>
          <LoginForm />
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
  logo: {
    width:100,
    height:100
  },
  title: {  
    color: '#FFF',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  }
})