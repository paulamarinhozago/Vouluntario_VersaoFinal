import { StyleSheet, Text, View } from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightsalmon',
      alignItems: 'center',
      justifyContent: 'center',
    },

    button: {
      marginTop:20,
      paddingVertical: 10,
      alignItems: 'center',
      backgroundColor: 'mistyrose',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      width: 200
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
      backgroundColor: 'mistyrose',
      borderRadius:25,
      paddingHorizontal:16,
      paddingVertical:10,
      fontSize:16,
      color: 'dimgray',
      marginVertical:10
    }
});
