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
  Dimensions,
  AsyncStorage
} from 'react-native'

class UserPage extends React.Component {

  state = {
    screenWidth: Dimensions.get('window').width
  }

  postMatch = (event) => {
    event.preventDefault()
    console.warn(this.props.user.id)

    fetch('http://localhost:3000/matches', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user_id: this.props.login.id,
        user_id2: this.props.user.id
      })
    })
      .then(res => res.json())
      .then(response => {
        if (response.errors) {
          alert(response.errors)
        } else {
          console.warn(response)
        }
      })
  }

  render() {
    {console.warn(this.props.user.photo_url)}
    return (
      <View
        key={this.props.user.id}
        style={{width: this.state.screenWidth}}
      >
        <Text>
          {this.props.user ? this.props.user.name : null}
        </Text>
        <Text>
          {this.props.user ? this.props.user.description : null}
        </Text>
        <Image
          source={{ uri: this.props.user.photo_url }}
          style={{ width: 300, height: 300 }}
        />
        <TouchableOpacity
          onPress={this.postMatch}>
          <Text>Match!</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

export default UserPage
