import * as actionUtil from '../actions/actions';

const initialState = {
    authenticated : false,
    token : null,
}

const setAuthSuccess = (state, action) => {
    return {...state , ...{
        authenticated : true,
        token : action.token,
    }}
}

const logout = (state, action) =>{
    return {...state, ...{
            authenticated : false,
            token : null,
        }}
}


const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionUtil.LOGIN_SUCCESS:
            return setAuthSuccess( state, action);
        case actionUtil.LOGOUT:
            return logout(state, action);
        default:
            return state;
    }
}

export default reducer;