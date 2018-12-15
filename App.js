import React from 'react'
import { StyleSheet, Text, View, Image, Animated, ScrollView } from 'react-native'
import Speaker from './Speaker'

import speakers from './data.json'

const scrollViewTopOffset = 370

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { scrollEnabled: false }

    this.animationFirstStep = new Animated.Value(0)
    this.scrollY = new Animated.Value(0)

    // Primero interpolar del scroll a un valor que va de 0 a 1
    this.scrollAnimation = this.scrollY.interpolate({
      inputRange: [0, scrollViewTopOffset],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    })

    // Definimos el translateX de la primera animación
    const logoTranslateX = this.animationFirstStep.interpolate({
      inputRange: [0, 1],
      outputRange: [400, 0],
    })

    // Definimos las transformaciones de la animación por scroll
    const logoTranslateY = this.scrollAnimation.interpolate({ inputRange: [0, 1], outputRange: [250, 0] })
    const logoScale = this.scrollAnimation.interpolate({ inputRange: [0, 0.7, 1], outputRange: [1, 1, 0.7] })
    const logoTranslateXByScroll = this.scrollAnimation.interpolate({
      inputRange: [0, 0.7, 1],
      outputRange: [0, 0, -100],
    })

    // Con el conjunto de todas las transformaciones definimos el estilo
    this.logoStyle = {
      transform: [
        { translateX: logoTranslateX },
        { translateY: logoTranslateY },
        { scale: logoScale },
        { translateX: logoTranslateXByScroll },
      ],
    }

    this.scrollViewOpacity = this.animationFirstStep.interpolate({ inputRange: [0, 0.9, 1], outputRange: [0, 0, 1] })
  }

  componentDidMount() {
    Animated.spring(this.animationFirstStep, {
      toValue: 1,
      useNativeDriver: true,
    }).start(() => {
      this.setState({ scrollEnabled: true })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.splashContainer, this.logoStyle]} pointerEvents="none">
          <Image source={require('./assets/logo-dev-day.png')} style={[styles.logo]} />
        </Animated.View>

        <Animated.ScrollView
          scrollEnabled={this.state.scrollEnabled}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { y: this.scrollY } },
              },
            ],
            {
              useNativeDriver: true,
            }
          )}
          style={{ opacity: this.scrollViewOpacity }}
        >
          {speakers.map(speaker => (
            <Speaker key={speaker.name} data={speaker} />
          ))}
        </Animated.ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  splashContainer: {
    width: '100%',
    backgroundColor: '#fff',
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scrollView: {
    flex: 1,
    backgroundColor: 'blue',
    width: '100%',
  },

  contentContainer: {
    width: '100%',
    paddingVertical: scrollViewTopOffset,
  },
})
