import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getPosts } from '../actions/post'
import styles from '../styles'

class Home extends React.Component {
  componentDidMount() {
    this.props.getPosts()
  }

  navigateMap = (item) => {
    console.log(this.props.navigation)
    this.props.navigation.navigate('Map', 
      { location: item.postLocation }
    )
  }

  render() {
    if(this.props.post === null) return null
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.post.feed}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <View>
              <View style={[styles.row, styles.center]}>
                <View style={[styles.row, styles.center]}>
                  <Image style={styles.roundImage} source={{uri: item.photo}}/>
                  <View>
                    <Text>{item.username}</Text>
                    <TouchableOpacity onPress={() => this.navigateMap(item)} >
                      <Text>{item.postLocation ? item.postLocation.name : null}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Ionicons style={{margin: 5}} name='md-calendar' size={25} />
              </View>
              <Image style={styles.postPhoto} source={{uri: item.postPhoto}}/>
              <View style={styles.row}>
                <Ionicons style={{margin: 5}} name='md-person-add' size={25} />
                <Ionicons style={{margin: 5}} name='ios-chatbubbles' size={25} />
              </View>
              <Text>{item.postDescription}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getPosts }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    post: state.post
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home)

