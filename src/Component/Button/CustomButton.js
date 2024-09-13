import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS, HEIGHT, SIZE} from '../../Utilis/Constants';
import {BarIndicator} from 'react-native-indicators';
import LinearGradient from 'react-native-linear-gradient';
const CustomButton = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        borderRadius: 30,
        elevation: 10,
        backgroundColor: COLORS.buttonText,
        width: '85%',
        height: 50,
        alignSelf: 'center',
        marginTop: props.top,
        marginBottom: props.bottom,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
      }}
      onPress={() => props.press()}>
      {props.loading ? (
        <BarIndicator color="white" size={25} />
      ) : (
        <LinearGradient
          colors={[COLORS.buttonColor2, COLORS.buttonColor]}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          style={{
            height: '100%',
            width: '100%',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: COLORS.buttonText,
              fontSize: SIZE.extraLarge,
              fontFamily: FONTS.boldInter,
              textAlign: 'center',
              textTransform: 'capitalize',
            }}>
            {props.title}
          </Text>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
