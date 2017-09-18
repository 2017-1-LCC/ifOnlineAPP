export default class LogicaLogin {

  construtor() {
    
  }

  login(value) {
    if(value) {
      this.setState({isLoading:true});
      fetch('https://ifonline.herokuapp.com/login',{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
          username: value.username,
          password: value.password,
          typeUser: 'STUDENT'
        })
      })
      .then(response => response.json())
      .then(token => {
        //this.removeToken();
        //this._addInStorage(STORAGE_KEY,token.token);
        //this._addInStorage(STORAGE_USER,token.idUser);
        //this._addInStorage(STORAGE_TYPE_USER,token.typeUser);
        this.setState({isLoading:false});
        this.props.navigation.navigate('Profile',{dados:token});
      })
      .done()
    }
  }
}