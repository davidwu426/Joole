import React, { Component} from 'react';
import {connect} from 'react-redux'; 
import axios from 'axios';
import * as actions from '../../store/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faLock}  from '@fortawesome/free-solid-svg-icons'
import styles from './login.module.css';
import Aux from '../../utility/aux';
import Header from '../Header/header';
class Login extends Component{

    constructor(props){
        super(props);
        this.state  = {
            username : "",
            password : ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    handleInputChange(event){
        this.setState({...this.state, [event.target.name]: event.target.value})
    }

    handleSubmit(event){
       event.preventDefault();
       this.props.onAuth(this.state.username, this.state.password, this.props.history);
    }

    getHello(event){
        event.preventDefault();
        let config = {
            headers : {
                Authorization : "Bearer "+localStorage.getItem("jwt"),
            }
        }
        console.log(config.headers.Authorization);
        let url = "http://localhost:8080/hello";
        axios.get(url,config).then(response =>{
            console.log(response);
        }, error =>{
            console.log(error);
        })
        
    }

    logOut(event){
        event.preventDefault();
        this.props.onLogout();
    }

    render() {
        //console.log("inside login authenticated status  " + this.state.authenticated );
        return(
            <div className = {styles.div}>
               <div className = {styles.container}>
               <form>    
                   
                   <input name  ="username" placeholder = "Username" type = "text" onChange = {this.handleInputChange}/>
                    {/* <i className = {styles.icon}><FontAwesomeIcon icon={faUser}/></i> */}
                   <br/>
                    <input name ="password" placeholder ="Password" type = "password" onChange = {this.handleInputChange} />
                    {/* <i className = {styles.icon}><FontAwesomeIcon icon={faLock}/></i> */}            
                    <br/>
                    <button onClick = {this.handleSubmit}>Login</button>
                </form>
               </div>               
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        authenticated : state.isLoggedIn.authenticated
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onAuth: (username, password, history) => dispatch(actions.auth(username,password, history)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
