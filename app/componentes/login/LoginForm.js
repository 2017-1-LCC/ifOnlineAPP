import React from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity, StatusBar, AsyncStorage } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {Actions} from 'react-native-router-flux';

export default class LoginForm extends React.Component {

  constructor() {
    super();
    this.state = {isLoading:false, username:null, password:null}
  }

  userSingUp() {
    if(!this.state.username || !this.state.password) return;
    this.setState({isLoading:true});
    fetch('https://ifonline.herokuapp.com/login',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
    .then(response => response.json())
    .then(response => {
      this.saveItem('id_token',response.token);
      this.saveItem('id_user',response.idUser);
      this.saveItem('type_user',response.typeUser);
      this.setState({isLoading:false});
      Actions.Profile()
    })
    .catch(error => console.log(error))
    .done()
  }

  newUser() {
    Actions.CreateUser()
  }

  async saveItem(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  }

  render() {
    if(!this.state.isLoading) {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle='light-content'
        />
        <View style={styles.containerInput}>
          <TextInput 
            placeholder='Usuário'
            placeholderTextColor='rgba(255,255,255,0.7)'
            returnKeyType='next'
            style={styles.input}
            onSubmitEditing={() => this.passwordInput.focus()}
            onChangeText={(text) => this.setState({username:text})}
          />

          <TextInput 
            placeholder="Senha"
            placeholderTextColor='rgba(255,255,255,0.7)'
            returnKeyType='go'
            secureTextEntry
            style={styles.input}
            ref={(input) => this.passwordInput= input}
            onChangeText={(text) => this.setState({password:text})}
          />
        </View>
        <TouchableOpacity 
          onPress={this.userSingUp.bind(this)}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={this.newUser.bind(this)}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    );
    } else {
        return (
          <View style={{ flex: 1 }}>
            <Spinner visible={this.state.isLoading} color="#c0392b" overlayColor="#27ae60"/>
          </View>
        )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  containerInput: {
    marginBottom:20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    marginBottom: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
})