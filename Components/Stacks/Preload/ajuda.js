import React, { Component, useState, useEffect } from 'react';
import { View, ActivityIndicator, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import '@react-native-firebase/auth';
import '@react-native-firebase/app';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useSelector, useDispatch, } from 'react-redux';





export default Ajuda = ({ navigation }) => {

  const [user, setUser] = useState();

  const dispatch = useDispatch()

  return (

    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../assets/backlogo.png')} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text style={{ margin: 20, fontWeight: 'bold', color: 'white' }} >Para mais informações e suporte </Text>
        <Text style={{ color: 'white' }} >  contato@prospectaavalie.com.br  </Text>

        <Text style={{ margin: 20, fontWeight: 'bold', color: 'white' }} >Responsáveis tecnicos</Text>
        <Text style={{ color: 'white' }} >  (99) 98139-2210  </Text>

        <Text style={{ color: 'white' }} >  (99) 99185-4187  </Text>

      </ImageBackground>

    </View>

  )
}

