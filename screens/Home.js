import React from 'react';
import { Text, View, Button } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getPosts } from '../actions/post'
import styles from '../styles'

class Home extends React.Component {
  componentDidMount() {
    this.props.getPosts()
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Home {this.props.counter}</Text>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getPosts}, dispatch)
}

const mapStateToProps = (state) => {
  return {
    post: state.post
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home)

