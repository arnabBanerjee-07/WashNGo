import React, {useState} from 'react';
import {View, useWindowDimensions, Image} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import EyeIcon from 'react-native-vector-icons/FontAwesome';
import LockIcon from 'react-native-vector-icons/Octicons';
import {COLORS, FONTS, SIZE} from '../../Utilis/Constants';
const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  icon,
  keyboardType,
  secureTextEntry,
  showPasswordIcon,
  showChangePasswordIcon,
  onShowPasswordPress,
  editable,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();
  return (
    <View style={{width: '100%', alignSelf: 'center'}}>
      <TextInput
        style={{
          marginTop: 5,
          borderTopRightRadius: 8,
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          textColor: 'black',
          backgroundColor: '#fff',
          elevation: 2,
          borderColor: isFocused ? COLORS.black : COLORS.primary,
          borderWidth: isFocused ? 0.75 : 0.5,
          maxHeight: 55,
          justifyContent: 'center',
          fontSize: SIZE.small,
        }}
        theme={{
          fonts: {
            regular: {
              fontFamily: FONTS.italicInter,
              fontSize: SIZE.smallest,
            },
          },
        }}
        textColor="#000"
        editable={editable}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        selectionColor="rgba(0,0,0,0.25)"
        cursorColor="#000"
        contentStyle={{
          fontFamily: FONTS.italicInter,
          fontSize: SIZE.extraSmall,
          left: -10,
          color: '#000',
        }}
        placeholderTextColor={'#aaa'}
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        left={
          <TextInput.Icon
            icon={() => (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: -5,
                }}>
                {showPasswordIcon ? (
                  <View style={{marginRight: 3}}>
                    <LockIcon
                      name={secureTextEntry ? 'lock' : 'unlock'}
                      size={23}
                      color={COLORS.secondary}
                      onPress={onShowPasswordPress}
                    />
                  </View>
                ) : showChangePasswordIcon ? (
                  <View style={{marginRight: 3}}>
                    <EyeIcon
                      name={secureTextEntry ? 'eye' : 'eye-off'}
                      size={20}
                      color={COLORS.secondary}
                      onPress={onShowPasswordPress}
                    />
                  </View>
                ) : (
                  icon
                )}
              </View>
            )}
          />
        }
        right={
          <TextInput.Icon
            icon={() => (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',                
                  top: -5,
                }}>
                {showChangePasswordIcon ? (
                  <View style={{marginRight: 3}}>
                    <EyeIcon
                      name={secureTextEntry ? 'eye' : 'eye-slash'}
                      size={20}
                      color={COLORS.secondary}
                      onPress={onShowPasswordPress}
                    />
                  </View>
                ) : null}
              </View>
            )}
          />
        }
      />
    </View>
  );
};

export default CustomTextInput;
