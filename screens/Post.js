import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateDescription } from '../actions'
import { Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import styles from '../styles'

class Post extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
            style={styles.inputBox2}
            multiline = {true}
            returnKeyType = 'done'
            onSubmitEditing = {Keyboard.dismiss}
            onChangeText={text => this.props.updateDescription(text)}
            value={this.props.post.text}
            placeholder = 'Descrição'
        />
        
        <TouchableOpacity style={styles.button_1} onPress={() => console.log("post")} >
            <Text style={{color: 'white', fontSize:18, fontWeight:'bold'}}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateDescription }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    post: state.post,
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Post)
