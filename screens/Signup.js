import React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, updateUsername } from '../actions/user'
import styles from '../styles'

class Signup extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
            style={styles.border}
            value={this.props.user.email}
            onChangeText={input => this.props.updateEmail(input)}
            placeholder = 'E-mail'
        />
        <TextInput
            style={styles.border}
            value={this.props.user.password}
            onChangeText={input => this.props.updatePassword(input)}
            placeholder = 'Password'
            secureTextEntry={true}
        />
        <TextInput
            style={styles.border}
            value={this.props.user.username}
            onChangeText={input => this.props.updateUsername(input)}
            placeholder = 'Username'
        />
        <Text>{'\n'}</Text>
        <TouchableOpacity>
          <Image>
            source={require('../assets/animals.png')}
          </Image>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button} onPress={() => console.log(this.props.user)} >
            <Text>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({updateEmail, updatePassword, updateUsername}, dispatch)
}
  
const mapStateToProps = (state) => {
    return {
      user: state.user
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps) (Signup)