import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateDescription } from '../actions/post'
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles'

class Post extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
            style={styles.inputBox2}
            multiline = {true}
            //value={this.props.post.description}
            onChangeText={input => this.props.updateDescription(input)}
            placeholder = 'Descrição'
        />
        <Text>{'\n'}</Text>
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
