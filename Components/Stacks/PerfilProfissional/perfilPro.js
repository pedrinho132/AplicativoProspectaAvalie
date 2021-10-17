import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import ImageLogo from '../../assets/backlogoicon.png'

export default PerfilPro = ({ navigation }) => {

    const [user, setUser] = useState();
    const [userNome, setUserNome] = useState();
    const [imagemPerfil, setImagePerfil] = useState();

    const sair = () => {
        auth()
            .signOut().then(() => navigation.navigate('Login'))
    }

    useEffect(() => {

        auth().onAuthStateChanged(function (user) {
            if (user) {
                setUser(user)
            }
        })
    }, []);


    useEffect(() => {
        let userEmail = user.email
        let userEmail64 = base64.encode(userEmail)
        database()
            .ref(`perfilProfissional/${userEmail64}`)
            .on('value', snapshot => {
                setUserNome(snapshot.val().nome);
            });

    }, []);

    const AlteraNome = () => {
        if (!userNome) {
            return (
                <Text style={{ color: 'white', marginLeft: 10 }} >Nome: "não informado"</Text>
            )
        } return (
            <Text style={{ color: 'white', marginLeft: 10 }} >Nome: {userNome}</Text>
        );
    }

    const urlImage = async () => {
        const email = user.email
        const email64s = base64.encode(email)
        await storage().ref(`perfilProfissional/${email64s}/foto`)
            .getDownloadURL().then(url => setImagePerfil(url))
    }

    useEffect(() => {
        urlImage
    }, [])

    const ImagePerfil = () => {

        if (!imagemPerfil) {
            return (
                <Image onPress={() => navigation.navigate('editarPerfil')} style={{ height: '60%', width: '30%', borderRadius: 50, marginTop: 20, marginLeft: 20, borderWidth: 2, borderColor: 'black' }} source={require("../../assets/perfilAnonimo.jpg")} />
            )
        }

        return <Image onPress={() => navigation.navigate('editarPerfil')} style={{ height: '60%', width: '30%', borderRadius: 50, marginTop: 20, marginLeft: 20, borderWidth: 2, borderColor: 'black' }} source={{ uri: imagemPerfil }} />
    }




    return (

        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ImageBackground style={{ flex: 1 }} source={require('../../assets/backlogoicon.png')} >

                <ImagePerfil />

                <AlteraNome />
                <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('ajuda')} style={{ width: '60%', height: '10%', alignItems: 'center', borderRadius: 60, justifyContent: 'center', backgroundColor: 'white', borderWidth: 2, borderColor: 'green' }}>
                        <Text style={{ color: 'white', fontSize: 16, color: 'black' }} >Ajuda</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('ajuda')} style={{ width: '60%', height: '10%', alignItems: 'center', borderRadius: 60, justifyContent: 'center', backgroundColor: 'white', borderWidth: 2, borderColor: 'green' }}>
                        <Text style={{ color: 'white', fontSize: 16, color: 'black' }} >Editar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => sair()} style={{ width: '60%', height: '10%', alignItems: 'center', borderRadius: 60, marginTop: 20, justifyContent: 'center', backgroundColor: 'white', borderWidth: 2, borderColor: 'green' }}>
                        <Text style={{ color: 'white', fontSize: 16, color: 'black' }} >Sair</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>

    )
}
