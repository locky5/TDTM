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
    screenWidth: Dimensions.get('window').width,
    matches: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/matches')
      .then(res => res.json())
      .then(matches => {
        this.setState({
          matches: matches
        })
      })
  }

  getThisMatch = () => {
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

  checkMatches = (matches) => {
    let user_id = this.props.login.id
    let user_id2 = this.props.user.id

    console.warn(user_id, user_id2)

    for (let i = 0; i < matches.length; i++) {
      console.warn(matches[i].user_id, matches[i].user_id2)
      if (matches[i].user_id === user_id && matches[i].user_id2 === user_id2) {
        return true
      }
    }

    return false
  }

  postMatch = (event) => {
    event.preventDefault()

    if (this.state.matches) {
      //to prevent same matches...perhaps later just pop it out of the stack of users
      if (this.checkMatches(this.state.matches)) {
        console.warn('match already there')
      } else {
        this.getThisMatch()
      }
    }
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
