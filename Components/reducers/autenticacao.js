const INITIAL_STATE = {
    email:'',
    senha:'',
    logado:null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'input_EmailLogin':
            return {...state, email: action.email };

         case 'input_SenhaLogin':
         return {...state, senha: action.senha };

         case 'userLogin':
            return {...state, logado: action.payload };
    }
    return state
}