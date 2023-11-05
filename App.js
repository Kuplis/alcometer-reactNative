import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, ScrollView, Styleheet, Text, TextInput, View, Pressable, Switch, TouchableHighlight } from 'react-native';
import {DarkStyle, LightStyle} from './components/Styles.js';
import NumericInput from 'react-native-numeric-input';
import {RadioButton}from 'react-native-paper';


export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const currentStyle = darkMode ? DarkStyle : LightStyle;

  const [weight, setWeight] = useState(0);
  const [num, setNum] = useState(0);
  const sexes = ['Nainen', 'Mies'];
  const [sex, setSex] = useState(sexes[0]);

  return (
    <SafeAreaView style={currentStyle.container}>
      {/*<ScrollView> ei toimi */}
        {/* Toggle */}
        <Switch
          value={darkMode}
          onValueChange={() => setDarkMode(prev => !prev)}
          thumbColor={darkMode ? DarkStyle.thumbLightColor : LightStyle.thumbDarkColor}
          trackColor= {{false: DarkStyle.ios_backgroundColor, true: LightStyle.ios_backgroundColor}}
        />
        {/* Otsikko */}
        <Text style={currentStyle.header} >Alkometri</Text> 

        {/* Paino */}
        <Text style={currentStyle.label}>Kirjoita painosi kilogrammoina</Text>
        <TextInput
          keyboardType='numeric'
          value={weight}
          style={currentStyle.textInput}
          onChangeText={setWeight} // tarkista voiko näin tehdä vai tarviiko funktion
        />
        {/* Pullot */}
        <Text style={currentStyle.label}>Juomiesi pullojen määrä</Text>
        <NumericInput
          value={num}
          onChange={v => setNum(v)}
          minValue={0}
          rounded
          rightButtonBackgroundColor={currentStyle.buttonColor}
          leftButtonBackgroundColor={currentStyle.buttonColor}
          inputStyle={{backgroundColor: currentStyle.inputColor, color: currentStyle.inputText}}
          iconStyle={{color:currentStyle.iconColor}}
        />
        {/* Aika */}
        <Text style={currentStyle.label}>Juomiseen käytetty aika</Text>
        <NumericInput
          value={num}
          onChange={v => setNum(v)}
          minValue={0}
          rounded
          rightButtonBackgroundColor={currentStyle.buttonColor}
          leftButtonBackgroundColor={currentStyle.buttonColor}
          inputStyle={{backgroundColor: currentStyle.inputColor, color: currentStyle.inputText}}
          iconStyle={{color:currentStyle.iconColor}}
        />

        {/* Radiobuttonit, tätä tehdessä olin jo säätänyt kaikki värit, niin tässä ei oikein toimi tummalla teemalla saavutettavuus */}
        <Text style={currentStyle.label}>Sukupuolesi</Text>
        <RadioButton.Group value={sex} onValueChange={s => setSex(s)}>
          {sexes.map(s =>
            <View key={s} style={currentStyle.radioButtonView}>
              <RadioButton value={s}/>
              <Text>{s}</Text>
            </View>
              )}
        </RadioButton.Group>

        {/* Laske-nappula */}
        <TouchableHighlight 
          onPress={() => console.log('pressed')}
          style={currentStyle.button}>
            <Text style={currentStyle.text}>Laske</Text>
        </TouchableHighlight>

        {/* <Button title="Laske" style={currentStyle.button} 
        onPress={ () => calculate } /> */}
        
        {/* Tulos */}
        <Text style={currentStyle.result}>0</Text>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}


