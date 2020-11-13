import React from 'react';
import Logo from '../../logo.png';
import Aux from '../../utility/aux';
import styles from './header.module.css';

const header = () =>{
    return (
    <Aux>
        <div className = {styles.header}>
            <div className = {styles.img}>
                <img src = {Logo} alt = "logo"/>
                </div>
        <span className  = {styles.span}>Building Selection Platform</span>
        </div>
    </Aux>)
}


export default header;