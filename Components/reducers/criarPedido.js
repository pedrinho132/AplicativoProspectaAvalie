const INITIAL_STATE = {
    endereco:'',
    emailCliente64:'',
    descricao:'',
    act:{
    cteor:null,
    cRO:null,
    cRA:null,
    cOA:null,
    alvaraC:null,
    art:null,
    projetoLegal:null,
    pfui:null,
    projetosAssinados:null,
    memorial:null,
    habitese:null,
    scpo:null,
    idPedido:null,
    escritura:null
    }, 
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
                case 'input_endereco':
                 return {...state, endereco: action.payload };  

                 case 'input_descricao':
                 return {...state, descricao: action.payload };

                 case 'foto_cteor':
                 return {...state, act:{...state.act, cteor:action.payload} }; 
                 
                 case 'foto_cro':
                 return {...state, act:{...state.act, cRO:action.payload} };

                 case 'foto_cra':
                 return {...state, act:{...state.act, cRA:action.payload} };

                 case 'foto_coa':
                 return {...state, act:{...state.act, cOA:action.payload} };

                 case 'foto_alvaraC':
                 return {...state, act:{...state.act, alvaraC:action.payload} };

                 case 'foto_art':
                 return {...state, act:{...state.act, art:action.payload} };

                 case 'foto_projetoLegal':
                 return {...state, act:{...state.act, projetoLegal:action.payload} };

                 case 'foto_pfui':
                 return {...state, act:{...state.act, pfui:action.payload} };

                 case 'foto_projetosAssinados':
                 return {...state, act:{...state.act, projetosAssinados:action.payload} };

                 case 'idPedido':
                 return {...state, act:{...state.act, idPedido:action.payload} };

                 case 'scpo':
                 return {...state, act:{...state.act, scpo:action.payload} };

                 case 'memorial':
                 return {...state, act:{...state.act, memorial:action.payload} };

                 case 'habitese':
                 return {...state, act:{...state.act, habitese:action.payload} };

                 case 'escritura':
                 return {...state, act:{...state.act, escritura:action.payload} };

                 case 'emailClienteInfo':
                    return {...state, emailCliente64: action.payload };
    }
    return state

}