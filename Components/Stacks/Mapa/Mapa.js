import React,{useState,useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Button, Platform, PermissionsAndroid,TouchableHighlight } from 'react-native';
import database from '@react-native-firebase/database';
import { useSelector, useDispatch, } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker,PROVIDER_GOOGLE } from 'react-native-maps';
import auth from '@react-native-firebase/auth';
import base64 from 'react-native-base64';

/*  {
fetchPedidos.map(element => {
  return(
  <Text key={element.key} style={{color:'black',fontSize:20}} >{element.latitude}</Text>
  )
})
       } */

export default  Mapa = ({ navigation }) => {
  const [ latitude, setLatitude ] = useState();
  const [ longitude,setLongitude ] = useState();
  const [ pedido,setPedido ] = useState();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
     
const dispatch = useDispatch();
const pedidos = useSelector( state => state.pedido.list );
const userDados = useSelector( state => state.dadosUser );   


const permissionLoc =()=>{    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then(() => null )    
}  

useEffect(()=>{
  permissionLoc()
},[])

function fetchLocation (){
  Geolocation.getCurrentPosition(info => {
    const position = info.coords
   setLatitude(position.latitude );
   setLongitude(position.longitude);
  });
 }

 useEffect(()=>{
   fetchLocation()
 },[])

 useEffect(()=>{
    console.log(pedidos)
 },[])


  if(!latitude && !longitude && !pedidos) return null 

  return (
 
    <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        showsUserLocation={true}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0150,
          longitudeDelta: 0.0150,
        }}
      >

{
        pedidos.map((marker,index) => {
          if(marker.pedidoAceito === undefined){
            console.log(marker.pedidoAceito)
            return(
          
              <Marker
              onPress={() => navigation.navigate('Lance',{data:marker})}
                key={index}
                  coordinate={{
                  latitude:marker.latitude,
                  longitude:marker.longitude
                }}
                
              />
            )
          }else return null
        })
      }
     

</MapView>
    
  );
}





