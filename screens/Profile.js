import React from 'react';
import firebase from 'firebase'
import { Text, View, Button, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import styles from '../styles'

class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        <Image style={styles.roundImage} source={{uri: this.props.user.photo}}/>
        <Text>{this.props.user.email}</Text>
        <Text>{this.props.user.username}</Text>
        <TouchableOpacity style={styles.buttonSmall} onPress={() => this.props.navigation.navigate('Edit')}>
          <Text style={{color:'white', fontSize:15, fontWeight:'bold'}}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSmall} onPress={() => firebase.auth().signOut()}>
          <Text style={{color:'white', fontSize:15, fontWeight:'bold'}}>Sair</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)