import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {COLORS, SIZE, FONTS, HEIGHT} from '../Utilis/Constants';
import {assetsImages} from '../Utilis/ImageName';

const InitialLayout = ({forScreen, children}) => {
  return (
    <SafeAreaView style={[styles.safeArea, {backgroundColor: COLORS.white}]}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={
            forScreen === 'SignIn'
              ? assetsImages.SignInBackground
              : assetsImages.SignUpBackground
          }
          resizeMode="stretch"
          style={styles.imageBackground}>
          {children}
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InitialLayout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
});
