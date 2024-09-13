import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import {FONTS, SIZE, COLORS} from '../../Utilis/Constants';
import Icon from 'react-native-vector-icons/Feather';
import AuthLayout from '../../Layouts/AuthLayout';
import CustomButton from '../../Component/Button/CustomButton';
import route from '../../Navigation/route';
import {assetsImages} from '../../Utilis/ImageName';
import EmailIcon from 'react-native-vector-icons/AntDesign';
import CustomTextInput from '../../Component/CustomInput/CustomTextInput';
import CheckIcon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';
import authService from '../../Api/auth';

const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState(null);

  const navigateToSignIn = () => {
    navigation.replace(route.Signin);
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const check = () => {
    if (name === '') {
      Toast.show({
        type: 'error',
        text1: `Name can't be empty`,
      });
    } else if (!phone || phone.trim() === '') {
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
    } else if (!checked) {
      Toast.show({
        type: 'error',
        text1: 'Please agree to the Terms & Condition',
      });
    } else {
      loading ? null : doSignup();
    }
  };

  const doSignup = async () => {
    setLoading(true);
    const data = {
      password: password,
      name: name,
      phone: phone,
    };
    console.log(data);

    authService
      .register(data)
      .then(res => {
        console.log('signup res', res.data);
        setLoading(false);
        if (res.data.status) {
          Toast.show({
            type: 'success',
            text1: res.data.message,
          });
          navigation.replace(route.Signin);
        } else {
          Toast.show({
            type: 'error',
            text1: res.data.message,
          });
        }
      })
      .catch(err => {
        setLoading(false);
        const errors = err?.response?.data?.error;

        let errorMessage = 'An unknown error occurred';

        if (errors) {
          if (errors.phone) {
            errorMessage = errors.phone[0];
          } else if (errors.password) {
            errorMessage = errors.password[0];
          } else if (errors.name) {
            errorMessage = errors.name[0];
          }
        }

        Toast.show({
          type: 'error',
          text1: errorMessage,
        });
      });
  };

  return (
    <AuthLayout forScreen="SignUp">
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
          Sign Up
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
          Fill in the below form and add life to your car!
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
          Name
        </Text>
        <CustomTextInput
          value={name}
          onChangeText={text => setName(text)}
          placeholder="Enter your name"
          icon={<Icon name="user" size={20} color={COLORS.secondary} />}
          keyboardType="default"
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

        <View style={styles.agreementContainer}>
          <TouchableOpacity
            onPress={handleCheck}
            style={[styles.checkBox, {borderColor: COLORS.secondary}]}>
            {checked && (
              <CheckIcon name="checkmark-sharp" size={22} color={COLORS.blue} />
            )}
          </TouchableOpacity>
          <Text
            style={[
              styles.agreeText,
              {
                color: COLORS.black,
                fontSize: SIZE.small,
                fontFamily: FONTS.semiBoldInter,
              },
            ]}>
            Agree with
          </Text>
          <Text
            style={[
              styles.termsConditionText,
              styles.signInLink,
              {
                color: COLORS.primary,
                fontSize: SIZE.extraSmall,
                fontFamily: FONTS.mediumInter,
              },
            ]}>
            Terms & Conditions
          </Text>
        </View>
      </View>

      <CustomButton title="Sign Up" press={check} top={25} loading={loading} />

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
        <TouchableOpacity onPress={navigateToSignIn}>
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
            Sign In
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
    width: '80%',
  },
  label: {
    marginTop: 15,
  },
  agreementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  checkBox: {
    height: 22,
    width: 22,

    borderWidth: 0.75,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  agreeText: {
    marginLeft: 10,
  },
  termsText: {
    marginTop: 15,
    textAlign: 'center',
    width: '90%',
    alignSelf: 'center',
    paddingBottom: 35,
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
  termsConditionText: {
    marginLeft: 5,
  },
});

export default Signup;
