import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, ScrollView, PermissionsAndroid, Alert } from 'react-native';
import { useSelector, useDispatch, } from 'react-redux';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';
import "@react-native-firebase/app";
import Geolocation from '@react-native-community/geolocation';
import auth from '@react-native-firebase/auth';
import base64 from 'react-native-base64';
import firestore from '@react-native-firebase/firestore'
import MercadoPagoCheckout from '@blackbox-vision/react-native-mercadopago-px';

const getPreferenceId = async (payer, ...items) => {
  const response = await fetch(
    `https://api.mercadopago.com/checkout/preferences?access_token=APP_USR-6658273397385469-042902-d3ba9ff0eecf01c9f849702357d370d9-64639526`,
    {
      method: 'POST',
      body: JSON.stringify({
        items,
        payer: {
          email: payer,
        },
        payment_methods: {
          excluded_payment_types: [
            { id: "ticket" }
          ]
        },
      }),
    }
  );

  const preference = await response.json();

  return preference.id;
};


const styles = StyleSheet.create({

  txt: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5
  },
})


export default ImovelUsado = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const [itemId, setItemId] = useState()
  const fotosDoc = useSelector(state => state.criarPedido.act);
  const endereco = useSelector(state => state.criarPedido.endereco);
  const situacao = useSelector(state => state.criarPedido.descricao);
  const [userData, setUserData] = useState();
  const referenceDB = firestore().collection('pedidos')
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [paymentResult, setPaymentResult] = useState(null);
  const post = {
    email: 'check',
    numero: 1,
  }


  useEffect(() => {
    console.log(endereco)
    auth().onAuthStateChanged(function (user) {
      if (user) {
        setUserData(user)
      } else {
        // No user is signed in.
        console.log('There is no logged in user');
      }
    })
  }, [])

  useEffect(() => {
    requestLocation()
  }, [])

  useEffect(() => {
    getItemID()
  }, [console.log(itemId)])


  const startCheckout = async () => {
    try {
      let preferenceId = await getPreferenceId('payer@gmail.com', {
        title: 'Prospecta Avalie',
        description: 'Vistoria imovel',
        quantity: 1,
        currency_id: 'BRL',
        unit_price: 1,
      });

      const payment = await MercadoPagoCheckout.createPayment({
        publicKey: 'APP_USR-807e5087-3fa5-4f6d-a31e-5c081ef23941',
        preferenceId,
      });

      setPaymentResult(payment);

      if (payment.status == 'approved') {
        gerarPedido()
      }


    } catch (err) {
      Alert.alert('Something went wrong', err.message);
    }
  };



  function gerarPedido() {

    const email = userData.email
    const email64 = base64.encode(email)

    database()
      .ref(`/pedidos/${email64}`)
      .set({
        tipoDeImovel: 'Imovel Novo',
        itemId: itemId,
        email: userData.email,
        nome: userData.displayName,
        endereco: endereco,
        latitude: latitude,
        longitude: longitude,
        laudo: false,
        descricao: situacao,
        photo: userData.photoURL,
        pedidoAceito: null
      })

    dispatch({ type: 'idPedido', payload: itemId })
    navigation.navigate('perfilCliente')
    alert('Pedido Criado!!, avaliadores lhe enviarão propostas')


  }


  function getItemID() {
    referenceDB.add(post).then((resultPromisse, index) => {
      const itemIDs = resultPromisse._documentPath._parts[1]
      setItemId(itemIDs)

    })
  }


  const ButtonGerarPedido = () => {
    if (!fotosDoc.cteor) {
      return (
        <TouchableHighlight onPress={() => alert('É preciso que anexe a certidão de inteiro teor')} style={{ height: '8%', width: '100%', backgroundColor: '#113d35', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }} >Gerar Pedido</Text>
        </TouchableHighlight>
      )
    }

    return (
      <TouchableHighlight onPress={() => startCheckout()} style={{ height: '8%', width: '100%', backgroundColor: '#113d35', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }} >Gerar Pedido</Text>
      </TouchableHighlight>
    )
  }


  const VerDoc = ({ tipoDoc, fotosDocs }) => {
    if (fotosDocs) {
      return (
        <Text onPress={() => navigation.navigate('verDoc', { tipoDoc: tipoDoc, itemId: itemId })} style={{ fontSize: 15, marginLeft: 15, fontWeight: 'bold', color: '#49e698' }}>Ver Documento</Text>
      )
    }

    else return null
  }

  function fetchLocation() {
    Geolocation.getCurrentPosition(info => {
      const position = info.coords
      setLatitude(position.latitude)
      setLongitude(position.longitude)
    });
  }

  async function requestLocation() {
    try {
      const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
      if (granted) {
        fetchLocation()
        console.log('ok')
      }
      else {
        console.log("ACCESS_FINE_LOCATION permission denied")
      }

    } catch (err) {
      console.warn(err);
    }
  }


  if (!userData) return null;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <ScrollView contentContainerStyle={{ height: 1500, width: '100%' }} >

        <Text style={{ fontSize: 23, fontWeight: 'bold' }} >Dados Para imovel Novo</Text>

        <View style={{ flex: 1 }} >

          <View style={{ flex: 1 }}>

            <Text style={styles.txt} > Certidão de inteiro Teor (Documento com validade de 30 dias)*</Text>
            <Text style={{ color: 'red' }}>Obrigatorio</Text>

          </View>

          <View style={{ marginTop: 5, flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableHighlight onPress={() => navigation.navigate('cameraPedido', { tipo: 'foto_cteor', })} style={{ marginRight: 15, height: '60%', width: '40%', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'green' }}>
              <Text style={{ color: 'black', fontSize: 10 }} >Anexar Documento</Text>
            </TouchableHighlight>

            <VerDoc fotosDocs={fotosDoc.cteor} tipoDoc='cteor' />
          </View>

        </View>

        <View style={{ flex: 1 }} >

          <View style={{ flex: 1 }}>

            <Text style={styles.txt} > Certidao de relatorios de ONUS  (Documento com validade de 30 dias)*</Text>

          </View>

          <View style={{ marginTop: 5, flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableHighlight onPress={() => navigation.navigate('cameraPedido', { tipo: 'foto_cro' })} style={{ marginRight: 15, height: '60%', width: '40%', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'green' }}>
              <Text style={{ color: 'black', fontSize: 10 }} >Anexar Documento</Text>
            </TouchableHighlight>

            <VerDoc fotosDocs={fotosDoc.cRO} tipoDoc='cRO' />
          </View>

        </View>

        <View style={{ flex: 1 }} >

          <View style={{ flex: 1 }}>

            <Text style={styles.txt} > Certidao de relatorios de AÇÕES (Documento com validade de 30 dias)*</Text>

          </View>

          <View style={{ marginTop: 5, flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableHighlight onPress={() => navigation.navigate('cameraPedido', { tipo: 'foto_cra' })} style={{ marginRight: 15, height: '60%', width: '40%', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'green' }}>
              <Text style={{ color: 'black', fontSize: 10 }} >Anexar Documento</Text>
            </TouchableHighlight>

            <VerDoc fotosDocs={fotosDoc.cRA} tipoDoc='cRA' />
          </View>

        </View>


        <View style={{ flex: 1 }} >

          <View style={{ flex: 1 }}>

            <Text style={styles.txt} >Conta de agua ou ortoga da agua (Documento com validade de 30 dias)*</Text>

          </View>

          <View style={{ marginTop: 5, flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableHighlight onPress={() => navigation.navigate('cameraPedido', { tipo: 'foto_coa' })} style={{ marginRight: 15, height: '60%', width: '40%', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'green' }}>
              <Text style={{ color: 'black', fontSize: 10 }} >Anexar Documento</Text>
            </TouchableHighlight>

            <VerDoc fotosDocs={fotosDoc.cOA} tipoDoc='cOA' />
          </View>

        </View>


        <View style={{ flex: 1 }} >


          <View style={{ flex: 1 }}>

            <Text style={styles.txt} >SCPO</Text>

          </View>

          <View style={{ marginTop: 5, flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableHighlight onPress={() => navigation.navigate('cameraPedido', { tipo: 'scpo', })} style={{ marginRight: 15, height: '60%', width: '40%', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'green' }}>
              <Text style={{ color: 'black', fontSize: 10 }} >Anexar Documento</Text>
            </TouchableHighlight>

            <VerDoc fotosDocs={fotosDoc.scpo} tipoDoc='scpo' />
          </View>

        </View>



        <View style={{ flex: 1 }} >

          <View style={{ flex: 1 }}>

            <Text style={styles.txt} >Alvará de Construção</Text>

          </View>

          <View style={{ marginTop: 5, flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableHighlight onPress={() => navigation.navigate('cameraPedido', { tipo: 'foto_alvaraC', })} style={{ marginRight: 15, height: '60%', width: '40%', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'green' }}>
              <Text style={{ color: 'black', fontSize: 10 }} >Anexar Documento</Text>
            </TouchableHighlight>

            <VerDoc fotosDocs={fotosDoc.alvaraC} tipoDoc='alvaraC' />
          </View>

        </View>


        <View style={{ flex: 1 }} >

          <View style={{ flex: 1 }}>

            <Text style={styles.txt} >Memorial Descritivo </Text>

          </View>

          <View style={{ marginTop: 5, flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableHighlight onPress={() => navigation.navigate('cameraPedido', { tipo: 'memorial', })} style={{ marginRight: 15, height: '60%', width: '40%', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'green' }}>
              <Text style={{ color: 'black', fontSize: 10 }} >Anexar Documento</Text>
            </TouchableHighlight>

            <VerDoc fotosDocs={fotosDoc.memorial} tipoDoc='memorial' />
          </View>

        </View>


        <View style={{ flex: 1 }} >

          <View style={{ flex: 1 }}>

            <Text style={styles.txt} >ART/RRT/TRT de execução da obra, em nome do resposavel técnico </Text>

          </View>

          <View style={{ marginTop: 5, flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableHighlight onPress={() => navigation.navigate('cameraPedido', { tipo: 'foto_art', })} style={{ marginRight: 15, height: '60%', width: '40%', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'green' }}>
              <Text style={{ color: 'black', fontSize: 10 }} >Anexar Documento</Text>
            </TouchableHighlight>

            <VerDoc fotosDocs={fotosDoc.art} tipoDoc='art' />
          </View>

        </View>

        <View style={{ flex: 1 }} >

          <View style={{ flex: 1 }}>

            <Text style={styles.txt} >Habite-se </Text>

          </View>

          <View style={{ marginTop: 5, flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableHighlight onPress={() => navigation.navigate('cameraPedido', { tipo: 'foto_habitese', })} style={{ marginRight: 15, height: '60%', width: '40%', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'green' }}>
              <Text style={{ color: 'black', fontSize: 10 }} >Anexar Documento</Text>
            </TouchableHighlight>

            <VerDoc fotosDocs={fotosDoc.habitese} tipoDoc='habitese' />
          </View>

        </View>



      </ScrollView>

      <ButtonGerarPedido />


    </View>
  )
}

