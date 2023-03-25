import { View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

export default function Services({ navigation }) {
  return (
    <View style={Styles.container}>
      <Image style={Styles.Image} source={require('../Images/Logo/SS.png')} />
      <View style={Styles.ButtonTogether}>
        <TouchableOpacity onPress={() => navigation.navigate('Get_A_Tutor')}>
          <Image style={Styles.Image2}
            source={require('../Images/Icons/Icons/6.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Be_A_Tutor')}>
          <Image style={Styles.Image2}
            source={require('../Images/Icons/Icons/7.png')}
          />
        </TouchableOpacity>
      </View>
      <ImageBackground source={require('../Images/Logo/s.png')} resizeMode="cover" style={Styles.image}>
      </ImageBackground>
    </View>
  )
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    //alignItems: 'center',
  },
  Image: {
    width: 100,
    height: 100,
    marginTop: 5,
    marginLeft: 20,
    marginBottom: -80,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  Image1: {
    width: 220,
    height: 70,
    marginTop: 30,
  },
  Image2: {
    width: 200,
    height: 80,
  },
  ButtonTogether: {
    marginLeft: 400,
    flexDirection: 'row',
    //justifyContent: 'space-between',
    marginTop: 1,
    backgroundColor: 'white',
  },
})