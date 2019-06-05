import React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, Image, ImageBackground, Picker } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, updateUsername, signup } from '../actions/user'
import styles from '../styles'

class Signup_2 extends React.Component {
  
  render() {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputBoxBlack}
                value={this.props.user.email}
                onChangeText={input => this.props.updateEmail(input)}
                placeholder = 'E-mail'
            />
            <TextInput
                style={styles.inputBoxBlack}
                value={this.props.user.password}
                onChangeText={input => this.props.updatePassword(input)}
                placeholder = 'Senha'
                secureTextEntry={true}
            />
            <TextInput
                style={styles.inputBoxBlack}
                value={this.props.user.username}
                onChangeText={input => this.props.updateUsername(input)}
                placeholder = 'Nome de usuário'
            />
            <Text>{'\n'}</Text>
        </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({updateEmail, updatePassword, updateUsername, signup}, dispatch)
}
  
const mapStateToProps = (state) => {
    return {
      user: state.user
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps) (Signup_2)