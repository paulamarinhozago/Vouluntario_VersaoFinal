import React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, Image, ImageBackground, Picker } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, updateUsername, updateType } from '../actions/user'
import styles from '../styles'

class Signup extends React.Component {
  render() {
    return (
    <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
    <View style={styles.container}>
      <Text  style={{color: 'white'}}>{'Como você gostaria de se cadastrar?'}</Text>
      <TouchableOpacity style={styles.button_2} onPress={() => this.props.updateType(1) && this.props.navigation.navigate('Signup_2')} >
          <Text style={{color: 'white', fontSize:18, fontWeight:'bold'}}>Pessoa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_2} onPress={() => this.props.updateType(2)} >
          <Text style={{color: 'white', fontSize:18, fontWeight:'bold'}}>ONG</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_2} onPress={() => this.props.updateType(3)} >
          <Text style={{color: 'white', fontSize:18, fontWeight:'bold'}}>Empresa</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({updateEmail, updatePassword, updateUsername, updateType}, dispatch)
}
  
const mapStateToProps = (state) => {
    return {
      user: state.user
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps) (Signup)