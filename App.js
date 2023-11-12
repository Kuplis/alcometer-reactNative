// Riina Laukkanen
import { useState } from 'react';
import { SafeAreaView, ScrollView, Alert, Text, TextInput, View, Switch, TouchableHighlight } from 'react-native';
import { DarkStyle, LightStyle } from './components/Styles.js';
import NumericInput from 'react-native-numeric-input';
import { RadioButton } from 'react-native-paper';


export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const currentStyle = darkMode ? DarkStyle : LightStyle;

  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const sexes = ['Nainen', 'Mies'];
  const [sex, setSex] = useState(sexes[0]);
  const [result, setResult] = useState(0);

  function calculate() {
    if (weight === '') {
      Alert.alert('Kirjoita painosi')
      return;
    }
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - burning * time
    let ans = 0
    if (sex === 'Nainen') {
      ans = gramsLeft / (weight * 0.6)
    }
    if (sex === 'Mies') {
      ans = gramsLeft / (weight * 0.7)
    }
    if (ans < 0) {
      setResult(0);
    } else {
      setResult(ans);
    }
  }

  return (
    <SafeAreaView style={currentStyle.container}>
      <ScrollView contentContainerStyle={currentStyle.scrollView}>
        {/* Toggle */}
        <Switch
          value={darkMode}
          onValueChange={() => setDarkMode(prev => !prev)}
          thumbColor={darkMode ? DarkStyle.thumbLightColor : LightStyle.thumbDarkColor}
          trackColor={{ false: DarkStyle.ios_backgroundColor, true: LightStyle.ios_backgroundColor }}
        />
        {/* Otsikko */}
        <Text style={currentStyle.header} >Alkometri</Text>

        {/* Paino */}
        <Text style={currentStyle.label}>Kirjoita painosi kilogrammoina</Text>
        <TextInput
          keyboardType='numeric'
          value={weight}
          style={currentStyle.textInput}
          onChangeText={setWeight}/>
          
        {/* Pullot */}
        <Text style={currentStyle.label}>Juomiesi pullojen määrä</Text>
        <NumericInput
          value={bottles}
          onChange={v => setBottles(v)}
          minValue={0}
          rounded
          rightButtonBackgroundColor={currentStyle.buttonColor}
          leftButtonBackgroundColor={currentStyle.buttonColor}
          inputStyle={{ backgroundColor: currentStyle.inputColor, color: currentStyle.inputText }}
          iconStyle={{ color: currentStyle.iconColor }}
        />
        {/* Aika */}
        <Text style={currentStyle.label}>Juomiseen käytetty aika tunteina</Text>
        <NumericInput
          value={time}
          onChange={v => setTime(v)}
          minValue={0}
          rounded
          rightButtonBackgroundColor={currentStyle.buttonColor}
          leftButtonBackgroundColor={currentStyle.buttonColor}
          inputStyle={{ backgroundColor: currentStyle.inputColor, color: currentStyle.inputText }}
          iconStyle={{ color: currentStyle.iconColor }}
        />

        {/* Radiobuttonit */}
        <Text style={currentStyle.label}>Sukupuolesi</Text>
        <RadioButton.Group value={sex} onValueChange={s => setSex(s)}>
          {sexes.map(s =>
            <View key={s} style={currentStyle.radioButtonView}>
              <RadioButton value={s} />
              <Text>{s}</Text>
            </View>
          )}
        </RadioButton.Group>

        {/* Laske-nappula */}
        <TouchableHighlight
          onPress={calculate}
          style={currentStyle.button}>
          <Text style={currentStyle.text}>Laske</Text>
        </TouchableHighlight>


        {/* Tulos */}
        <Text style={[currentStyle.result,
        result < 0.5 && { color: currentStyle.yourOk },
        result > 0.5 && result < 1.2 && { color: currentStyle.notQuite },
        result > 1.2 && { color: currentStyle.yourDrunk },
        ]}>
          {result.toFixed(2)}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}


