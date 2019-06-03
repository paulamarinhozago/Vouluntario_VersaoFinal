import React from 'react';
import styles from '../styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Location, Permissions } from 'expo';
import { updateDescription, updateLocation, uploadPost } from '../actions/post'
import { FlatList, Modal, SafeAreaView, Text, View, TextInput, TouchableOpacity, Keyboard, Image } from 'react-native';
const GOOGLE_API = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'

class Post extends React.Component {
  state = {
    showModal: false, 
    locations: []
  }

  post = () => {
    this.props.uploadPost()
    this.props.navigation.navigate('Home')
  }

  setLocation = (location) => {
    const place = {
      name: location.name,
      coords: {
        lat: location.geometry.location.lat,
        lng: location.geometry.location.lng
      }
    }
    this.setState({ showModal: false })
    this.props.updateLocation(place)
  }

  getLocations = async () => {
    this.setState({ showModal: true })
    const permission = await Permissions.askAsync(Permissions.LOCATION)
    if (permission.status === 'granted') {
      console.log(permission)
      const location = await Location.getCurrentPositionAsync()
      console.log(location)
      const url = `${GOOGLE_API}?location=${location.coords.latitude},${location.coords.longitude}&rankby=distance&key=${'AIzaSyCyrrMwcw9_XPoHx8m7FnMJ2NkGjBR8Zog'}`
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ locations: data.results })
      console.log( data )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal animationType='slide' transparent={false} visible={this.state.showModal}>
          <SafeAreaView style={[styles.container, styles.center]}>
            <FlatList
              keyExtractor={(item) => item.id}
              data={this.state.locations}
              renderItem={({ item }) => (
              <TouchableOpacity style={styles.border} onPress={() => this.setLocation(item)}>
                <Text style={styles.gray}>{item.name}</Text>
                <Text style={styles.gray}>{item.vicinity}</Text>
              </TouchableOpacity>
            )}/> 
          </SafeAreaView>
        </Modal>
      	<Image style={styles.postPhoto} source={{uri: this.props.post.photo }}/>
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
        <TouchableOpacity style={styles.border} onPress={this.getLocations}>
          <Text style={styles.gray}>{this.props.post.location ? this.props.post.location.name : 'Adicionar Localização'}</Text>
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