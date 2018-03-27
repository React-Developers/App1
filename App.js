import React, { Component } from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { Button } from 'react-native';

const geraFraseAleatoria = () => {
  var numero_aleatorio = Math.floor(Math.random()*10);

  frases = ["Kuso 糞","Baka 馬鹿","Oni 鬼","Aho 阿保", "Doji ドジ", "Tawake-mono たわけ者", "Busu ブス", "Kimoi キモい", "ketsunoana けつの穴", "Onani オナニー"]

  alert(frases[numero_aleatorio]);
}

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>10 palavrões em japonês para ser mais amado</Text>
        <Button 
          title="Aperta aí desgraça"
          onPress={geraFraseAleatoria}
        />
      </View>
    );
  }
}