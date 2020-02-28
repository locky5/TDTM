import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions
} from 'react-native'

class LoginWithName extends React.Component {

  state = {
    name: null,
    password: null
  }

  loginUser = (event) => {
    event.preventDefault()
    console.warn(this.state)

    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        password: this.state.password
      })
    })
      .then(resp => resp.json())
      .then(response => {
        if (response.errors) {
          alert(response.errors)
        } else {
          this.props.setUser(response)
        }
      })
  }

  render() {
    return (
      <View>
        <TextInput
          name='name'
          style={styles.textInput}
          placeholder='name'
          placeholderTextColor='#000'
          value={this.state.name}
          keyboardType='numeric'
          onChangeText={name => {
            this.setState({
              name: name
            })
          }}
        />
        <TextInput
          name='password'
          style={styles.textInput}
          placeholder='password'
          placeholderTextColor='#000'
          value={this.state.password}
          keyboardType='numeric'
          onChangeText={password => {
            this.setState({
              password: password
            })
          }}
        />
        <TouchableOpacity
          onPress={this.loginUser}>
          <Text>Submit User</Text>
        </TouchableOpacity>
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

export default LoginWithName
