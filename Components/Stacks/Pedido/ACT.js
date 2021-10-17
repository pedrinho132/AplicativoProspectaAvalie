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
          `https://api.mercadopago.com/checkout/preferences?access_token=TEST-2177457783366676-040515-521c1c3410ce5bf0e95de2d7730fd3b9-516863351`,
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
          fontSize: 10,
          fontWeight: 'bold',
          marginTop: 5
     },
})




export default ACTE = ({ route, navigation }) => {

     const dispatch = useDispatch();
     const [itemId, setItemId] = useState()
     const fotosDoc = useSelector(state => state.criarPedido.act);
     const endereco = useSelector(state => state.criarPedido.endereco);
     const situacao = useSelector(state => state.criarPedido.descricao);
     const [userData, setUserData] = useState();
     const referenceDB = firestore().collection('pedidos')
     const [latitude, setLatitude] = useState();
     const [longitude, setLongitude] = useState();
     const [paymentResult, setPaymentResult] = useState({
          status: null
     });
     const [user, setUser] = useState();
     const post = {
          email: 'check',
          numero: 1,
     }

     useEffect(() => {

          auth().onAuthStateChanged(function (user) {
               if (user) {
                    setUser(user)
               }
          })
     }, []);


     useEffect(() => {
          requestLocation()
     }, [])

     useEffect(() => {
          getItemID()
     }, [paymentResult])


     async function startCheckout() {
          try {
               let preferenceId = await getPreferenceId('payer@gmail.com', {
                    title: 'Prospecta Avalie',
                    description: 'Vistoria imovel',
                    quantity: 1,
                    currency_id: 'BRL',
                    unit_price: 1,
               });

               const payment = await MercadoPagoCheckout.createPayment({
                    publicKey: 'TEST-c5b120d1-e2ea-48bb-8107-a5a26ba8d1c5',
                    preferenceId,
               })
               setPaymentResult(payment);


               if (payment.status == 'approved') {
                    gerarPedido()
               }




          } catch (err) {
               Alert.alert('Something went wrong', err.message);
          }
     };


     const gerarPedido = () => {

          const email = user.email
          const email64 = base64.encode(email)

          database()
               .ref(`/pedidos/${email64}`)
               .set({
                    tipoSelecionado: 'act',
                    tipoDeImovel: 'Imovel Aquisiçao/Terreno',
                    itemId: itemId,
                    email: user.email,
                    nome: user.displayName,
                    endereco: endereco,
                    latitude: latitude,
                    longitude: longitude,
                    laudo: false,
                    descricao: situacao,
                    photo: user.photoURL,
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
               console.log(itemIDs)

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
               <TouchableHighlight onPress={() => navigation.navigate('metragen', { user: user, itemId: itemId, endereco: endereco, descricao: situacao, latitude: latitude, longitude: longitude, tipoDeImovel: 'Imovel Aquisiçao/Terreno', tipoSelecionado: 'act', laudo: false, pedidoAceito: null })} style={{ height: '8%', width: '100%', backgroundColor: '#113d35', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }} >Gerar Pedido</Text>
               </TouchableHighlight>
          )
     }


     const VerDoc = ({ tipoDoc, fotosDocs }) => {
          if (fotosDocs) {
               return (
                    <Text onPress={() => navigation.navigate('verDoc', { tipoDoc: tipoDoc, itemId: itemId })} style={{ fontSize: 15, marginLeft: 15, fontWeight: 'bold', color: '#49e698' }}>Enviar Documento</Text>
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



     return (

          <View style={{ flex: 1 }}>
               <ScrollView contentContainerStyle={{ height: 1500, width: '100%' }} >
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }} >Dados para registro do imóvel</Text>

                    <View style={{ height: '8%', width: '100%' }} >

                         <View style={{ flex: 1 }}>

                              <Text style={styles.txt} > Certidão de inteiro Teor (Documento com validade de 30 dias)*</Text>
                              <Text style={{ color: 'red' }}>Obrigatorio</Text>

                         </View>

                         <View style={{ marginTop: 5, flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                              <TouchableHighlight onPress={() => navigation.navigate('cameraPedido', { tipo: 'foto_cteor', })} style={{ marginRight: 15, height: '70%', width: '40%', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'green' }}>
                                   <Text style={{ color: 'black', fontSize: 10 }} >Anexar Documento</Text>
                              </TouchableHighlight>

                              <VerDoc fotosDocs={fotosDoc.cteor} tipoDoc='cteor' />
                         </View>

                    </View>

                    <View style={{ height: '8%', width: '100%' }} >

                         <View style={{ flex: 1 }}>

                              <Text style={styles.txt} > Certidao de relatorios de ONUS  (Documento com validade de 30 dias)*</Text>

                         </View>

                         <View style={{ marginTop: 5, flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                              <TouchableHighlight onPress={() => navigation.navigate('cameraPedido', { tipo: 'foto_cro' })} style={{ marginRight: 15, height: '70%', width: '40%', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'green' }}>
                                   <Text style={{ color: 'black', fontSize: 10 }} >Anexar Documento</Text>
                              </TouchableHighlight>

                              <VerDoc fotosDocs={fotosDoc.cRO} tipoDoc='cRO' />
                         </View>

                    </View>

                    <View style={{ height: '8%', width: '100%' }} >

                         <View style={{ flex: 1 }}>

                              <Text style={styles.txt} > Certidao de relatorios de AÇÕES (Documento com validade de 30 dias)*</Text>

                         </View>

                         <View style={{ marginTop: 5, flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                              <TouchableHighlight onPress={() => navigation.navigate('cameraPedido', { tipo: 'foto_cra' })} style={{ marginRight: 15, height: '70%', width: '40%', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'green' }}>
                                   <Text style={{ color: 'black', fontSize: 10 }} >Anexar Documento</Text>
                              </TouchableHighlight>

                              <VerDoc fotosDocs={fotosDoc.cRA} tipoDoc='cRA' />
                         </View>

                    </View>


                    <View style={{ height: '8%', width: '100%' }} >

                         <View style={{ flex: 1 }}>

                              <Text style={styles.txt} >Conta de agua ou ortoga da agua (Documento com validade de 30 dias)*</Text>

                         </View>

                         <View style={{ marginTop: 5, flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                              <TouchableHighlight onPress={() => navigation.navigate('cameraPedido', { tipo: 'foto_coa' })} style={{ marginRight: 15, height: '70%', width: '40%', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'green' }}>
                                   <Text style={{ color: 'black', fontSize: 10 }} >Anexar Documento</Text>
                              </TouchableHighlight>

                              <VerDoc fotosDocs={fotosDoc.cOA} tipoDoc='cOA' />
                         </View>

                    </View>


                    <View style={{ height: '8%', width: '100%' }} >

                         <View style={{ flex: 1 }}>

                              <Text style={styles.txt} > Alvará de Construção/ART</Text>

                         </View>

                         <View style={{ marginTop: 5, flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                              <TouchableHighlight onPress={() => navigation.navigate('cameraPedido', { tipo: 'foto_alvaraC' })} style={{ marginRight: 15, height: '70%', width: '40%', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'green' }}>
                                   <Text style={{ color: 'black', fontSize: 10 }} >Anexar Documento</Text>
                              </TouchableHighlight>

                              <VerDoc fotosDocs={fotosDoc.alvaraC} tipoDoc='alvaraC' />
                         </View>

                    </View>

                    <View style={{ height: '8%', width: '100%' }} >

                         <View style={{ flex: 1 }}>

                              <Text style={styles.txt} >Projeto Legal(apresentar tambem o projeto arquitetônico caso a prefeitura analise/aprove projeto simplicado )</Text>

                         </View>

                         <View style={{ marginTop: 5, flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                              <TouchableHighlight onPress={() => navigation.navigate('cameraPedido', { tipo: 'foto_projetoLegal' })} style={{ marginRight: 15, height: '70%', width: '40%', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'green' }}>
                                   <Text style={{ color: 'black', fontSize: 10 }} >Anexar Documento</Text>
                              </TouchableHighlight>

                              <VerDoc fotosDocs={fotosDoc.projetoLegal} tipoDoc='projetoLegal' />
                         </View>

                    </View>


                    <View style={{ height: '8%', width: '100%' }} >

                         <View style={{ flex: 1 }}>

                              <Text style={styles.txt} >Planilha de financiamento de unidade isolada (PFUI) devidamente preenchida e assinada pelo Responsavel Tecnico</Text>

                         </View>

                         <View style={{ marginTop: 5, flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                              <TouchableHighlight onPress={() => navigation.navigate('cameraPedido', { tipo: 'foto_pfui' })} style={{ marginRight: 15, height: '70%', width: '40%', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'green' }}>
                                   <Text style={{ color: 'black', fontSize: 10 }} >Anexar Documento</Text>
                              </TouchableHighlight>

                              <VerDoc fotosDocs={fotosDoc.pfui} tipoDoc='pfui' />
                         </View>

                    </View>


                    <View style={{ height: '8%', width: '100%' }} >

                         <View style={{ flex: 1 }}>

                              <Text style={styles.txt} >Projetos assinados (Elétrico,Hidráulico,Sanitario)</Text>

                         </View>

                         <View style={{ marginTop: 5, flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                              <TouchableHighlight onPress={() => navigation.navigate('cameraPedido', { tipo: 'foto_projetosAssinados' })} style={{ marginRight: 15, height: '70%', width: '40%', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'green' }}>
                                   <Text style={{ color: 'black', fontSize: 10 }} >Anexar Documento</Text>
                              </TouchableHighlight>

                              <VerDoc fotosDocs={fotosDoc.projetosAssinados} tipoDoc='projetosAssinados' />
                         </View>

                    </View>
               </ScrollView>

               <ButtonGerarPedido />
          </View>
     )

}



