import React, {Component} from 'react';
import styles from './App.module.css';
import Login from './components/Login/login';
import Register from './components/Register/register';
import Header from './components/Header/header';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Nav from './components/Nav/nav';
import {connect} from 'react-redux';
import Search from './components/Search/search';
import Product from './components/Product/product';
import Aux from './utility/aux'
import * as actionUtil from './store/actions/index';
import searchContainer from './components/Search/search-container';
import Compare from './components/Compare/compare';
class App extends Component {

  componentDidMount(){
    this.props.checkStatus();
  }

  constructor(props){
    super(props);
    this.state = {
    }
  }
  render(){
   //console.log(this.props.authenticated);
   let route = <Aux>
     <Nav />
      <Header />
      <Route  path = "/register"  exact component = {Register}/>
      <Route path = "/Login"  exact component = {Login}/>
      <Redirect  to = "/login"/>
   </Aux>
   

    if(this.props.authenticated){
      route = 
      <Aux >
          <Route path = "/search"  component = {searchContainer}/>
          <Route path =  '/product' component = {Product} />
          <Route path = "/compare" component  = {Compare}/>
          <Redirect to = "/search"/>
      </Aux>
    }

    return (
      <div className={styles.app}>
        <br/>
        {route}
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
      authenticated : state.isLoggedIn.authenticated,
      token : state.isLoggedIn.token,
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    checkStatus : () => dispatch(actionUtil.checkStatus())
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (App);
