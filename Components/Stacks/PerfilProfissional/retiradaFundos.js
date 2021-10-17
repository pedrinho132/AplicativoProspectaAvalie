import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import database from '@react-native-firebase/database';
import "@react-native-firebase/app";
import { useSelector, useDispatch, } from 'react-redux';
import base64 from 'react-native-base64';
import auth from '@react-native-firebase/auth';
import { parse } from '@babel/core';



export default Saque = ({ route, navigation }) => {

    const dadosUser = useSelector(state => state.dadosUser)
    const [pedido, setPedido] = useState();
    const [valorSaque, setValorSaque] = useState();
    const [pix, setPix] = useState();
    const [confirmarPix, setConfirmarPix] = useState();
    const [userSolicitaçao, setUserSolicitaçao] = useState();
    const [user, setUser] = useState();
    const [nome, setNome] = useState();
    const [valorServiço, setValorServiço] = useState();

    const valorGanhos = route.params.ganhos

    function ValorSaque(texto) {
        setValorSaque(texto)
    }

    function Pix(texto) {
        setPix(texto)
    }

    function ConfirmarPix(texto) {
        setConfirmarPix(texto)
    }

    function textoNome(texto) {
        setNome(texto)
    }


    useEffect(() => {
        auth().onAuthStateChanged(function (user) {
            if (user) {
                setUser(user)
                console.log(user.email)
                const email64pro = base64.encode(user.email)

                database().ref(`usuario/profissional/${email64pro}`)
                    .on('value', snapshot => {

                        setValorServiço(snapshot.val());
                    });

                database().ref(`solicitacoes/saques/${email64pro}`).on('value', (snapshot) => {
                    setUserSolicitaçao(snapshot.val())
                })
            };

        })
    }, []);




    function sendSolicitaçao() {
        const email64 = base64.encode(user.email)
        database().ref(`solicitacoes/saques/${email64}`)
            .set({ nome: nome, pix: pix, valor: valorSaque, email: email64 })

        database()
            .ref(`usuario/profissional/${email64}`)
            .update({ ganhos: parseInt(valorServiço.ganhos) - parseInt(valorSaque) })

        navigation.goBack()

        alert('Pedido de Saque enviado')

    }

    const Enviar = () => {
        if (pix && confirmarPix && nome && valorSaque && valorSaque <= valorGanhos) {
            return (
                <TouchableOpacity onPress={() => sendSolicitaçao()} style={{ height: '10%', marginTop: 20, marginLeft: '15%', width: '60%', borderWidth: 2, borderColor: 'green', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'black', fontWeight: 'bold' }} >Enviar Solicitação</Text>
                </TouchableOpacity>

            )
        } else {
            return null
        }
    }

    return (

        <View style={{ flex: 1, backgroundColor: 'black', alignItens: 'center', justifyContent: "center" }}>

            <Text style={{ color: 'white', fontWeight: 'bold' }} >Enviamos os pagamentos por PIX</Text>
            <Text style={{ color: 'white', fontWeight: 'bold' }} >Seu saque é credidato em até 24h</Text>
            <Text style={{ color: 'white', fontWeight: 'bold' }} >(Você só pode fazer uma solicitação a cada 24 horas)</Text>


            <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 10 }} >Confirme Seu valor para depósito:</Text>

            <TextInput color='white' placeholderTextColor='white' placeholder='Valor' keyboardType='numeric' maxLength={4} value={valorSaque} onChangeText={texto => ValorSaque(texto)} style={{ height: '10%', width: '60%', borderBottomWidth: 2, borderColor: "white" }} />

            <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 10 }} >Confirme seu nome para depósito:</Text>
            <TextInput color='white' placeholderTextColor='white' placeholder='Nome Completo' maxLength={30} value={nome} onChangeText={texto => textoNome(texto)} style={{ height: '10%', width: '80%', borderBottomWidth: 2, borderColor: "white" }} />


            <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 10 }} >Pix:</Text>
            <TextInput color='white' placeholderTextColor='white' placeholder='Digite seu pix' maxLength={50} value={pix} onChangeText={texto => Pix(texto)} style={{ height: '10%', width: '80%', borderBottomWidth: 2, borderColor: "white" }} />

            <TextInput color='white' placeholderTextColor='white' placeholder='Confirme Seu Pix' maxLength={50} value={confirmarPix} onChangeText={texto => ConfirmarPix(texto)} style={{ height: '10%', width: '80%', borderBottomWidth: 2, borderColor: "white" }} />

            <Enviar />

        </View>

    )





}





