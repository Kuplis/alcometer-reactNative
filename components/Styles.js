import { StyleSheet } from "react-native";

const LightStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#EED6FE',
  },

  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#7E5699',
    marginTop: 25,
    marginBottom: 25,
  },

  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7E5699',
    margin: 15,
  },

  textInput: {
    width: '65%',
    paddingLeft: 10,
    borderColor: '#7E5699',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },

  radioButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#EED6FE',
  },

  button: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#7E5699',
    padding: 10,
    margin: 15,
  },

  text: {
    fontSize: 20,
    color: '#fff',
  },

  result: {
    fontSize: 50,
    color: '#7E5699',
  },

  thumbDarkColor: '#7E5699',
  ios_backgroundColor: '#EED6FE',
  buttonColor: '#7E5699',
  iconColor: '#EED6FE',
  inputColor: '#fff',
  inputText: '#7E5699'
});

const DarkStyle = StyleSheet.create({
  container: {
    ...LightStyle.container,
    backgroundColor: '#7E5699',
  },

  header: {
    ...LightStyle.header,
    color: '#EED6FE',
  },

  label: {
    ...LightStyle.label,
    color: '#EED6FE',
  },

  textInput: {
    ...LightStyle.textInput,
    borderColor: '#EED6FE',
  },

  radioButtonView: {
    ...LightStyle.radioButtonView,

  },

  button: {
    ...LightStyle.button,
    backgroundColor: '#EED6FE',
  },

  text: {
    ...LightStyle.text,
    color: '#7E5699',
    fontWeight: 'bold',
  },

  result: {
    ...LightStyle.result,
    color: '#EED6FE',
  },

  thumbLightColor: '#7E5699',
  buttonColor: '#EED6FE',
  iconColor: '#7E5699',
  inputColor: '#fff',
  inputText: '#7E5699'
});



export{DarkStyle, LightStyle};