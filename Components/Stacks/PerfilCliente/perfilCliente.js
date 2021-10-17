import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StatusBar, Button, TouchableOpacity } from 'react-native';
import database from '@react-native-firebase/database';
import { useSelector, useDispatch, } from 'react-redux'
import base64 from 'react-native-base64';
import auth from '@react-native-firebase/auth';
import '@react-native-firebase/app';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';



export default PerfilCliente = ({ route, navigation }) => {

  const dispatch = useDispatch();

  const dadosUser = useSelector(state => state.dadosUser)
  const [user, setUser] = useState();
  const [pedidos, setPedidos] = useState();



  useEffect(() => {
    auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user)
        const email64 = base64.encode(user.email)
        console.log(email64)
        database()
          .ref(`/cliente/${email64}/pedidosFinalizados`)
          .once('value', function (snapshot) {

            var li = []
            snapshot.forEach((child) => {
              li.push({
                itemId: child.val().itemId,
              })
              setPedidos(li)
            })
          })
      } else {
        // No user is signed in.
        console.log('There is no logged in user');
      }
    })



  }, [])


  if (!pedidos) return (<View style={{ flex: 1 }} >
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderBottomColor: '#1e8155', borderBottomWidth: 1, flexDirection: 'row' }}>
      <Text style={{ fontWeight: 'bold', color: '#1e8155' }}> Prospecta </Text>
      <Text style={{ fontWeight: '600', color: 'grey' }}> Avalie </Text>
    </View>
    <View style={{ flex: 9, alignItems: 'center', justifyContent: "center" }} >
      <Text>Você ainda não realizou nenhum pedido</Text>
    </View>

  </View>
  )


  return (

    <View style={{ flex: 1, marginHorizontal: 10, backgroundColor: 'white' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 10 }} >Pedidos Finalizados</Text>

      <FlatList
        data={pedidos}
        renderItem={({ item }) => <TouchableOpacity key={item.itemId} onPress={() => navigation.navigate('pedidosFinalizados', { idItem: item.itemId })} style={{ height: 50, marginTop: 10, marginBottom: 10, width: '100%', borderWidth: 1, backgroundColor: '#113d35', borderColor: 'black', alignItems: "center", justifyContent: "center" }}>
          <Text style={{ color: 'white' }}>Pedido Nº - {item.itemId}</Text>
        </TouchableOpacity>
        }
        keyExtractor={item => item.itemId}
      />


    </View>

  );
}