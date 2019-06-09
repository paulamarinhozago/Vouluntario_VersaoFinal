import React from 'react';
import styles from '../styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ImagePicker, Permissions } from 'expo';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { updatePhoto, updateEmail, updatePassword, updateUsername, updateBio, signup, updateUser } from '../actions/user'
import { uploadPhoto } from '../actions'


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
          <Text style={styles.bold}>Upload Photo</Text>
        </TouchableOpacity>
        <TextInput
        	style={styles.input}
        	value={this.props.user.username}
        	onChangeText={input => this.props.updateUsername(input)}
        	placeholder='Username'
        />
      	<TouchableOpacity style={styles.button_1} onPress={this.onPress}>
      		<Text style={{color: 'white', fontSize:15, fontWeight:'bold'}}>Salvar</Text>
      	</TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updatePhoto, uploadPhoto, updateUser, updateEmail, updatePassword, updateUsername, updateBio, signup }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)