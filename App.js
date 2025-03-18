import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './componentes/Home';
import Jornal from './componentes/Jornal';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName ='Home'>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Jornal" component={Jornal}/>


      </Stack.Navigator>
    </NavigationContainer>   
      
    
  );
}