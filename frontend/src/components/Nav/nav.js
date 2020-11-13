import React from 'react';
import styles from  './nav.module.css';
import {Link} from 'react-router-dom';
import * as actionUtil from '../../store/actions/index';
import {connect} from 'react-redux'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserCircle}  from '@fortawesome/free-solid-svg-icons'
import Joole from '../../logo.png';
import Search from "../Search/search";

const nav = (props) =>{ 

    let navBar = null;
    let displayImg = props.fromSearch !== true ? <img className = {styles.logo}  src = {Joole}/> : "";
    let displaySearchBar = props.fromSearch !== true ? <div className = {styles.searchContainer}> 
        <Search />
    </div> : "";
    
    {props.authenticated === true ? 
        navBar = 
        <div className = {styles.div}>
            <div className = {styles.logoContainer}>
                {displayImg}
            </div>
            {displaySearchBar}
            <div className = {styles.profileContainer}>
                <div className = {styles.profile}><FontAwesomeIcon icon={faUserCircle} size = "3x"/></div>
                <Link to="/login" className = {styles.link}> 
                    <div className = {styles.span} onClick = {props.logOut}>Logout</div>
                </Link>
            </div>
        </div>
        
        : navBar = <div className = {styles.div} style  = {{justifyContent : "flex-end"}}>
        <Link to="/register" className = {styles.link}> 
            <span className = {styles.span} >Register</span>
        </Link>
        <Link to = "/login" className = {styles.link}>
            <span className = {styles.span}>Login</span>
        </Link>
        </div>
    }
    return(
        navBar
    )
}

const mapDispatchToProps = dispatch => {
    return {
      logOut : () => {dispatch(actionUtil.logOut())},
    }
}

const mapStateToProps = state =>{
    return {
        authenticated : state.isLoggedIn.authenticated,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(nav)