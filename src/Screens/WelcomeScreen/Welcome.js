import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FONTS, SIZE, COLORS} from '../../Utilis/Constants';
import InitialLayout from '../../Layouts/InitialLayout';
import CustomButton from '../../Component/Button/CustomButton';
import route from '../../Navigation/route';

const Welcome = props => {
  const navigateToLogin = () => {
    props.navigation.navigate(route.Signin);
  };

  const navigateToSignup = () => {
    props.navigation.navigate(route.Signup);
  };

  return (
    <InitialLayout>
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.text,
            {
              color: COLORS.secondary,
              fontSize: SIZE.medium,
              fontFamily: FONTS.medium,
            },
          ]}>
          Sparkle & Shine Transform Your Drive with Every Wash!
        </Text>
      </View>
      <CustomButton title="Let’s Start" press={navigateToSignup} top={50} />

      <View style={styles.signInContainer}>
        <Text
          style={[
            styles.signInText,
            {
              color: COLORS.primary,
              fontSize: SIZE.smallest,
              fontFamily: FONTS.mediumInter,
            },
          ]}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={navigateToLogin}>
          <Text
            style={[
              styles.signInLink,
              {
                marginLeft: 8,
                color: COLORS.black,
                fontSize: SIZE.small,
                fontFamily: FONTS.semiBoldInter,
              },
            ]}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </InitialLayout>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 70,
    width: '85%',
    alignSelf: 'center',
  },
  text: {
    paddingHorizontal: 10,
  },
  signInContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInText: {
    marginTop: 2,
  },
  signInLink: {
    textDecorationLine: 'underline',
  },
});

export default Welcome;
