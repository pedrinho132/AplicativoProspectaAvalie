import React, { useEffect, useReducer, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import base64 from 'react-native-base64';
import database from '@react-native-firebase/database';

export default Metragem = ({ route, navigation }) => {

    const { user, itemId, endereco, descricao, latitude, longitude, tipoDeImovel, tipoSelecionado, laudo, pedidoAceito } = route.params


    return (
        <View style={{ flex: 1, backgroundColor: '#113d35' }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}> Defina as dimensôes do imóvel </Text>
            <TouchableOpacity onPress={() => navigation.navigate('faixa1', { user, itemId, endereco, descricao, latitude, longitude, tipoDeImovel, tipoSelecionado, laudo, pedidoAceito })} style={{ flex: 1, borderTopWidth: 1, alignItems: 'center', justifyContent: "center", borderColor: 'black' }} >



                <Text style={{ fontWeight: 'bold', color: "white" }} >De 60m² a 69m² - Faixa 1</Text>



            </TouchableOpacity>



            <TouchableOpacity onPress={() => navigation.navigate('faixa2', { user, itemId, endereco, descricao, latitude, longitude, tipoDeImovel, tipoSelecionado, laudo, pedidoAceito })} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderTopWidth: 1, borderColor: 'black' }} >


                <Text style={{ fontWeight: 'bold', color: "white" }} >De 70m² a 79m² - Faixa 2</Text>

            </TouchableOpacity>





            <TouchableOpacity onPress={() => navigation.navigate('faixa3', { user, itemId, endereco, descricao, latitude, longitude, tipoDeImovel, tipoSelecionado, laudo, pedidoAceito })} style={{ flex: 1, borderTopWidth: 1, alignItems: "center", justifyContent: "center", borderColor: 'black' }} >


                <Text style={{ fontWeight: 'bold', color: "white" }} >De 80m² a 99m² - Faixa 3</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('faixa4', { user, itemId, endereco, descricao, latitude, longitude, tipoDeImovel, tipoSelecionado, laudo, pedidoAceito })} style={{ flex: 1, borderTopWidth: 1, alignItems: "center", justifyContent: "center", borderColor: 'black' }} >


                <Text style={{ fontWeight: 'bold', color: "white" }} >De 100m² a 119m² - Faixa 4</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('faixa5', { user, itemId, endereco, descricao, latitude, longitude, tipoDeImovel, tipoSelecionado, laudo, pedidoAceito })} style={{ flex: 1, borderTopWidth: 1, alignItems: "center", justifyContent: "center", borderColor: 'black' }} >


                <Text style={{ fontWeight: 'bold', color: "white" }} >De 120m² a ou mais - Faixa 5</Text>

            </TouchableOpacity>
        </View>
    )
}