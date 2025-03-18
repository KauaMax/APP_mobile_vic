import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';


export default function Home({navigation}) {
  return (
    <SafeAreaView>
        <ScrollView>
        <View style={estilo.principal}>
            <Text style={estilo.titulo}>Jornal Futebolistico</Text>
            <Text style={estilo.data}>Data: 17-03-2025</Text>
            
            <Text style={estilo.manchete}>Corinthians consegue uma vitória surpreendente contra seu rival Palmeiras em pleno Allianz Parque</Text>
            <Image style={estilo.img1} source={require('../assets/palcor.png')}></Image>
            <Text style={estilo.placar}>0X1</Text>

            <Text style={estilo.resumo}>O Corinthians largou na frente na disputa pelo título do Campeonato Paulista. Neste domingo, no Allianz Parque, o Timão venceu o Palmeiras por 1 a 0 e abriu boa vantagem na decisão. Fora de casa, os corintianos tentaram manter a bola nos pés para diminuir o ritmo dos palmeirenses. O Verdão até finalizou mais, mas parou em boa atuação de Hugo Souza. O único gol do jogo foi marcado por Yuri Alberto, no segundo tempo.</Text>

            <TouchableOpacity style={estilo.btn} onPress={ () => navigation.navigate('Jornal')}>
                <Text style={estilo.txtBtn}>Clique para ver mais</Text>
            </TouchableOpacity>
        
        </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
    principal: {
        padding: 16,  
        display: 'flex',  
        alignItems: 'center',
    },

    titulo: {
        fontWeight: 'bold',
        marginTop: 10,
        fontSize:20,
        textAlign: 'center'
    },

    data: {
        marginTop: 10,
    },

    manchete: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 40,
    },

    img1: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
        width: 300,
        height: 200
    },

    placar: {
        fontWeight: 'bold',
        fontSize: 50,
        textAlign: 'center',
        marginTop: 10
    },

    resumo: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 12
    },

    btn: {
        alignItems: 'center',
        marginTop: 25,  
        borderSize: 2,
        backgroundColor: 'lightgreen',  
        borderColor: 'black',
        width: 150,
        height: 40,
        justifyContent: "center",
        alignItems: "center",

    },

    txtBtn: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
});