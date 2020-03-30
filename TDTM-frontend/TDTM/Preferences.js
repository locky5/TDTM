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
  Image,
  Navigation
} from 'react-native'

import { Dropdown } from 'react-native-material-dropdown'
import ImagePicker from 'react-native-image-picker'

class Preferences extends React.Component {

  state = {
    username: null,
    password: null,
    age: null,
    gender: null,
    genders: [{
      value: 'Male',
    }, {
      value: 'Female',
    }],
    genderpreference: null,
    genderpreferences: [{
      value: 'Male',
    }, {
      value: 'Female',
    }, {
      value: 'Both',
    }],
    education: null,
    height: null,
    description: null,
    photo: null
  }

  //to change the user's preferences
  patchUser = (event) => {
    event.preventDefault()
    console.warn(this.state)

    let user = this.props.user

    fetch('http://localhost:3000/user/' + user.id, {
      method: 'PATCH',
      headers: {
        "Content-Type": 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        password: this.state.password,
        age: this.state.age,
        gender: this.state.gender,
        genderpreference: this.state.genderpreference,
        education: this.state.education,
        height: this.state.height,
        description: this.state.description,
        photo_url: this.state.photo
      })
    })
      .then(res => res.json())
      .then(response => {
        if (response.errors) {
          alert(response.errors)
        } else {
          console.log(response)
        }
      })

    this.props.navigation.navigate('Home')
  }

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({
          photo: response.uri
        })
      }
    })
  }

  render() {
    return (
      <ScrollView>
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
        <TextInput
          name='age'
          style={styles.textInput}
          placeholder='age'
          placeholderTextColor='#000'
          value={this.state.age}
          keyboardType='numeric'
          onChangeText={age => {
            this.setState({
              age: age
            })
          }}
        />
        <Dropdown
          label='gender'
          style={styles.textInput}
          data={this.state.genders}
          onChangeText={gender => {
            this.setState({
              gender: gender
            })
          }}
        />
        <Dropdown
          label='gender preferences'
          style={styles.textInput}
          data={this.state.genderpreferences}
          onChangeText={genderpreference => {
            this.setState({
              genderpreference: genderpreference
            })
          }}
        />
        <TextInput
          name='education'
          style={styles.textInput}
          placeholder='education'
          placeholderTextColor='#000'
          value={this.state.education}
          keyboardType='numeric'
          onChangeText={education => {
            this.setState({
              education: education
            })
          }}
        />
        <TextInput
          name='height'
          style={styles.textInput}
          placeholder='height'
          placeholderTextColor='#000'
          value={this.state.height}
          keyboardType='numeric'
          onChangeText={height => {
            this.setState({
              height: height
            })
          }}
        />
        <TextInput
          name='description'
          style={styles.textInput}
          placeholder='description'
          placeholderTextColor='#000'
          value={this.state.description}
          keyboardType='numeric'
          onChangeText={description => {
            this.setState({
              description: description
            })
          }}
        />
        {this.state.photo && (
          <Image
            source={{ uri: this.state.photo }}
            style={{ width: 300, height: 300 }}
          />
        )}
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
        <TouchableOpacity
          onPress={this.patchUser}>
          <Text>Save Preferences</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

export default Preferences
