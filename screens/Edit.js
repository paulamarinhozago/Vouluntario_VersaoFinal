import React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, Image, ImageBackground, Picker } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ImagePicker, Permissions } from 'expo';
import { updatePhoto, updateEmail, updatePassword, updateUsername, updateBio, signup, updateUser } from '../actions/user'
import styles from '../styles'

class Edit extends React.Component {
  
  onPress = () => {
      this.props.updateUser()
      this.props.navigation.goBack()
  }

  openLibrary = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (status === 'granted') {
      const image = await ImagePicker.launchImageLibraryAsync()
      if(!image.cancelled ){
        const url = await this.props.uploadPhoto(image)
        this.props.updatePhoto(url)
        console.log(url)
      }
    }
  }

  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.center} onPress={this.openLibrary} >
                <Image style={styles.roundImage} source={{uri: this.props.user.photo}}/>
                <Text style={styles.bold}>Carregar Foto</Text>
            </TouchableOpacity>
            <TextInput
                style={styles.inputBoxBlack}
                value={this.props.user.username}
                onChangeText={input => this.props.updateUsername(input)}
                placeholder = 'Nome de usuário'
            />
            <TouchableOpacity style={styles.button1} onPress={this.onPress}>
      		<Text>Done</Text>
      	    </TouchableOpacity>


            <Text>{'\n'}</Text>
        </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({updatePhoto, updateEmail, updatePassword, updateUsername, updateBio, signup, updateUser}, dispatch)
}
  
const mapStateToProps = (state) => {
    return {
      user: state.user
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps) (Edit)