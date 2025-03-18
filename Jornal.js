import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function Jornal() {
  return (
    <View>
        <ScrollView>
            <View style={estilo.principal}>

                <Text style={estilo.titulo}>E agora ?</Text>
                <Text>A vitória na casa do rival dá ao Corinthians a vantagem de empatar na volta para conquistar o título do Paulistão. O Palmeiras precisa de uma vitória por dois ou mais gols de diferença para conquistar o tetracampeonato estadual. Um triunfo do Verdão por um gol de diferença leva a decisão para as cobranças de pênaltis.</Text>
                
                <Image style={estilo.img} source={require('../assets/palmeira.png')}></Image>

                <Text style={estilo.titulo}>O Dérbi em números</Text>
                <Text>Em casa, o Palmeiras buscou mais o ataque e deu trabalho para Hugo Souza durante os 90 minutos da primeira final do Campeonato Paulista. Foram 19 finalizações dos donos da casa contra três dos visitantes. O Corinthians, porém, foi decisivo e marcou com Yuri Alberto na única bola que acertou o gol de Weverton.</Text>

                <Image style={estilo.img} source={require('../assets/vitoria2.png')}></Image>

                <Text style={estilo.titulo}>Agenda</Text>
                <Text>A segunda final será disputada no dia 27 de março, às 21h30, na Neo Química Arena.</Text>

                <Image style={estilo.img} source={require('../assets/iure.png')}></Image>
            </View>
        </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({

  principal: {  
    display: 'flex',  
    alignItems: 'center',
    width: '100%',
    height: '100%', 
    padding: 15
},

  titulo: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,

  },    

  img: {
    marginTop: 20,
    width: 320,
    height: 180, 
  }


});