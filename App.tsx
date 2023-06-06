import { View, Text } from 'react-native'
import React from 'react'
import SearchCity from './src/Components/SearchCity'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Srcdetails from './src/Components/Srcdetails';
import MainPage from './src/Components/MainPage';
const Stack = createNativeStackNavigator();
const App = () => {
 
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Mainpage" component={MainPage}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name="Home" component={SearchCity} 
        options={{
          headerShown: false
        }} />
        <Stack.Screen name="Srcdetails" component={Srcdetails} 
          options={{
            headerShown: false
          }}/>
       
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App