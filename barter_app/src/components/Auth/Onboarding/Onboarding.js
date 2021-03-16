import React, {useRef, Fragment, useEffect} from 'react';
import {Box, Text} from '../../theme';
import {Dimensions} from 'react-native';
import {Butterfly} from '../../../Icons';
import {useScrollHandler} from 'react-native-redash';
import Animated, {divide} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {StackActions} from '@react-navigation/native';

/* Components */
import Slide from './Slide';
import Dot from './Dot';

const {width, height} = Dimensions.get('window');

const slides = [
  {
    title: 'Your Better financial Half',
    body:
      'Managing Your funds should be the easiest task on your to-do-lis, so we created Barter just for you',
  },
  {
    title: 'Borderless Payment Experience',
    body:
      'Create custom virtua USD card at affordable rates for your payments and subscriptions',
  },

  {
    title: 'Take Control Over Your Money Anytime, Anywhere',
    body:
      "Always know what's going on with your money. Thanks for the instant notification",
  },
  {
    title: 'Account Protection',
    body: 'Barter is secured by Flutterwave. Your money is always safe with us',
  },
];

function Onboarding({navigation}) {
  return null;
}

export default Onboarding;
