import React from 'react';
import Aux from '../../utility/aux'
import Search from './search'
import Header from '../Header/header';
import Nav from '../../components/Nav/nav';

const searchContainer = () =>{
    return <Aux>
        <Nav fromSearch = {true}/>
        <Header />
        <Search />
    </Aux>
}

export default searchContainer;