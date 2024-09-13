import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import {FONTS, SIZE, COLORS} from '../../Utilis/Constants';
import EmailIcon from 'react-native-vector-icons/AntDesign';
import AuthLayout from '../../Layouts/AuthLayout';
import CustomButton from '../../Component/Button/CustomButton';
import route from '../../Navigation/route';
import {assetsImages} from '../../Utilis/ImageName';
import CustomTextInput from '../../Component/CustomInput/CustomTextInput';
import authService from '../../Api/auth';
import Toast from 'react-native-toast-message';
import mmkv from '../../Storage/mmkv';

const Signin = ({navigation}) => {
  const [mail, setMail] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState(null);

  const navigateToSignup = () => {
    navigation.navigate(route.Signup);
  };

  const check = () => {
    if (!phone || phone.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Phone number cannot be empty.',
      });
    } else if (phone.trim().length < 6 || phone.trim().length > 14) {
      Toast.show({
        type: 'error',
        text1: 'Phone must be between 6 and 14 digits.',
      });
    } else if (password === '') {
      Toast.show({
        type: 'error',
        text1: `Password can't be empty`,
      });
    } else if (password.length < 8) {
      Toast.show({
        type: 'error',
        text1: 'Password must be at least 8 characters long.',
      });
    } else {
      loading ? null : doLogin();
    }
  };

  const doLogin = async () => {
    setLoading(true);
    const data = {
      password: password,
      phone: phone,
    };
    console.log(data);

    authService
      .login(data)
      .then(res => {
        console.log('login res', res.data);
        setLoading(false);
        if (res.data.status) {
          Toast.show({
            type: 'success',
            text1: res.data.message,
          });
          mmkv.store('user_name', res.data?.data?.name);
          navigation.replace(route.Home);
        } else {
          Toast.show({
            type: 'error',
            text1: res.data.message,
          });
        }
      })
      .catch(err => {
        setLoading(false);
        console.error(err.response);
        Toast.show({
          type: 'error',
          text1: err?.response?.data?.message,
        });
      });
  };

  return (
    <AuthLayout forScreen="SignIn">
      <Image
        source={assetsImages.logo}
        resizeMode="contain"
        style={styles.logo}
      />

      <View style={styles.container}>
        <Text
          style={[
            styles.title,
            {
              color: COLORS.black,
              fontSize: SIZE.extraLarge,
              fontFamily: FONTS.bold,
            },
          ]}>
          Sign In
        </Text>

        <Text
          style={[
            styles.subtitle,
            {
              color: COLORS.primary,
              fontSize: SIZE.extraSmall,
              fontFamily: FONTS.medium,
            },
          ]}>
          Hi ! Welcome back, you have been missed{' '}
        </Text>

        <Text
          style={[
            styles.label,
            {
              color: COLORS.black,
              fontSize: SIZE.small,
              fontFamily: FONTS.medium,
            },
          ]}>
          Phone
        </Text>
        <CustomTextInput
          value={phone || ''}
          onChangeText={text => setPhone(text.replace(/[^0-9]/g, ''))}
          placeholder="Enter your phone number"
          icon={<EmailIcon name="phone" size={20} color={COLORS.secondary} />}
          keyboardType="number-pad"
          secureTextEntry={false}
        />

        <Text
          style={[
            styles.label,
            {
              color: COLORS.black,
              fontSize: SIZE.small,
              fontFamily: FONTS.medium,
            },
          ]}>
          Password
        </Text>
        <CustomTextInput
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          secureTextEntry={showPassword}
          showPasswordIcon
          showChangePasswordIcon
          onShowPasswordPress={() => setShowPassword(!showPassword)}
        />

        <View style={styles.forgotPasswordContainer}>
          <Text
            style={[
              styles.forgotPasswordText,
              {
                color: COLORS.black,
                fontSize: SIZE.extraSmall,
                fontFamily: FONTS.medium,
              },
            ]}>
            Forgot password ?
          </Text>
        </View>
      </View>

      <CustomButton title="Sign In" press={check} top={25} loading={loading} />

      <Image
        source={assetsImages.orImage}
        resizeMode="contain"
        style={styles.orImage}
      />

      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image
            source={assetsImages.googleIcon}
            resizeMode="contain"
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.appleIconContainer}>
          <Image
            source={assetsImages.appleIcon}
            resizeMode="contain"
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.signUpContainer}>
        <Text
          style={[
            styles.signUpText,
            {
              color: 'grey',
              fontSize: SIZE.smallest,
              fontFamily: FONTS.mediumInter,
            },
          ]}>
          Don’t have an account?
        </Text>
        <TouchableOpacity onPress={navigateToSignup}>
          <Text
            style={[
              styles.signUpLink,
              {
                marginLeft: 8,
                color: COLORS.black,
                fontSize: SIZE.small,
                fontFamily: FONTS.semiBoldInter,
              },
            ]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={[
          styles.termsText,
          {
            color: COLORS.primary,
            fontSize: SIZE.extraSmall,
            fontFamily: FONTS.medium,
          },
        ]}>
        By login or sign up, you agree to our terms of use and privacy policy
      </Text>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 200,
    width: 250,
    alignSelf: 'center',
    marginTop: 15,
  },
  container: {
    width: '85%',
    alignSelf: 'center',
    marginTop: 5,
  },
  title: {
    marginTop: 0,
  },
  subtitle: {
    marginTop: 5,
    width: '60%',
  },
  label: {
    marginTop: 15,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    marginTop: 5,
    textDecorationLine: 'underline',
  },
  orImage: {
    height: 20,
    width: '75%',
    alignSelf: 'center',
    marginTop: 20,
  },
  socialContainer: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcon: {
    height: 50,
    width: 50,
  },
  appleIconContainer: {
    marginLeft: 20,
  },
  signUpContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpText: {
    marginTop: 2,
  },
  signUpLink: {
    textDecorationLine: 'underline',
  },
  termsText: {
    marginTop: 15,
    textAlign: 'center',
    width: '90%',
    alignSelf: 'center',
    paddingBottom: 35,
  },
});

export default Signin;
