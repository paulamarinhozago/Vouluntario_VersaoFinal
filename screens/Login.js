import React from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from '../styles'

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <TextInput
            value=''
            onChangeText={input => console.log(input)}
            placeholder = 'E-mail'
        />
        <TextInput
            value=''
            onChangeText={input => console.log(input)}
            placeholder = 'Password'
        />
      </View>
    );
  }
}