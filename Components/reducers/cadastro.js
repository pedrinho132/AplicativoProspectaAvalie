const INITIAL_STATE = {      
    nome:null,
    cpf:null,
    rg:null,
    endereço:'',
    telefone:null,
    email:'',
    crea:null,
    senha:'',
        
}

export default (state = INITIAL_STATE, action) => {
         switch(action.type){
             case 'input_Nome':
                 return {...state, nome: action.nome };
             

             case 'input_Cpf':
                return {...state, cpf: action.cpf };
            

            case 'input_Rg':
                return {...state, rg:action.rg };
            

            case 'input_Endereço':
                return {...state, endereço:action.endereço};
            

            case 'input_Telefone':
                return {...state, telefone: action.telefone };
            

            case 'input_Email':
                return {...state, email:action.email };
            

            case 'input_Crea':
                return {...state, crea:action.crea};
            

            case 'input_Senha':
                return {...state,senha: action.senha };
            
                 default:
                    return state
         }
   
}