import { View } from 'react-native'
import 'react-native-gesture-handler';

import React, { Component, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './Components/reducers/index';
import thunk from 'redux-thunk'



import Cadastro from './Components/Stacks/Cadastro/Cadastro';
import PerfilProfissional from './Components/Stacks/PerfilProfissional/PerfilProfissional';
import Mapa from './Components/Stacks/Mapa/Mapa';
import CriarPedido from './Components/Stacks/CriarPedido/CriarPedido'
import Login from './Components/Stacks/Login/Login';
import Avaliacoes from './Components/Stacks/Avaliacoes/Avaliacoes';
import EmAndamento from './Components/Stacks/EmAndamento/EmAndamento';
import Ganhos from './Components/Stacks/Ganhos/Ganhos';
import Pedido from './Components/Stacks/Pedido/Pedido';
import Lance from './Components/Stacks/Pedido/Lance';
import preloadCadastro from './Components/Stacks/Preload/preloadCadastro';
import autenticarLogin from './Components/Stacks/Login/autenticarLogin';
import anexarDocumentos from './Components/Stacks/PerfilCliente/anexarDocumentos';
import MainTabNavigation from './Components/Stacks/stack';
import Definir from './Components/Stacks/Pedido/definirPedido';
import imovelNovo from './Components/Stacks/Pedido/imovelNovo';
import ACTE from './Components/Stacks/Pedido/ACT';
import LaudoPedido from './Components/Stacks/Pedido/laudosPedido';
import ImovelUsado from './Components/Stacks/Pedido/imovelUsado';
import informarEndereco from './Components/Stacks/Pedido/informarEndereco';
import CameraPedido from './Components/Stacks/Pedido/cameraPedido';
import verDoc from './Components/Stacks/Pedido/verDoc';
import Propostas from './Components/Stacks/Pedido/propostas';
import AceitarPedido from './Components/Stacks/Pedido/aceitarPedido';
import PedidosPro from './Components/Stacks/PedidoProfissional/PedidosPro';
import AceitarPedidoPro from './Components/Stacks/PedidoProfissional/aceitarPedidoPro';
import PerfilPro from './Components/Stacks/PerfilProfissional/perfilPro';
import LaudoPro from './Components/Stacks/PedidoProfissional/laudoPro';
import GerarLaudo from './Components/Stacks/PedidoProfissional/gerarLaudo';
import locationEndereço from './Components/Stacks/PedidoProfissional/locationEndereço';
import Dossies from './Components/Stacks/Pedido/dossies';
import DossiesCliente from './Components/Stacks/PedidoProfissional/dossiesCliente';
import DefinirLaudo from './Components/Stacks/PedidoProfissional/definirLaudo';
import selecionarLaudo from './Components/Stacks/PedidoProfissional/selecionarLaudo';
import gerarLaudoAct from './Components/Stacks/PedidoProfissional/gerarLaudoAct';
import confirmarAceitar from './Components/Stacks/Pedido/confirmarAceitar';
import laudoCliente from './Components/Stacks/Pedido/laudoCliente';
import laudoActCliente from './Components/Stacks/Pedido/laudoActCliente';
import definirLaudoCliente from './Components/Stacks/Pedido/definirLaudoCliente';
import testeComponent from './Components/Stacks/Pedido/teste';
import pdf from './Components/Stacks/Pedido/pdf';
import pedidosFinalizados from './Components/Stacks/PerfilCliente/pedidosFinalizados';
import checkout from './Components/Stacks/Pedido/checkout';
import laudoFinalizado from './Components/Stacks/PerfilCliente/laudoFinalizado';
import laudoFinalizadoAct from './Components/Stacks/PerfilCliente/laudoFinalizadoAct';
import '@react-native-firebase/app';
import assinarLaudo from './Components/Stacks/PedidoProfissional/assinarLaudo';
import saque from './Components/Stacks/ADM/saque';
import solicitarSaque from './Components/Stacks/ADM/SolicitaçoesSaque';
import aprovarSaque from './Components/Stacks/ADM/aprovarSaque';
import retiradaFundos from './Components/Stacks/PerfilProfissional/retiradaFundos';
import adm from './Components/Stacks/ADM/adm';
import ajuda from './Components/Stacks/Preload/ajuda';
import cadastroADM from './Components/Stacks/ADM/cadastroADM';
import aprovarCadastro from './Components/Stacks/ADM/aprovarCadastro';
import terreno from './Components/Stacks/Pedido/terreno';
import perfilCliente from './Components/Stacks/PerfilCliente/perfilCliente';
import metragen from './Components/Stacks/Pedido/metragen';
import faixa1 from './Components/Stacks/Pedido/faixa1';
import faixa2 from './Components/Stacks/Pedido/faixa2';
import faixa3 from './Components/Stacks/Pedido/faixa3';
import faixa4 from './Components/Stacks/Pedido/faixa4';
import faixa5 from './Components/Stacks/Pedido/faixa5';
import editarPerfil from './Components/Stacks/PerfilCliente/editarPerfil';
import contrato from './Components/Stacks/Cadastro/contrato';



const Stack = createStackNavigator();


class App extends Component {

  render() {



    return (

      <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <NavigationContainer>




          <Stack.Navigator initialRouteName={'Login'} >

            <Stack.Screen
              name="Login"

              component={Login}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="Cadastro"
              component={Cadastro}
              options={{
                title: 'Cadastre-se',
                headerStyle: {
                  backgroundColor: 'black',
                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="ajuda"
              component={ajuda}
              options={{
                headerShown: false,

                headerStyle: {
                  backgroundColor: 'black',
                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="editarPerfil"
              component={editarPerfil}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: 'black',
                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="contrato"
              component={contrato}
              options={{
                headerStyle: {
                  backgroundColor: 'black',
                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="terreno"
              component={terreno}
              options={{
                headerShown: false,

                headerStyle: {
                  backgroundColor: 'black',
                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="metragen"
              component={metragen}
              options={{
                headerShown: false,

                headerStyle: {
                  backgroundColor: 'black',
                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="faixa1"
              component={faixa1}
              options={{
                headerShown: false,

                headerStyle: {
                  backgroundColor: 'black',
                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="faixa2"
              component={faixa2}
              options={{
                headerShown: false,

                headerStyle: {
                  backgroundColor: 'black',
                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="faixa3"
              component={faixa3}
              options={{
                headerShown: false,

                headerStyle: {
                  backgroundColor: 'black',
                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="faixa4"
              component={faixa4}
              options={{
                headerShown: false,

                headerStyle: {
                  backgroundColor: 'black',
                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="faixa5"
              component={faixa5}
              options={{
                headerShown: false,

                headerStyle: {
                  backgroundColor: 'black',
                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />



            <Stack.Screen
              name="saque"
              component={saque}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="cadastroADM"
              component={cadastroADM}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="aprovarCadastro"
              component={aprovarCadastro}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="solicitarSaque"
              component={solicitarSaque}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />


            <Stack.Screen
              name="aprovarSaque"
              component={aprovarSaque}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="Mapa"
              component={Mapa}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />


            <Stack.Screen
              name="retiradaFundos"
              component={retiradaFundos}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />



            <Stack.Screen
              name="laudoFinalizado"
              component={laudoFinalizado}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />


            <Stack.Screen
              name="adm"
              component={adm}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />


            <Stack.Screen
              name="laudoFinalizadoAct"
              component={laudoFinalizadoAct}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />


            <Stack.Screen
              name="assinarLaudo"
              component={assinarLaudo}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="checkout"
              component={checkout}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="pedidosFinalizados"
              component={pedidosFinalizados}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />


            <Stack.Screen
              name="pdf"
              component={pdf}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="definirLaudoCliente"
              component={definirLaudoCliente}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name='testeComponent'
              component={testeComponent}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />


            <Stack.Screen
              name="laudoActCliente"
              component={laudoActCliente}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="laudoCliente"
              component={laudoCliente}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="gerarLaudoAct"
              component={gerarLaudoAct}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />


            <Stack.Screen
              name="denifirLaudo"
              component={DefinirLaudo}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="confirmarAceitar"
              component={confirmarAceitar}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="selecionarLaudo"
              component={selecionarLaudo}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="locationEndereço"
              component={locationEndereço}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="verDoc"
              component={verDoc}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="dossies"
              component={Dossies}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />


            <Stack.Screen
              name="laudoPro"
              component={LaudoPro}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="gerarLaudo"
              component={GerarLaudo}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="pedidosPro"
              component={PedidosPro}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />


            <Stack.Screen
              name="propostas"
              component={Propostas}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="perfilPro"
              component={PerfilPro}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="aceitarPedido"
              component={AceitarPedido}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="aceitarPedidoPro"
              component={AceitarPedidoPro}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />


            <Stack.Screen
              name="CriarPedido"
              component={CriarPedido}
              options={{
                title: 'Cadastre-se',
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="imovelUsado"
              component={ImovelUsado}
              options={{
                title: 'Cadastre-se',
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="PerfilProfissional"
              component={PerfilProfissional}
              options={{
                headerShown: false,
                headerLeft: null,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="dossiesCliente"
              component={DossiesCliente}
              options={{
                headerShown: false,
                headerLeft: null,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="cameraPedido"
              component={CameraPedido}
              options={{
                headerShown: false,
                headerLeft: null,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />


            <Stack.Screen
              name="laudoPedido"
              component={LaudoPedido}
              options={{
                headerShown: false,
                headerLeft: null,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />


            <Stack.Screen
              name="Avaliacoes"
              component={Avaliacoes}

              options={{
                title: 'Definina seu Perfil',
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#3d7c5d',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 20,

                },
              }} />

            <Stack.Screen
              name="EmAndamento"
              component={EmAndamento}

              options={{
                title: 'Definina seu Perfil',
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#3d7c5d',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 20,

                },
              }} />

            <Stack.Screen
              name="informarEndereco"
              component={informarEndereco}

              options={{
                title: 'Definina seu Perfil',
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#3d7c5d',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 20,

                },
              }} />

            <Stack.Screen
              name="Ganhos"
              component={Ganhos}

              options={{
                title: 'Definina seu Perfil',
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#3d7c5d',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 20,

                },
              }} />

            <Stack.Screen
              name="Pedido"
              component={Pedido}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="Lance"
              component={Lance}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#1cbc6c',
                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="preloadCadastro"
              component={preloadCadastro}
              options={{
                title: 'Cadastre-se',
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="autenticarLogin"
              component={autenticarLogin}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />



            <Stack.Screen
              name="perfilCliente"
              component={MainTabNavigation}
              options={{
                headerShown: false,
                headerLeft: null,
                headerStyle: {
                  backgroundColor: '#12412a',
                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="anexarDocumentos"
              component={anexarDocumentos}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#12412a',
                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="definir"
              component={Definir}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#12412a',
                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />

            <Stack.Screen
              name="act"
              component={ACTE}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />


            <Stack.Screen
              name="imovelNovo"
              component={imovelNovo}
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#202120',

                },
                headerTintColor: '#e9ebea',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,

                },
              }} />




          </Stack.Navigator>

        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;