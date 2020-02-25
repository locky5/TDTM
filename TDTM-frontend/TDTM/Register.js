import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native'
import Login from './Login.js'

class Register extends React.Component {
  render() {
    return (
      <View>
        {console.warn(this.props)}
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    )
  }
}

export default Register
