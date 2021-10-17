import React, { Component,useEffect,useState} from 'react';
import {
  Text,
  View,
  PermissionsAndroid,
  TouchableHighlight,
  
} from 'react-native';
import MapView, { Marker,PROVIDER_GOOGLE } from 'react-native-maps';
import database from '@react-native-firebase/database';
import   '@react-native-firebase/app';
import base64 from 'react-native-base64';
import Geolocation from '@react-native-community/geolocation';
import auth from '@react-native-firebase/auth';

export default  LocationEndereço = ({route,navigation }) => {
  const [ pedido, setPedido ] = useState();
  const [ latitude, setLatitude ] = useState();
  const [ longitude, setLongitude ] = useState();

  const emailCliente = route.params.emailCliente
  const emailCliente64 = base64.encode(emailCliente)
  const  latitudeCliente = route.params.latitude
  const  longitudeCliente = route.params.longitude

  useEffect(()=> {
    database()
        .ref(`/pedidos/${emailCliente64}`)
        .on('value', snapshot => {
                console.log(snapshot.val())
              setPedido(snapshot.val());
            });
  },[]);



  useEffect(()=>{
    requestLocation()
  },[]);


  async function requestLocation() {
   try {
     const granted = await PermissionsAndroid.check( PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION );
     if (granted) {
       fetchLocation()
     } 
     else {
       console.log( "ACCESS_FINE_LOCATION permission denied" )
     }
     
   } catch (err) {
     console.warn(err);
   }
 }

  function fetchLocation (){
   Geolocation.getCurrentPosition(info => {
     const position = info.coords
    setLatitude(position.latitude );
    setLongitude(position.longitude )
   });
  }

  if(!latitude && !longitude) return null;


  return(
     <View style={{flex:1}}>
          <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1}}
        showsUserLocation={true}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0150,
          longitudeDelta: 0.0150,
        }}
      >
          <Marker
              onPress={() => alert('Localizaçao da Vistoria')}
              
                  coordinate={{
                  latitude:latitudeCliente,
                  longitude:longitudeCliente
                }}
                description={'Endereço'}
              />

          </MapView>
             
     </View>
  );
}