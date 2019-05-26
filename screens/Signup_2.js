import React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, Image, ImageBackground, Picker } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, updateUsername } from '../actions/user'
import styles from '../styles'

class Signup_2 extends React.Component {
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
            <TextInput
                style={styles.inputBox}
                value={this.props.user.username}
                onChangeText={input => this.props.updateUsername(input)}
                placeholder = 'Nome de usuário'
            />
            <Text>{'\n'}</Text>
        
          <View style={{flexDirection: "row"}}>
            <TouchableOpacity>
              <Image
                source={require('../assets/animais.png')}
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/meioambiente.png')}
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/cancer.png')}
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/criancas.png')}
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/idosos.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
          <Text>{'\n'}</Text>
          <View style={{flexDirection: "row"}}>
            <TouchableOpacity>
                <Image
                  source={require('../assets/igreja.png')}
                  style={styles.image}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../assets/lgbt.png')}
                  style={styles.image}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../assets/mulheres.png')}
                  style={styles.image}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../assets/pedinte.png')}
                  style={styles.image}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../assets/deficiencia.png')}
                  style={styles.image}
                />
              </TouchableOpacity>
            </View>
            <Text>{'\n'}</Text>

            <TouchableOpacity style={styles.button_1} onPress={() => console.log(this.props.user)} >
                <Text style={{color: 'white', fontSize:18, fontWeight:'bold'}}>Signup</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>

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
  
export default connect(mapStateToProps, mapDispatchToProps) (Signup_2)