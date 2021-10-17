const INITIAL_STATE = {
   user:[],
   latitude:0,
   longitude:0,
   email:'',
   emailC:''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
                       
                case 'fetch_User':
                  return {...state, user:[...state.user, action.payload ]};

                  case 'emailInfo':
                  return {...state, email:action.payload};
                
                case 'latitude':
                   return { ...state, latitude:action.payload  };
                   
                   case 'longitude':
                   return { ...state, longitude:action.payload  };

                   case 'emailC':
                  return {...state, emailC:action.payload};
    }
    return state

}