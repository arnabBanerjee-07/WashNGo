import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import {FONTS, SIZE, COLORS} from '../../Utilis/Constants';
import CustomButton from '../../Component/Button/CustomButton';
import route from '../../Navigation/route';
import {assetsImages} from '../../Utilis/ImageName';
import mmkv from '../../Storage/mmkv';

const Home = ({navigation}) => {
  const userName = mmkv.get('user_name');
  console.log(userName);

  const doLogout = () => {
    navigation.replace(route.Signin);
    mmkv.remove('user_name');
  };

  return (
    <SafeAreaView style={[styles.safeArea, {backgroundColor: COLORS.white}]}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            source={assetsImages.logo}
            resizeMode="contain"
            style={styles.logo}
          />
          <Text
            style={[
              styles.welcomeText,
              {
                color: COLORS.black,
                fontSize: SIZE.extraLarge,
                fontFamily: FONTS.bold,
              },
            ]}>
            Welcome {userName == null ? 'User' : userName}
          </Text>
        </View>
        <CustomButton title="Logout" press={doLogout} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    width: '85%',
    alignSelf: 'center',
  },
  logo: {
    height: 200,
    width: 250,
    alignSelf: 'center',
    marginTop: 15,
  },
  welcomeText: {
    marginVertical: 70,
    textAlign: 'center',
  },
});

export default Home;
