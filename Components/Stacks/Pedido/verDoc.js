import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, TouchableHighlight, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch, } from 'react-redux'
import "@react-native-firebase/app"
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';

export default verDoc = ({ route, navigation }) => {

  const [loadingButton, setLoadingButton] = useState();
  const [userData, setUserData] = useState();
  const dispatch = useDispatch();

  const itemId = route.params.itemId
  const tipo = route.params.tipoDoc
  const fotosDoc = useSelector(state => state.criarPedido.act[`${tipo}`])


  const LoadButton = () => {
    if (!loadingButton) {
      return (
        <View style={{ height: '10%', width: '60%', backgroundColor: '#113d35', alignItems: 'center', justifyContent: 'center', margin: 25, borderWidth: 2, borderColor: '#113d35' }}>
          <TouchableHighlight style={{ flex: 1, alignItems: "center", justifyContent: 'center' }} onPress={() => gerarPedido()}>
            <Text style={{ fontWeight: 'bold', color: 'white', borderRadius: 50 }} >Enviar Documento</Text>
          </TouchableHighlight>
        </View>
      )
    }

    return (
      <ActivityIndicator size="large" color="#00ff00" />
    )
  }


  useEffect(() => {
    auth().onAuthStateChanged(function (user) {
      if (user) {
        setUserData(user)
      } else {
        // No user is signed in.
        console.log('There is no logged in user');
      }
    })
  }, [])

  const goBackk = () => {
    navigation.goBack()
    alert('Documento Enviado com sucesso!')
  }


  const gerarPedido = () => {
    const email64 = userData.email
    storage().ref(`pedidos/${email64}/${itemId}/dossies/foto_${tipo}`).putFile(fotosDoc).then(() => goBackk()).catch(error => alert(error))
    setLoadingButton(true)
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={{ uri: `${fotosDoc}` }} style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }} >
        <LoadButton />
      </ImageBackground>
    </View>
  )
};