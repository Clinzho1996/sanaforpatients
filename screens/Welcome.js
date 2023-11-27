/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect} from 'react';
import {View, Image, Dimensions} from 'react-native';
import StatusBarHeader from '../components/StatusBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {decode} from 'base-64';
import axios from 'axios';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Welcome = ({navigation}) => {
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        navigation.replace('Main');
      } else {
        navigation.replace('Onboarding');
      }
    } catch (error) {
      console.log('Error checking token:', error);
    }
  };

  return (
    <View style={{backgroundColor: '#4C36ED', height, width}}>
      <StatusBarHeader />
      <Image
        source={require('../assets/splashscreen.png')}
        style={{width, height}}
      />
    </View>
  );
};

export default Welcome;
