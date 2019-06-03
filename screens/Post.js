import React from 'react';
import styles from '../styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Location, Permissions } from 'expo';
import { updateDescription, updateLocation, uploadPost } from '../actions/post'
import { Modal, SafeAreaView, Text, View, TextInput, TouchableOpacity, Keyboard, Image } from 'react-native';


class Post extends React.Component {
  state = {
    showModal: false
  }

  post = () => {
    this.props.uploadPost()
    this.props.navigation.navigate('Home')
  }

  setLocation = (location) => {
    this.setState({ showModal: false })
    this.props.updateLocation(location)
  }

  modal = () => {
    return (
      <Modal animationType='slide' transparent={false} visible={this.state.showModal}>
        <SafeAreaView style={[styles.container, styles.center]}>
          <TouchableOpacity style={styles.border} onPress={() => this.setLocation('Philadelphia')}>
            <Text style={styles.gray}>Philadelphia</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.modal()}
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
        <TouchableOpacity style={styles.border} onPress={() => this.setState({showModal: true})}>
          <Text style={styles.gray}>{this.props.post.location ? this.props.post.location : 'Add a Location'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_1} onPress={this.post} >
            <Text style={{color: 'white', fontSize:18, fontWeight:'bold'}}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateDescription, updateLocation, uploadPost }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    post: state.post,
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)