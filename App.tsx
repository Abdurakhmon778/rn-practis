import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { TailwindProvider } from 'tailwindcss-react-native'
import Home from 'screens/Home'

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen component={Home} name="Home" />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  )
}

export default App