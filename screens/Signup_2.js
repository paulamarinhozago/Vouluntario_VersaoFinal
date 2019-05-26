import React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, Image, ImageBackground, Picker } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, updateUsername } from '../actions/user'
import styles from '../styles'

class Signup_Person extends React.Component {
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
                placeholder = 'Senha'
                secureTextEntry={true}
            />
            <TextInput
                style={styles.border}
                value={this.props.user.username}
                onChangeText={input => this.props.updateUsername(input)}
                placeholder = 'Nome de usuário'
            />
            <Text>{'\n'}</Text>
        
          <View style={{flexDirection: "row"}}>
            <TouchableOpacity title='Animais'>
              <Image
                source={require('../assets/animals.png')}
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/child.png')}
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/church.png')}
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/desease.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
          <Text>{'\n'}</Text>
          <View style={{flexDirection: "row"}}>
            <TouchableOpacity>
                <Image
                  source={require('../assets/education.png')}
                  style={styles.image}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../assets/environment.png')}
                  style={styles.image}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../assets/homeless.png')}
                  style={styles.image}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../assets/old.png')}
                  style={styles.image}
                />
              </TouchableOpacity>
            </View>
            <Text>{'\n'}</Text>

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