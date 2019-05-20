import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail } from '../actions/user'
import styles from '../styles'

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <TextInput
            value={this.props.user}
            onChangeText={input => this.props.updateEmail(input)}
            placeholder = 'E-mail'
        />
        <TextInput
            value=''
            onChangeText={input => console.log(input)}
            placeholder = 'Password'
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({updateEmail}, dispatch)
}
  
const mapStateToProps = (state) => {
    return {
      user: state
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps) (Login)