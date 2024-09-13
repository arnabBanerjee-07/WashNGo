import {Dimensions, useWindowDimensions} from 'react-native';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const fontScale = useWindowDimensions().fontScale;

const COLORS = {
    black: '#000000',
    white: '#FFFF',
    buttonColor: '#A3CFFF',
    buttonColor2: '#94C7FF',
    primary: '#808080',
    secondary: '#797979',
    buttonText: '#092A4D'
}

const FONTS = {
    black: 'Poppins-Black',
    bold: 'Poppins-Bold',
    semiBold: 'Poppins-SemiBold',
    extraBold: 'Poppins-ExtraBold',
    italic: 'Inter_18pt-ThinItalic',
    medium: 'Poppins-Medium',
    regular: 'Poppins-Regular',
    
    boldInter: 'Inter_18pt-Bold',
    semiBoldInter: 'Inter_18pt-SemiBold',
    italicInter: 'Inter_18pt-Italic',
    mediumInter: 'Inter_18pt-Medium',
    regularInter: 'Poppins-Regular',
  };
  
  const SIZE = {
    smallest: 13/ fontScale,
    extraSmall: 14 / fontScale,
    small: 15 / fontScale,
    regular: 16 / fontScale,
    medium: 17 / fontScale,
    large: 18 / fontScale,
    extraLarge: 19 / fontScale,
    heading: 24 / fontScale,
  };
  
  export {COLORS, FONTS, HEIGHT, WIDTH, SIZE};