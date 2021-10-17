import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useSelector, useDispatch, } from 'react-redux';
import base64 from 'react-native-base64';
import database from '@react-native-firebase/database';
import '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';



export default editarPerfil = ({ navigation }) => {

    const dispatch = useDispatch();
    const usuario = useSelector(state => state.dadosUser);
    const [editarNome, setEditarNome] = useState();
    const [user, setUser] = useState();

    function textEditarNome(texto) {
        setEditarNome(texto)
    }


    const styles = StyleSheet.create({
        input: {
            fontSize: 20,
            height: 40,

        }
    })

    useEffect(() => {

        auth().onAuthStateChanged(function (user) {
            if (user) {
                setUser(user)
            }
        })
    }, []);


    function salvarNome() {
        const email = user.email
        const email64 = base64.encode(email)
        database()
            .ref(`/perfilCliente/${email64}`)
            .set({ nome: editarNome });

        alert("Nome Salvo");
    }

    function salvarImagem() {
        const email = user.email
        const email64s = base64.encode(email)
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {

            storage().ref(`perfilCliente/${email64s}/foto`).putFile(image.path).then(() => goBackk()).catch(error => alert(error))
            alert("Foto Salva com sucesso!")
            navigation.goBack()
        });
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#113d35' }} >



            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }} >Anexar Foto de perfil </Text>
            <TouchableOpacity onPress={() => salvarImagem()} style={{ height: 70, width: 140, borderRadius: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: "center", borderRadius: 40 }} >
                <Text>Anexar Foto</Text>
            </TouchableOpacity>

            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginTop: 30 }} >Editar nome </Text>
            <TextInput color='white' placeholder='Digite seu nome' placeholderTextColor='white' style={{ height: 70, width: '60%', borderBottomWidth: 1, borderColor: 'white', alignItems: "center", justifyContent: "center" }} value={editarNome} onChangeText={texto => textEditarNome(texto)} ></TextInput>
            <TouchableOpacity onPress={() => salvarNome()} style={{ marginTop: 15, height: 70, width: 140, backgroundColor: 'white', alignItems: 'center', borderRadius: 40, justifyContent: "center" }} >
                <Text>Salvar</Text>
            </TouchableOpacity>

        </View>
    )
}