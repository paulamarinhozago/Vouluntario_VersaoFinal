import React from 'react';
import styles from '../styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ImagePicker, Location, Permissions } from 'expo';
import { NavigationEvents } from 'react-navigation';
import { updateDescription, updateLocation, uploadPost, updatePhoto } from '../actions/post'
import { FlatList, Modal, SafeAreaView, Text, View, TextInput, TouchableOpacity, Keyboard, KeyboardAvoidingView, Image, ScrollView } from 'react-native';
const GOOGLE_API = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'
import { uploadPhoto } from '../actions'

class Post extends React.Component {
  state = {
    showModal: false, 
    locations: []
  }

  componentDidMount(){
    this.getLocations()
  }

  post = () => {
    this.props.uploadPost()
    this.props.getPosts()
    this.props.navigation.navigate('Home')
  }

  onWillFocus = () => {
    if(!this.props.post.photo){
      this.openLibrary()
    }
  }

  openLibrary = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (status === 'granted') {
      const image = await ImagePicker.launchImageLibraryAsync()
      if(!image.cancelled){
        const url = await this.props.uploadPhoto(image)
        this.props.updatePhoto(url)
      }
    }
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
    const permission = await Permissions.askAsync(Permissions.LOCATION)
    if (permission.status === 'granted') {
      const location = await Location.getCurrentPositionAsync()
      const url = `${GOOGLE_API}?location=${location.coords.latitude},${location.coords.longitude}&rankby=distance&key=${'AIzaSyCyrrMwcw9_XPoHx8m7FnMJ2NkGjBR8Zog'}`
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ locations: data.results })
    }
  }

  render() {
    return (
      <KeyboardAvoidingView enabled behavior='padding' style={styles.container}>
      <View style={styles.container}>
      <ScrollView>
        <NavigationEvents onWillFocus={this.onWillFocus}/>
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
            style={styles.inputBox3}
            editable = {true}
            onChangeText={text => this.props.updateDescription(text)}
            value={this.props.post.postDescription}
            placeholder = 'Nome do Evento'
        />
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
        {
          this.state.locations.length > 0 ?        
          <TouchableOpacity style={styles.border} onPress={() => this.setState({ showModal: true })}>
            <Text style={styles.gray}>{this.props.post.location ? this.props.post.location.name : 'Adicionar Localização'}</Text>
          </TouchableOpacity> : null
        }
      	<TouchableOpacity style={styles.button_1} onPress={this.post} >
            <Text style={{color: 'white', fontSize:18, fontWeight:'bold'}}>Compartilhar</Text>
        </TouchableOpacity>
      </ScrollView>
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateDescription, uploadPost, updateLocation, uploadPhoto, updatePhoto }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    post: state.post,
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)