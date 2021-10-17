import React, { useEffect, useReducer, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import base64 from 'react-native-base64';
import database from '@react-native-firebase/database';
import "@react-native-firebase/app";
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

export default Faixa5 = ({ route, navigation }) => {

  const { user, itemId, endereco, descricao, latitude, longitude, tipoDeImovel, tipoSelecionado, laudo, pedidoAceito } = route.params

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
        publicKey: 'APP_USR-807e5087-3fa5-4f6d-a31e-5c081ef23941',
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
        tipoSelecionado: tipoSelecionado,
        tipoDeImovel: tipoDeImovel,
        itemId: itemId,
        email: user.email,
        nome: user.displayName,
        endereco: endereco,
        latitude: latitude,
        longitude: longitude,
        laudo: false,
        descricao: descricao,
        photo: user.photoURL,
        pedidoAceito: null,
        valorPedido: 1
      })



    dispatch({ type: 'idPedido', payload: itemId })
    navigation.navigate('perfilCliente')
    alert('Pedido Criado!!, Aguarde pelo avaliador')


  }


  return (
    <View style={{ flex: 1, backgroundColor: '#113d35', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: "white" }}>Efetue o pagamento, após ser aprovado seu pedido é criado  </Text>
      <TouchableOpacity onPress={() => startCheckout()} style={{ height: '12%', width: '70%', marginTop: 20, borderRadius: 50, borderWidth: 1, alignItems: 'center', justifyContent: "center", borderColor: 'black', backgroundColor: 'white' }} >



        <Text style={{ fontWeight: 'bold', color: "black" }} >Realizar Pagamento</Text>



      </TouchableOpacity>




    </View>
  )
}