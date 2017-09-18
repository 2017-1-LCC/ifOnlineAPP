import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './componentes/login/Login';
import Profile from './componentes/profile/Profile';
import CreateUser from './componentes/profile/CreateProfile';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene
            component={Login}
            hideNavBar={true}
            initial={true}
            key='Login'
            title='Login'
          />

          <Scene
            component={Profile}
            hideNavBar={true}
            key='Profile'
            title='Profile'
          />

          <Scene
            component={CreateUser}
            hideNavBar={true}
            key='CreateUser'
            title='Novo Usuário'
          />

        </Scene>
      </Router>
    );
  }
}
