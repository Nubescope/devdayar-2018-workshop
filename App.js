import React from 'react'
import { StyleSheet, Text, View, Image, Animated } from 'react-native'

export default class App extends React.Component {
  constructor() {
    super()
    this.animationFirstStep = new Animated.Value(0)
    this.animationSecondStep = new Animated.Value(0)
  }

  componentDidMount() {
    Animated.sequence([
      Animated.spring(this.animationFirstStep, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(this.animationSecondStep, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start()
  }

  render() {
    const imageTranslateX = this.animationFirstStep.interpolate({ inputRange: [0, 1], outputRange: [400, 0] })
    const imageTranslateY = this.animationSecondStep.interpolate({ inputRange: [0, 1], outputRange: [60, 0] })
    const imageStyle = {
      transform: [{ translateX: imageTranslateX }, { translateY: imageTranslateY }],
    }

    const textOpacity = this.animationSecondStep.interpolate({ inputRange: [0, 0.5, 1], outputRange: [0, 0, 1] })
    const textScale = this.animationSecondStep.interpolate({ inputRange: [0, 1], outputRange: [0.7, 1] })
    const textStyle = {
      opacity: textOpacity,
      transform: [{ scale: textScale }],
    }

    return (
      <View style={styles.container}>
        <Animated.Image source={require('./assets/logo-dev-day.png')} style={[styles.logo, imageStyle]} />
        <Animated.View style={textStyle}>
          <Text style={styles.text}>2018</Text>
        </Animated.View>
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
    // transform: [{ scale: 0.8 }],
  },

  text: {
    color: '#242352',
    fontSize: 45,
    fontWeight: '400',
    marginTop: 10,
  },
})
