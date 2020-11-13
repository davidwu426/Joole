import * as actionUtil from './actions';
import axios from 'axios';

const loginSucess = (token) =>{
    return {
        type : actionUtil.LOGIN_SUCCESS,
        token : token,
    }
}


export const logOut = () =>{
    localStorage.removeItem("jwt");
    return {
        type : actionUtil.LOGOUT
    }
}

export const register = (username, password, email, history) =>{
    console.log("inside register action method")
    return dispatch => {
        let url = "http://localhost:8080/register";
        let data = {
            username : username,
            password : password,
            email : email,
        }
        
        axios.post(url, data).then(res =>{
            console.log(res);
            history.push("/login");
        })
    }
}


export const auth = (username, password, history) =>{
    return dispatch =>{
        let url = "http://localhost:8080/authenticate"
        let data = {
            username : username,
            password : password,
        }
        axios.post(url, data).then(
            result =>{
                console.log(result);
                localStorage.setItem('jwt', result.data.token);
                dispatch(loginSucess(result.data.token));
                history.push("/search")
            }
        )
    }
}

export const checkStatus = () =>{
    return dispatch => {
        let token = localStorage.getItem("jwt");
        if(token){
            dispatch(loginSucess(token));
            
        }else{
            dispatch(logOut());
        }
    }
}
