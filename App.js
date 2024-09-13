import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import AppContainer from './src/Navigation/Index'
import SplashScreen from 'react-native-splash-screen';
import ConnectionPopup from './src/Component/ConnectionPopup'
import Toast from 'react-native-toast-message';
const App = () => {
  useEffect(() => {
    //SplashScreen.hide();
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);
  return (
   <>
   <AppContainer />
   <Toast />
   <ConnectionPopup />
   </>
  )
}

export default App

const styles = StyleSheet.create({})