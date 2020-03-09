import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Dimensions,
} from 'react-native'
import ViewPager from '@react-native-community/viewpager'

import UserPage from './UserPage.js'

class SlideShow extends React.Component {

  state = {
    users: null,
    screenWidth: Dimensions.get('window').width
  }

  componentDidMount() {
    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(users => {
        let otherUsers
        if (this.props.user) {
          otherUsers = users.filter(user => user.id !== this.props.user.id)
        } else {
          otherUsers = users
        }
        this.setState({
          users: otherUsers
        })
      })
  }

  render() {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
      >
        {this.state.users ? this.state.users.map(user => <UserPage user={user} login={this.props.user}/>) : null}
      </ScrollView>
    )
  }
}

export default SlideShow
