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
import LoginWithName from './LoginWithName.js'
import Slideshow from './Slideshow.js'
import CreateUser from './CreateUser.js'

class Home extends React.Component {
  render() {
    return (
      <View>
        <Button
          title="Login Through Phone Number"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="Login With Name"
          onPress={() => this.props.navigation.navigate('LoginWithName')}
        />
        <Button
          title="See People"
          onPress={() => this.props.navigation.navigate('Slideshow')}
        />
        <Button
          title="Create User"
          onPress={() => this.props.navigation.navigate('CreateUser')}
        />
        <Button
          title="Matches"
          onPress={() => this.props.navigation.navigate('Matches')}
        />
        <Button
          title="Preferences"
          onPress={() => this.props.navigation.navigate('Preferences')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    marginTop: 20,
    width: '90%',
    height: 40,
    borderColor: '#555',
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 10,
    color: '#000',
    fontSize: 16
  }
})

export default Home
