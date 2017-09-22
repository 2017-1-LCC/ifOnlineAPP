import React from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity, StatusBar, AsyncStorage, Alert } from 'react-native';
import {Actions} from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';

export default class LoginForm extends React.Component {

  constructor() {
    super();
    this.state = {
      username:null,
      password:null,
      name:null,
      birthDate:null,
      email:null,
      user:null,
      isLoading:false
    }
  }

  createUser() {
    if(!this.state.username || !this.state.password || !this.state.name || !this.state.email) return;
    
    this.setState({isLoading:true});
  //https://ifonline.herokuapp.com
    fetch('http://darkSide:3002/user',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        typeUser: 'STUDENT',
        name:this.state.name,
        birthDate:this.state.birthDate,
        user:null
      })
    })
    .then(response => response.json()) 
    .then(user => {
        this.setState({isLoading:false});
        Alert.alert("Usuário "+user.username+" cadastrado com sucesso!");
        Actions.Login()
    }) 
    .catch(error => console.log("ERROR"+error))
  }

  backToLogin() {
    Actions.Login()
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
            returnKeyType='next'
            style={styles.input}
            onSubmitEditing={() => this.password.focus()}
            onChangeText={(text) => this.setState({username:text})} 
          />

          <TextInput 
            placeholder="Senha"
            returnKeyType='next'
            secureTextEntry
            style={styles.input}
            ref={(input) => this.password = input}
            onChangeText={(text) => this.setState({password:text})}
          />

          <TextInput 
            placeholder="Nome Completo"
            returnKeyType='next'
            style={styles.input}
            ref={(input) => this.name = input}
            onChangeText={(text) => this.setState({name:text})}
          />

          <TextInput 
            placeholder="Email"
            returnKeyType='go'
            keyboardType='email-address'
            style={styles.input}
            ref={(input) => this.email= input}
            onChangeText={(text) => this.setState({email:text})}
          />
        </View>
        <TouchableOpacity 
          onPress={this.createUser.bind(this)}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={this.backToLogin.bind(this)}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>SAIR</Text>
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