import { StyleSheet, Dimensions } from 'react-native';
const  { width } = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff'
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  space: {
    justifyContent: 'space-between',
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end'
  },
  row: {
    flexDirection: 'row'
  },
  input: {
    width: width*.90,
    margin: 25,
    padding: 15,
    alignSelf: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 50,
    fontSize: 16,
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
    height:100,
    //backgroundColor: 'mediumorchid',
    borderColor: 'gray',
    borderWidth:1,
    borderRadius:5,
    paddingHorizontal:16,
    paddingVertical:10,
    fontSize:16,
    //color: 'white',
    marginVertical:10,
  },

  inputBox3: {
    width:300,
    height:35,
    //backgroundColor: 'mediumorchid',
    borderColor: 'gray',
    borderWidth:1,
    borderRadius:5,
    paddingHorizontal:16,
    paddingVertical:10,
    fontSize:16,
    //color: 'white',
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
    width: 300,
    height: 300,
    borderRadius: 5,

  },
  roundImage: {
    width: 40, 
    height: 40,
    borderRadius: 20,
    margin: 5
  },
  cameraButton: {
    height: 50, 
    width: 50,
    borderRadius: 25,
    alignSelf: 'center',
    backgroundColor: '#fff',
    marginBottom: 50
  },
  buttonSmall: {
    marginTop:20,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'fuchsia',
    borderRadius: 25,
    width:130,
    fontWeight: 'bold',
  },
});
