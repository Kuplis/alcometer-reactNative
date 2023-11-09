import { StyleSheet } from "react-native";

const LightStyle = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#EED6FE',
  },

  scrollView: {
    alignItems: 'center',
    marginTop: 15,
  },

  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#7E5699',
    marginTop: 25,
    marginBottom: 15,
  },

  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7E5699',
    margin: 15,
  },

  textInput: {
    width: 200,
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
    color: '#EED6FE',
  },

  result: {
    fontSize: 50,
  },

  thumbDarkColor: '#7E5699',
  ios_backgroundColor: '#EED6FE',
  buttonColor: '#7E5699',
  iconColor: '#EED6FE',
  inputColor: '#fff',
  inputText: '#7E5699',
  //Result colors
  yourOk: 'green',
  notQuite: 'yellow',
  yourDrunk: 'red',

});

const DarkStyle = StyleSheet.create({
  container: {
    ...LightStyle.container,
    backgroundColor: '#7E5699',
  },
  scrollView: {
    ...LightStyle.scrollView,
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
  },

  thumbLightColor: '#7E5699',
  buttonColor: '#EED6FE',
  iconColor: '#7E5699',
  inputColor: '#fff',
  inputText: '#7E5699',
  //Result colors
  yourOk: 'green',
  notQuite: 'yellow',
  yourDrunk: 'red',
});


export { DarkStyle, LightStyle };