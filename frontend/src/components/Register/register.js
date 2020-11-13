import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';
import style from './register.module.css';
import Aux from '../../utility/aux';

class Register extends Component{
  
    constructor(props){
        super(props);
        //console.log(this.props.history);
        this.state = {
            controls : {
                username :{
                    isTouched : false,
                    value : "",
                    valid : true,
                },
                email : {
                    isTouched : false,
                    value : "",
                    valid : false,
                },
                password : {
                    isTouched : false,
                    value : "",
                    valid : false,
                },
                passwordMatcher  :{
                    isTouched : false,
                    value : "",
                    valid : false,
                }
            },
            isValid : false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.errorMessage = this.errorMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkValidity = this.checkValidity.bind(this);
        this.checkCanRegister = this.checkCanRegister.bind(this);
    }

    handleChange(event){
        const updatedControls = {
            ...this.state.controls,
            [event.target.name] : {
                ...this.state.controls[event.target.name],
                isTouched  : true,
                value : event.target.value,
                valid : this.checkValidity(event, event.target.name),
            }
        };
        this.setState({controls : updatedControls});
        this.checkCanRegister(updatedControls);
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.onRegister(this.state.controls.username.value, this.state.controls.password.value, this.state.controls.email.value, this.props.history);
    }

    checkValidity(event, rule){
        //console.log(event.target.value);
        if(rule === "username"  &&  event.target.value.length > 5 ){
            return true;
        }

        if(rule === "email"){
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            return pattern.test(event.target.value)
        }

        if (rule === "password" && event.target.value.length > 8){
            return true
        }

        if(rule === "passwordMatcher" && event.target.value === this.state.controls.password.value){
            return true;
        }
        return false;
    }

    errorMessage(name){
        if(name === "username"){
            if(this.state.controls.username.valid && this.state.controls.username.isTouched){
                return ""
            }else if (this.state.controls.username.isTouched){
                return <div className = {style.invalid}>Please have more than 5 characters in the username!</div>
            }else{
                return ""
            }
        }

        if(name === "email"){
            if(this.state.controls.email.valid && this.state.controls.username.isTouched){
                return ""
            }else if (this.state.controls.email.isTouched){
                return <div className = {style.invalid}>Invalid Email!</div>
            }else{
                return ""
            }
        }

        if(name === "password"){
            if(this.state.controls.password.valid && this.state.controls.username.isTouched){
                return ""
            }else if (this.state.controls.password.isTouched){
                return <div className = {style.invalid}>Please have more than 8 characters in the password!</div>
            }else{
                return ""
            }
        }

        if (name === "passwordMatcher"){
            if(this.state.controls.passwordMatcher.valid && this.state.controls.username.isTouched){
                return ""
            }else if (this.state.controls.passwordMatcher.isTouched){
                return <div className = {style.invalid}>Your passwords do not match!</div>
            }else{
                return ""
            }
        }
    }

    checkCanRegister(controls){
        if(controls.username.valid  && controls.email.valid && 
            controls.password.valid && controls.passwordMatcher.valid ){
                this.setState({isValid : true});
            }
    }

    render(){
        let button = null
        {this.state.isValid ? button =  <button className ={style.button} onClick = {this.handleSubmit}>Register</button> : button = <button className ={style.button}  disabled > Register</button> }
        return(
            <Aux>
                <div className = {style.div}>
               <div className = {style.container}>
                <form>
                <input required type = "text" placeholder = "Username" onChange = {this.handleChange} name = "username"/>
                {this.errorMessage("username")}
                <br/>

                <input required type = "email" placeholder = "Email" name = "email" onChange = {this.handleChange}/>
                {this.errorMessage("email")}
                <br/>

                <input required type = "password" placeholder = "Password" name = "password" onChange = {this.handleChange} />
                {this.errorMessage("password")}
                <br/>

                <input required type = "password" placeholder = "Re-enter Password" name = "passwordMatcher" onChange = {this.handleChange}/>
                {this.errorMessage("passwordMatcher")}
                <br/>
                {button}
                </form>
                </div>
                </div>
            </Aux>
            
        );
    }
}

const mapDispatchToProps = (dispatch)=> {
    return ({
        onRegister : (username, password, email,history) => dispatch(actions.register(username, password,email,history)),
    })
}



export default connect(null, mapDispatchToProps) (Register)