import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
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
            <Text color='white'>Entrar</Text>
        </TouchableOpacity>
        <Text>{'\n'}</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')} >
            <Text style={{color: 'blue'}}>{'Cadastrar'}</Text>
        </TouchableOpacity>
      </View>
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