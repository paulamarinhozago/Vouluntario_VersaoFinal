import React from 'react';
import styles from '../styles'
import firebase from 'firebase';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Text, View, Image, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import { followUser, unfollowUser } from '../actions/user'

class Profile extends React.Component {
  follow = (user) => {
    if(user.followers.indexOf(this.props.user.uid) >= 0){
      this.props.unfollowUser(user)
    } else {
      this.props.followUser(user)
    }
  }

  render() {
    let user = {}
    const { state, navigate } = this.props.navigation
    if(state.routeName === 'Profile'){
      user = this.props.profile
    } else {
      user = this.props.user
    }
    if (!user.posts) return <ActivityIndicator style={styles.container2}/>
    return (
      <View style={styles.container2}>
        <View style={[styles.row, styles.space, {paddingHorizontal: 20}]}>
          <View style={styles.center}>
            <Image style={styles.roundImage} source={{uri: user.photo}}/>
            <Text>{user.username}</Text>
          </View>
          <View style={styles.center}>
            <Text style={styles.bold}>{user.posts.length}</Text>
            <Text>eventos</Text>
          </View>
          <View style={styles.center}>
            <Text style={styles.bold}>{user.followers.length}</Text>
            <Text>seguidores</Text>
          </View>
          <View style={styles.center}>
            <Text style={styles.bold}>{user.following.length}</Text>
            <Text>seguindo</Text>
          </View>
        </View>
        <View style={styles.center}>
        {
          state.routeName === 'MyProfile' ?
          <View style={styles.row}>
            <TouchableOpacity style={styles.buttonSmall} onPress={() => this.props.navigation.navigate('Edit')}>
              <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>Editar Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSmall} onPress={() => firebase.auth().signOut()}>
              <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>Sair</Text>
            </TouchableOpacity>
          </View> : 
          <View style={styles.row}>
            <TouchableOpacity style={styles.buttonSmall} onPress={() => this.follow(user)}>
              <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>{user.followers.indexOf(this.props.user.uid) >= 0 ? 'UnFollow' : 'Seguir'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSmall} onPress={() => this.props.navigation.navigate('Chat', user.uid )}>
              <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>Mensagem</Text>
            </TouchableOpacity>
          </View>
        }
        </View>
        <FlatList
          style={{paddingTop: 25}}
          horizontal={false}
          numColumns={1}
          data={user.posts}
          keyExtractor={(item) => JSON.stringify(item.date)}
          renderItem={({ item }) => <Image style={styles.squareLarge} source={{uri: item.postPhoto}}/> }/>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ followUser, unfollowUser }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    profile: state.profile
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)