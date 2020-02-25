
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Login from './Login.js'
import Register from './Register.js'

const Stack = createStackNavigator()

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
          >
            {props => <Register {...props}/>}
          </Stack.Screen>
          <Stack.Screen
            name="Profile"
            component={Login}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App;
