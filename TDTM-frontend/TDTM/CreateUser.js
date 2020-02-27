import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Button,
  Dimensions,
} from 'react-native'

class CreateUser extends React.Component {

  state = {
    username: null,
    password: null
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.warn(this.state)
  }

  postUser = (event) => {
    event.preventDefault()

    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(response => {
        if (response.errors) {
          alert(response.errors)
        }
      })
  }

  render() {
    return (
      <View>
      <TextInput
        name='username'
        style={styles.textInput}
        placeholder=''
        placeholderTextColor='#eee'
        value={this.state.username}
        keyboardType='numeric'
        onChangeText={username => {
          this.setState({
            username: username
          })
        }}
      />
      <TextInput
        name='password'
        style={styles.textInput}
        placeholder=''
        placeholderTextColor='#eee'
        value={this.state.password}
        keyboardType='numeric'
        onChangeText={password => {
          this.setState({
            password: password
          })
        }}
      />
      <TouchableOpacity
        onPress={this.postUser}>
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

export default CreateUser
