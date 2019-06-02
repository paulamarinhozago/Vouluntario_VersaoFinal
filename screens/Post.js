import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateDescription, uploadPost } from '../actions/post'
import { Text, View, TextInput, TouchableOpacity, Keyboard, Image } from 'react-native';
import styles from '../styles'

class Post extends React.Component {
  post = () => {
    this.props.uploadPost()
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.postPhoto} source={{uri: this.props.post.photo}}/>
        <TextInput
            style={styles.inputBox2}
            multiline = {true}
            editable = {true}
            returnKeyType = 'done'
            onSubmitEditing = {Keyboard.dismiss}

            onChangeText={text => this.props.updateDescription(text)}
            value={this.props.post.postDescription}
            placeholder = 'Descrição'
        />
        
        <TouchableOpacity style={styles.button_1} onPress={this.post} >
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

export default connect(mapStateToProps, mapDispatchToProps)(Post)