import React, {Component} from 'react'
import styles from './search.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch,}  from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import Aux from '../../utility/aux'

import {connect} from 'react-redux';
import * as actionUtil from '../../store/actions';

class Search extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            search : "",
            filter : [],
            category : "Mechanical",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleSelectFilter = this.handleSelectFilter.bind(this);
        this.search = this.search.bind(this);
    }

    handleChange(event){
        
            this.setState({
                ...this.state, [event.target.name] : event.target.value
            }, () =>{
                this.setState({filter : this.handleFilter()});
            })
    }

    handleFilter(){
        let  categories =  ["HVAC Fan", "Boilers", "Water Hose"];
        this.setState({filter : []});
        return categories.filter((word) => word.indexOf(this.state.search) > -1);
    }

    handleSelectFilter(value){
        this.setState({search : value})
    }
    

    search(){
        this.props.category(this.state.category);
        this.props.product(this.state.search);
        if(this.state.search.trim() === ""){
            this.props.findByCategory(this.state.category);
        }else{
            this.props.findByCategoryAndSearch(this.state.category, this.state.search);
        }
    }

    render(){  
        console.log(this.state.category);
        //console.log(props.fromSearch);
        return(
            <Aux>
                <div className = {styles.inputcontainer}>
                <div>
                    <select className = {styles.select} onChange = {this.handleChange} name = "category">
                        <option value = "Mechanical">Mechanical</option>
                        <option value = "Electric">Electric</option>
                    </select>
                    <input type = "text" placeholder = "Type Here" className = {styles.search}  name = "search" onChange = {this.handleChange} value = {this.state.search}/>
                    <Link className = {styles.link} to = "/product" onClick  = {this.search}> <button className = {styles.btn} ><FontAwesomeIcon icon = {faSearch} /></button></Link>
                 </div>
                 <ul className  = {styles.filter} style = {{dipslay : this.state.search.length === 0 ? 'inline-block' : 'none'}}>
                    {this.state.filter.map((item, key) => 
                        { return <li onClick = {this.handleSelectFilter.bind(this,item)} key = {key}>{item}</li>})}
                 </ul>
                </div>
            </Aux>
        )
    }
}

// const mapStateToProps = state =>{
//     return {
//         category : state.product.category,
//         product : state.product.product,
//     }
// }

const mapDispatchToProps = dispatch =>{
    return {
        product : (product) => dispatch (actionUtil.product(product)),
        category : (category) => dispatch (actionUtil.category(category)),
        findByCategory : (category) => dispatch(actionUtil.findByCategory(category)),
        findByCategoryAndSearch : (category, search) => dispatch(actionUtil.findByCategoryAndSearch(category, search)),
    }
}


export default connect (null, mapDispatchToProps) (Search)