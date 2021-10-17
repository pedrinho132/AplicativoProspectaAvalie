import { combineReducers } from 'redux';
import darLance from './darLance'
import autenticacao from './autenticacao';
import profissional from './profissional';
import cadastro from './cadastro';
import dadosUser from './dadosUser';
import pedido from './pedido';
import criarPedido from './criarPedido';

export default combineReducers({
       darLance: darLance,
       autenticacao: autenticacao,
       profissional: profissional,
       cadastro: cadastro,
       dadosUser: dadosUser,
       pedido:pedido,
       criarPedido:criarPedido
});