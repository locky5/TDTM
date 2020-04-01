import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Login from './Login.js'
import LoginWithName from './LoginWithName.js'
import Home from './Home.js'
import Slideshow from './Slideshow.js'
import CreateUser from './CreateUser.js'
import Matches from './Matches.js'
import Preferences from './Preferences.js'

const Stack = createStackNavigator()

class App extends React.Component {

  state = {
    currentUser: null
  }

  setUser = (user) => {
    let object = {
      id: user.id
    }

    this.setState({
      currentUser: user
    })
  }

  //auto login if user is already found
  componentDidMount() {
    const user_id = this.state.currentUser ? this.state.currentUser.id : null

    if (user_id) {
      fetch('http://localhost:3000/api/v1/auto_login', {
        headers: {
          "Authorization": user_id
        }
      })
      .then(res => res.json())
      .then(response => {
        if (response.errors) {
          alert(response.errors)
        } else {
          this.setState({
            currentUser: response
          })
        }
      })
    }
  }

  render() {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
            >
              {props => <Home {...props}/>}
            </Stack.Screen>
            <Stack.Screen
              name="Login"
              component={Login}
            />
            <Stack.Screen
              name="LoginWithName"
            >
              {props => <LoginWithName {...props} setUser={this.setUser}/>}
            </Stack.Screen>
            <Stack.Screen
              name="Slideshow"
            >
              {props => <Slideshow {...props} user={this.state.currentUser}/>}
            </Stack.Screen>
            <Stack.Screen
              name="CreateUser"
            >
              {props => <CreateUser {...props}/>}
            </Stack.Screen>
            <Stack.Screen
              name="Matches"
            >
              {props => <Matches {...props} user={this.state.currentUser}/>}
            </Stack.Screen>
            <Stack.Screen
              name="Preferences"
            >
              {props => <Preferences {...props} user={this.state.currentUser}/>}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
    )
  }
}

export default App;
