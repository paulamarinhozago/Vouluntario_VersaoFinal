import React from 'react';
import firebase from 'firebase'
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux'
import styles from '../styles'

cclass Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.user.email}</Text>
        <Text>{this.props.user.username}</Text>
        <Button title='Logout' onPress={() => firebase.auth().signOut()} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.counter
  }
}

export default connect(mapStateToProps) (Profile)