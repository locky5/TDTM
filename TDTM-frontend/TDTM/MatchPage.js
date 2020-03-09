import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native'

class MatchPage extends React.Component {

  state = {
    match: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(users => {
        let foundMatch
        if (this.props.match) {
          foundMatch = users.filter(user => user.id === this.props.match.user_id2)[0]
        } else {
          foundMatch = users
        }
        this.setState({
          match: foundMatch
        })
      })
  }

  render() {
    return (
      <View>
        <Text>
          {this.state.match ? this.state.match.name : null}
        </Text>
      </View>
    )
  }
}

export default MatchPage
