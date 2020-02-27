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
import Slideshow from './Slideshow.js'
import CreateUser from './CreateUser.js'

class Register extends React.Component {
  render() {
    return (
      <View>
        <Button
          title="Login Through Phone Number"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="See People"
          onPress={() => this.props.navigation.navigate('Slideshow')}
        />
        <Button
          title="Create User"
          onPress={() => this.props.navigation.navigate('CreateUser')}
        />
      </View>
    )
  }
}

export default Register
