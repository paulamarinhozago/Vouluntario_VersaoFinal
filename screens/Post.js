import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateDescription, uploadPost } from '../actions/post'
import { Text, View, TextInput, TouchableOpacity, Keyboard, Image } from 'react-native';
import styles from '../styles'

class Post extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.postPhoto} source={{uri: 'https://firebasestorage.googleapis.com/v0/b/vouluntario.appspot.com/o/ambiental.jpg?alt=media&token=061cfdf0-3f54-4f8c-99ac-6b6b7508cfea'}}
        />
        <TextInput
            style={styles.inputBox2}
            multiline = {true}
            returnKeyType = 'done'
            onSubmitEditing = {Keyboard.dismiss}
            onChangeText={text => this.props.updateDescription(text)}
            value={this.props.post.postDescription}
            placeholder = 'Descrição'
        />
        
        <TouchableOpacity style={styles.button_1} onPress={this.props.uploadPost} >
            <Text style={{color: 'white', fontSize:18, fontWeight:'bold'}}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateDescription, uploadPost }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    post: state.post,
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Post)