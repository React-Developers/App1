import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Alert } from 'react-native';

const geraFraseAleatoria = () => {
  var numero_aleatorio = Math.floor(Math.random()*10);

  PalavraBr = ["Rede de Pesca - Gyomō","Espada - Ken","Sapato - Kutsu", "Comércio - Bōeki", 
                "Alquimia - Renkinjutsu", "Prisão - Tōgoku", "Molécula - Bunshi", "Foto - Shashin",
                "Eclipse - Nisshoku", "Armadura - Yoroi"]
  PalavraJP = ["漁網", "剣", "靴", "貿易", "錬金術", "投獄", "分子", "写真", "日食", "鎧"]

  Alert.alert(PalavraBr[numero_aleatorio] + " - " + PalavraJP[numero_aleatorio]);
}

//Formatações
const Estilos = {
  principal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },

  botao : {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },

  textoTopo : {
    color : '#538530',
    fontSize : 40 
  },

  textoTopoSub : {
    color : '#538530',
    marginBottom : 20,
    fontSize : 20, 
    paddingLeft:150
  },

  textoBotao : {
    color : 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }

};



export default class App extends Component {
  render() {

    const {principal, botao, textoTopo, textoTopoSub, textoBotao} = Estilos;

    return (      
      <View style = {principal}>
        <Text style = {textoTopo}>今日のフレーズ</Text>
        <Text style = {textoTopoSub}>Frase de hoje</Text>
        <Image style = {{width:300,height:300}} source = {require('./imgs/logo.png')}/>
        <TouchableOpacity onPress = {geraFraseAleatoria} style = {botao}>
          <Text style = {textoBotao}>Nova Palavra</Text>
        </TouchableOpacity>
      </View>
    );
  }
}