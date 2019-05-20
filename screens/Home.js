import React from 'react';
import { Text, View, Button } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { add, subtract } from '../actions'
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
        <Button title='Add' onPress={() => this.props.dispatch(add())} />
        <Button title='Subtract' onPress={() => this.props.dispatch(subtract())} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({add, subtract}, dispatch)
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

export default connect(mapStateToProps) (Home)

