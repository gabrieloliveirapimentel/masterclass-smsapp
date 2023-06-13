import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Main } from './screen/Main';
import { Secundary } from './screen/Secundary';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen 
          name="mainscreen" 
          component={Main} 
        />
        <Stack.Screen 
          name="secundaryscreen" 
          component={Secundary}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}



