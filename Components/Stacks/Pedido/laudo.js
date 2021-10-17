import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native';
import database from '@react-native-firebase/database';
import "@react-native-firebase/app";
import { useSelector, useDispatch, } from 'react-redux';
import base64 from 'react-native-base64';
import auth from '@react-native-firebase/auth';
import '@react-native-firebase/app';



export default Laudo = ({ route, navigation }) => {

        const dadosUser = useSelector(state => state.dadosUser)
        const [pedido, setPedido] = useState();
        const [proposta, setProposta] = useState();
        const [user, setUser] = useState();
        const [laudo, setLaudo] = useState();
        const [email, setEmail] = useState();




        useEffect(() => {

                auth().onAuthStateChanged(function (user) {
                        if (user) {

                                setUser(user._user)
                                const email64r = base64.encode(user.email)


                                database()
                                        .ref(`pedidos/${email64r}`)
                                        .on('value', snapshot => {
                                                setPedido(snapshot.val());
                                                setEmail(email64r)

                                        });



                        }
                })

        }, []);


        useEffect(() => {

                auth().onAuthStateChanged(function (user) {
                        if (user) {
                                setUser(user)
                                const email64 = base64.encode(user.email)

                                database()
                                        .ref(`/pedidos/${email64}/lances`)
                                        .on('value', snapshot => {
                                                setProposta(snapshot.val());
                                        });

                                database()
                                        .ref(`/pedidos/${email64}/laudo`)
                                        .on('value', snapshot => {
                                                console.log(snapshot.val())
                                                setLaudo(snapshot.val());

                                        });
                        }
                })

        }, [])


        const cancelarPedido = () => {
                database()
                        .ref(`/pedidos/${email}`)
                        .remove();
                alert('Pedido Cancelado!')
        }

        const BuuttonCancelar = () => {
                if (!pedido.pedidoAceito) return (
                        <TouchableOpacity onPress={() => navigation.navigate('ajuda')} style={{ backgroundColor: 'white', marginTop: 10, height: '15%', borderRadius: 30, width: '100%', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'black' }} >
                                <Text style={{ color: '#2ca86a' }} >Cancelar Pedido</Text>
                        </TouchableOpacity>

                )

                return null
        }






        const FinalizarPedido = () => {
                if (pedido.laudoAssinado) return (

                        <TouchableOpacity onPress={() => navigation.navigate('confirmarAceitar', { email: user.email, emailPro: pedido.engenheiro })} style={{ backgroundColor: 'white', marginTop: 10, height: '15%', borderRadius: 30, width: '100%', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'black' }} >
                                <Text style={{ color: '#2ca86a', fontWeight: 'bold' }} >Finalizar Pedido</Text>
                        </TouchableOpacity>

                )

                return null;
        }

        const Laudo = () => {
                if (laudo) return (
                        <TouchableOpacity onPress={() => navigation.navigate('definirLaudoCliente', { email: user.email })} style={{ backgroundColor: 'white', marginTop: 10, height: '15%', borderRadius: 30, width: '100%', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'black' }} >
                                <Text style={{ color: '#2ca86a', fontWeight: 'bold' }} >Laudo</Text>
                                <Text style={{ color: '#2ca86a' }} >Finalize o pedido,e melhore a reolução!</Text>
                        </TouchableOpacity>

                )

                return null
        }

        function updateEngenheiro() {
                const emailCliente = base64.encode(pedido.email)
                database()
                        .ref(`/pedidos/${emailCliente}`)
                        .update({ pedidoAceito: false });

                alert('Outros avaliadores aceitaram seu pedido')

        }

        const TrocarAvaliador = () => {
                if (pedido.laudoAssinado) {
                        return null
                } else {
                        return (
                                <Text onPress={() => updateEngenheiro()} style={{ fontWeight: 'bold', color: 'red' }}>Trocar Avaliador</Text>
                        )
                }
        }

        const Propostas = () => {


                if (pedido.pedidoAceito) {
                        return (
                                <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
                                        <Text style={{ fontWeight: 'bold', margin: 5 }} >
                                                Avaliador: {pedido.engenheiro}
                                        </Text>
                                        <Text>aceitou seu pedido, e esta a caminho</Text>
                                        <TrocarAvaliador />
                                </View>
                        )
                }



                return (
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: "row" }} >
                                <Text style={{ marginRight: 10 }} >Aguardando avaliadores....</Text>
                                <ActivityIndicator size="small" color="#00ff00" />
                        </View>
                )



        }





        if (!pedido) {

                return (

                        <View style={{ flex: 1 }}>
                                <ImageBackground style={{ flex: 1 }} source={require('../../assets/backlogo.png')}>

                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 20 }}>

                                                <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 15 }} >Sua localização será compartilhada com o avaliador</Text>
                                        </View>

                                        <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
                                                <TouchableOpacity onPress={() => navigation.navigate('definir')} style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center', height: '15%', width: '70%', borderWidth: 3, borderColor: '#2ca86a', borderRadius: 40, backgroundColor: 'white' }}  >

                                                        <Text style={{ color: '#2ca86a', fontSize: 17, fontWeight: 'bold' }} >Solicitar</Text>
                                                </TouchableOpacity>


                                        </View>
                                </ImageBackground>
                        </View>
                )

        }


        return (

                <View style={{ flex: 1, backgroundColor: '#113d35' }}>

                        <View style={{ flex: 1, backgroundColor: 'white', borderBottomColor: '#1e8155', alignItems: "center", justifyContent: 'center', borderBottomWidth: 1, flexDirection: 'row' }}>

                                <Text style={{ fontWeight: 'bold', color: '#1e8155' }}> Prospecta </Text>
                                <Text style={{ fontWeight: '600', color: 'grey' }}> Avalie </Text>

                        </View>

                        <View style={{ flex: 6, alignItems: 'center', justifyContent: 'center', backgroundColor: '#113d35', marginHorizontal: 15 }}>

                                <View style={{ flex: 1, width: '100%', alignItems: 'flex-start', marginTop: 10, justifyContent: 'flex-start' }}>
                                        <Text style={{ fontWeight: 'bold', color: 'white', }} >{pedido.endereco}</Text>

                                </View>

                                <View style={{ flex: 3, width: '100%', alignItems: 'center', justifyContent: "center" }}>

                                        <FinalizarPedido />
                                        <Laudo />

                                        <TouchableOpacity onPress={() => navigation.navigate('dossies', { email: pedido.email, itemId: pedido.itemId })} style={{ backgroundColor: 'white', marginTop: 10, borderRadius: 30, height: '15%', width: '100%', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'black' }} >
                                                <Text style={{ color: '#2ca86a' }} >Dossies</Text>
                                        </TouchableOpacity>


                                        <BuuttonCancelar />
                                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Apenas Finalize o pedido se o laudo estiver sido assinado</Text>
                                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Se o Avaliador nao Responder em 24h Troque o Avaliador</Text>
                                </View>
                        </View>

                        <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderTopWidth: 1, borderColor: 'black', backgroundColor: 'white' }}>
                                <Propostas />
                        </View>
                </View>

        );


}



