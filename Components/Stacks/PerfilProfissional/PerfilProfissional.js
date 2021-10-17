import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, PermissionsAndroid, Linking, ImageBackground } from 'react-native';
import database from '@react-native-firebase/database';
import base64 from 'react-native-base64';
import { useSelector, useDispatch, } from 'react-redux';
import auth from '@react-native-firebase/auth';
import Geolocation from '@react-native-community/geolocation';
import "@react-native-firebase/app"
import { useNavigation } from '@react-navigation/native';


export default PerfilProfissional = ({ route }) => {

  const [location, setLocation] = useState();
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const [userNome, setUserNome] = useState();
  const [imagemPerfil, setImagePerfil] = useState();


  const navigation = useNavigation();



  const permissionWhite = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)
  }

  const permissionLoc = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then(() => fetchLocation())
  }

  useEffect(() => {
    permissionLoc()
  }, [])

  async function coursesIbape() {
    try {

      const url = 'http://www.ibapemaranhao.com.br/cursos-e-eventos/'
      await Linking.openURL(url)
    } catch (error) {
      alert(error)
    }

  }

  function mapair() {
    navigation.navigate("Mapa")
  }

  useEffect(() => {
    database().ref('/pedidos').on('value', (snapshot) => {
      var li = []
      snapshot.forEach((child) => {
        li.push({
          key: child.val().key,
          latitude: child.val().latitude,
          longitude: child.val().longitude,
          descricao: child.val().descricao,
          nome: child.val().nome,
          photo: child.val().photo,
          email: child.val().email,
          endereco: child.val().endereco,
          pedidoAceito: child.val().pedidoAceito
        });
        dispatch({ type: 'fetch_List', payload: li })
      })

    });

  }, []);




  function fetchLocation() {
    Geolocation.getCurrentPosition(info => {
      const position = info.coords
      dispatch({ type: 'latitude', payload: position.latitude });
      dispatch({ type: 'longitude', payload: position.longitude })
    }).then(() => setLocation(true))
  }


  function sair() {
    auth()
      .signOut()
      .then(() => alert('deslogado'))
  }



  useEffect(() => {
    auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user)
        const email64pro = base64.encode(user.email)
        database().ref(`usuario/profissional/${email64pro}`).on('value', (snapshot) => {
          setUser(snapshot.val())
        })
      };
    })
  }, []);

  if (!location) return null

  return (



    <View style={{ flex: 1, }}>

      <ImageBackground style={{ opacity: 0.8, flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#13332d', borderColor: '#aed5c1' }}>
        <Text>Disponivel para anuncio</Text>
      </ImageBackground>

      <ImageBackground source={require('../../assets/iconProspecta.jpeg')} style={{ opacity: 0.8, flex: 1, flexDirection: 'row', backgroundColor: '#13332d', borderColor: '#aed5c1' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }} >
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }} >Disponivel:R$ {user.ganhos} </Text>
        </View>
      </ImageBackground>




      <View style={{ flex: 1 }}>




        < View style={{ flex: 1, backgroundColor: '#1a3a2a' }}>
          <TouchableOpacity onPress={() => mapair()} style={{ flex: 1, backgroundColor: '#bfc1c0', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 17 }} >Mapa</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => coursesIbape()} style={{ flex: 1, borderTopWidth: 1, borderColor: 'white', backgroundColor: '#bfc1c0', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 17 }} >Profissionalize-se</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('pedidosPro')} style={{ flex: 1, borderTopWidth: 1, borderColor: 'white', backgroundColor: '#bfc1c0', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 17 }} >Pedidos</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('retiradaFundos', { ganhos: user.ganhos })} style={{ flex: 1, borderTopWidth: 1, borderColor: 'white', backgroundColor: '#bfc1c0', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 17 }} >Retirada de Fundos</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('perfilPro')} style={{ flex: 1, borderTopWidth: 1, borderColor: 'white', backgroundColor: '#bfc1c0', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 17 }} >Perfil</Text>
          </TouchableOpacity>

        </View>


      </View>

    </View>

  )
}