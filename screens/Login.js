import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword } from '../actions/user'
import styles from '../styles'

class Login extends React.Component {
  
  //verificar no banco de dados
  login = () => {
    //if(this.props.user.email) {
        this.props.navigation.navigate('Home')
    //}
  }

  render() {
    return (
      <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <TextInput
            style={styles.inputBox}
            value={this.props.user.email}
            onChangeText={input => this.props.updateEmail(input)}
            placeholder = 'E-mail'
        />
        <TextInput
            style={styles.inputBox}
            value={this.props.user.password}
            onChangeText={input => this.props.updatePassword(input)}
            placeholder = 'Senha'
            secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={() => this.login()} >
            <Text style={{color: 'white'}}>Entrar</Text>
        </TouchableOpacity>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Text style={{color: 'white'}}>{'Ainda não tem uma conta?'}</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')} >
            <Text style={{color: 'blue'}}>{'Cadastre-se aqui'}</Text>
        </TouchableOpacity>
        <Image 
          source={require('../assets/maos.png')}
          style={styles.bottomView}
        /> 
      </View>
      </ImageBackground>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({updateEmail, updatePassword}, dispatch)
}
  
const mapStateToProps = (state) => {
    return {
      user: state.user
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps) (Login)