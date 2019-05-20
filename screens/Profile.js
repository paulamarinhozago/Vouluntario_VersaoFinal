import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'
import styles from '../styles'

class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    );
  }
}
