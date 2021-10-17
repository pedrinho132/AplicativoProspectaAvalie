import React, { Component, useState, useEffect } from 'react';
import { View, ActivityIndicator, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
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
import base64 from 'react-native-base64';





export default Preloadcadastro = ({ navigation }) => {

  const [user, setUser] = useState();
  const [userNome, setUserNome] = useState();
  const [imagemPerfil, setImagePerfil] = useState();

  const dispatch = useDispatch()

  useEffect(() => {

    auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user)
      } else {
        // No user is signed in.
        console.log('There is no logged in user');
      }
    });
  }, [console.log(user)]);

  useEffect(() => {
    if (user) {
      const userEmail = user.email
      const userEmail64 = base64.encode(userEmail)
      database()
        .ref(`perfilCliente/${userEmail64}`)
        .on('value', snapshot => {
          setUserNome(snapshot.val().nome);
        });
    }


  }, []);

  const AlteraNome = () => {
    if (!userNome) {
      return (
        <Text style={{ color: 'white', marginLeft: 10 }} >Nome: "não informado"</Text>
      )
    } return (
      <Text style={{ color: 'white', marginLeft: 10 }} >Nome: {userNome}</Text>
    );
  }


  const urlImage = async () => {
    const email = user.email
    const email64s = base64.encode(email)
    await storage().ref(`perfilCliente/${email64s}/foto`)
      .getDownloadURL().then(url => setImagePerfil(url))
  }

  useEffect(() => {
    urlImage
  }, [])




  const ImagePerfil = () => {

    if (!imagemPerfil) {
      return (
        <Image onPress={() => navigation.navigate('editarPerfil')} style={{ height: '60%', width: '30%', borderRadius: 50, marginTop: 20, marginLeft: 20, borderWidth: 2, borderColor: 'black' }} source={require("../../assets/perfilAnonimo.jpg")} />
      )
    }

    return <Image onPress={() => navigation.navigate('editarPerfil')} style={{ height: '60%', width: '30%', borderRadius: 50, marginTop: 20, marginLeft: 20, borderWidth: 2, borderColor: 'black' }} source={{ uri: imagemPerfil }} />
  }

  function sair() {
    dispatch({ type: 'userLogin', payload: null })
    navigation.navigate('Login')
    alert('Você foi deslogado')
  }

  async function signOut() {

    if (!user) {
      navigation.navigate("Login")
    }
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      auth()
        .signOut()
        .then(() => sair());
      // setuserInfo([]);
    } catch (error) {
      alert(error)
    }
  };

  if (!user) return null;

  return (

    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ImageBackground style={{ flex: 1 }} source={require('../../assets/backlogo.png')}>



        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
          <ImagePerfil />

          <AlteraNome />

        </View>

        <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('ajuda')} style={{ width: '60%', height: '10%', alignItems: 'center', borderRadius: 60, justifyContent: 'center', backgroundColor: 'white', borderWidth: 2, borderColor: 'green' }}>
            <Text style={{ color: 'black', color: 'black' }} >Ajuda</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('editarPerfil')} style={{ width: '60%', height: '10%', alignItems: 'center', borderRadius: 60, justifyContent: 'center', backgroundColor: 'white', borderWidth: 2, borderColor: 'green' }}>
            <Text style={{ color: 'black', color: 'black' }} >Editar Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => signOut()} style={{ width: '60%', height: '10%', alignItems: 'center', borderRadius: 60, justifyContent: 'center', backgroundColor: 'white', borderWidth: 2, borderColor: 'green' }}>
            <Text style={{ color: 'black', color: 'black' }} >Sair</Text>
          </TouchableOpacity>
        </View>


      </ImageBackground>

    </View>

  )
}

