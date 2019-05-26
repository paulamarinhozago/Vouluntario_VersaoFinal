import React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, Image, ImageBackground, Picker } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, updateUsername } from '../actions/user'
import styles from '../styles'

class Signup extends React.Component {
  render() {
    return (
    <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
    <View style={styles.container}>
      <Text>{'Como você gostaria de se cadastrar?'}</Text>
      <TouchableOpacity style={styles.button} onPress={() => console.log(this.props.user)} >
          <Text>Pessoa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => console.log(this.props.user)} >
          <Text>ONG</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => console.log(this.props.user)} >
          <Text>Empresa</Text>
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