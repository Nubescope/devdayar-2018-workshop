import React from 'react'
import { StyleSheet, Text, View, Image, Animated } from 'react-native'

export default class App extends React.Component {
  constructor() {
    super()
    this.animation = new Animated.Value(0)
  }

  componentDidMount() {
    Animated.spring(this.animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start()
  }

  render() {
    const imageTranslateX = this.animation.interpolate({ inputRange: [0, 1], outputRange: [400, 0] })
    const imageStyle = {
      transform: [{ translateX: imageTranslateX }],
    }

    return (
      <View style={styles.container}>
        <Animated.Image source={require('./assets/logo-dev-day.png')} style={[styles.logo, imageStyle]} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    transform: [{ scale: 0.8 }],
  },

  text: {
    color: '#242352',
    fontSize: 45,
    fontWeight: '400',
  },
})
