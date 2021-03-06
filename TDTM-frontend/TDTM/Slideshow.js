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
          let unfilteredUsers = users.filter(user => user.id !== this.props.user.id)

          //gender preference filter
          if (this.props.user.genderpreference === 'Male') {
            otherUsers = unfilteredUsers.filter(user => user.gender === 'Male')
          } else if (this.props.user.genderpreference === 'Female') {
            otherUsers = unfilteredUsers.filter(user => user.gender === 'Female')
          } else if (this.props.user.genderpreference === 'Both') {
            otherUsers = unfilteredUsers
          }
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
