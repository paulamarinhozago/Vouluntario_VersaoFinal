import { StyleSheet, Text, View } from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    button_1: {
      marginTop:20,
      paddingVertical: 10,
      alignItems: 'center',
      backgroundColor: 'fuchsia',
      borderRadius: 25,
      width:200,
      fontWeight: 'bold',
    },

    button_2: {
      marginTop:20,
      paddingVertical: 10,
      alignItems: 'center',
      backgroundColor: 'mediumorchid',
      borderRadius: 25,
      width:200,
    },

    image: {
      height: 55,
      width: 55
    },

    border: {
      width: '85%',
      margin:10,
      padding: 15,
      fontSize: 16,
      borderColor: 'gray',
      borderBottomWidth: 1,
      textAlign: 'center'
    },

    inputBox: {
      width:300,
      backgroundColor: 'mediumorchid',
      borderRadius:25,
      paddingHorizontal:16,
      paddingVertical:10,
      fontSize:16,
      color: 'white',
      marginVertical:10
    },

    inputBox2: {
      width:300,
      height:150,
      backgroundColor: 'mediumorchid',
      borderRadius:25,
      paddingHorizontal:16,
      paddingVertical:10,
      fontSize:16,
      color: 'white',
      marginVertical:10,
    },

    bottomView:{
      width: '100%', 
      height: 120, 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
    },

    postPhoto: {
      width: 100,
      height: 100,
      borderRadius: 25,
      


    }
});
