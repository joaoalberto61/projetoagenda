import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home/home';
import DetalheScreen from './detalhe/detalhe';
import CalendarioScreen from './calendario/calendario';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Detalhe" component={DetalheScreen} />
        <Tab.Screen name="Calendario" component={CalendarioScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;