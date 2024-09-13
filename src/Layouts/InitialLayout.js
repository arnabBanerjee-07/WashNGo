import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS, SIZE, FONTS, HEIGHT} from '../Utilis/Constants';
import {assetsImages} from '../Utilis/ImageName';

const InitialLayout = ({children}) => {
  return (
    <SafeAreaView style={[styles.safeArea, {backgroundColor: COLORS.white}]}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={assetsImages.WelcomeBackground}
          resizeMode="stretch"
          style={styles.imageBackground}>
          <View style={styles.logoContainer}>
            <Image
              source={assetsImages.logo}
              resizeMode="cover"
              style={styles.logo}
            />
          </View>
          {children}
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    borderRadius: 20,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  logoContainer: {
    height: 220,
    width: 320,
    marginTop: '30%',
    alignSelf: 'flex-end',
  },
  logo: {
    height: '100%',
    width: '100%',
  },
});

export default InitialLayout;
