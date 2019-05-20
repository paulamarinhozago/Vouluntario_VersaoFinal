import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux'
import styles from '../styles'

class Home extends React.Component {
  state = {
    count: 10
  }

  add = () => {
    console.log("adding")
    let num = this.state.count+1
    this.setState({count: num})
  }

  subtract = () => {
    console.log("subtracting")
    let num = this.state.count-1
    this.setState({count: num})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home {this.props.counter}</Text>
        <Text>{this.state.count}</Text>
        <Button title='Add' onPress={() => this.add()} />
        <Button title='Subtract' onPress={() => this.subtract()} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

export default connect(mapStateToProps) (Home)

