import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getPosts, likePost, unlikePost } from '../actions/post'
import styles from '../styles'

class Home extends React.Component {

  componentDidMount() {
    this.props.getPosts()
  }

  likePost = (post) => {
    const { uid } = this.props.user
    if(post.likes.includes(uid)){
      this.props.unlikePost(post)
    } else {
      this.props.likePost(post)
    }
  }

  navigateMap = (item) => {
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
              <TouchableOpacity onPress={() => this.likePost(item)} >
                <Image style={styles.postPhoto} source={{uri: item.postPhoto}}/>
              </TouchableOpacity>
              <View style={styles.row}><Ionicons name='md-person-add' style={{margin: 5}} color={item.likes.includes(this.props.user.uid) ? 'springgreen' : 'gray'} size={25} />
                <Ionicons color='gray' style={{margin: 5}} name='ios-chatbubbles' size={25} />
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
  return bindActionCreators({ getPosts, likePost, unlikePost }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    post: state.post, 
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)


