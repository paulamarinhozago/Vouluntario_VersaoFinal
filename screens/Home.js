import React from 'react';
import { Text, View, Button } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { add, subtract } from '../actions'
import firebase from 'firebase'
import styles from '../styles'

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home {this.props.counter}</Text>
        <Button title='Logout' onPress={() => firebase.auth().signOut()} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({add, subtract}, dispatch)
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home)

