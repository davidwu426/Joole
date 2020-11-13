import React from 'react';
import styles from './compare.module.css';
import Logo from '../../logo.png';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import picture from '../../assets/78003.png'
import Aux from '../../utility/aux';
import Nav from '../Nav/nav';
import {connect} from 'react-redux';
import { Typography, Grid } from '@material-ui/core';
import { createRequireFromPath } from 'module';
const compare = (props) =>{
    let path = props.category;
    if(props.product.length === 0){
        path = props.category + " > Compare";
    }else{
        path = props.category + " > " + props.product + " > Compare "; 
    }
    console.log(props.compareDisplayData);
    return<Aux>
        <Nav fromSearch = {false} />
        <div className = {styles.container}>
        {/* <div className = {styles.path}>{path}</div> */}
        <Typography color = "primary" style = {{marginLeft : "10px", height : "40px"}}>{path}</Typography>
         <table className = {styles['table-one']}>
        <tbody>
        <tr id = "picture">
            <td style = {{borderRight : "1px solid #aaa"}}></td>
            {
                props.compareDisplayData.map((product,index) =>{
                    return <td key = {index} className = {styles.td} style = {{borderBottom : "1px solid #aaa", borderLeft:"none"}}>
                        <img className = {styles.img} src ={require("../../assets/"+ product.model+".png")} />
                    </td>
                })
            }
        </tr>
        <tr className = {styles.tr} id = "description">
            <td className = {styles.td} style = {{fontSize : ".7rem"}}>DESCRIPTION</td>
            {
                props.compareDisplayData.map((product,index)=>{
                    return <td style = {{borderBottom:"1px solid #aaa", borderRight : "1px solid #aaa"}} key = {index}></td>
                })
            }
        </tr>
        <tr id = "manufacturer"> 
            <td className = {styles.td} style = {{backgroundColor : "#aaa", borderBottom : "none", borderTop:"none"}}>Manufacturer</td>
            {
                props.compareDisplayData.map((product,index)=>{
                    return <td style = {{borderRight : "1px solid #aaa", borderBottom : "1px solid lightgrey"}} key = {index}>{product.manufacturer}</td>
                })
            }
        </tr>
        <tr id = "series">
            <td className = {styles.td} style = {{backgroundColor : "#aaa", borderBottom : "none", borderTop:"none"}}>Series</td>
            {
                props.compareDisplayData.map((product,index)=>{
                    return <td style = {{borderRight : "1px solid #aaa",borderBottom : "1px solid lightgrey"}} key = {index}>{product.series}</td>
                })
            }
        </tr>
        <tr id = "model">
            <td className = {styles.td} style = {{backgroundColor : "#aaa", borderBottom : "none", borderTop:"none"}}>Model</td>
            {
                props.compareDisplayData.map((product,index)=>{
                    return <td style = {{borderRight : "1px solid #aaa"}} key = {index}>{product.model}</td>
                })
            }
        </tr>
        <tr id = "type">
            <td className = {styles.td} style = {{fontSize : ".7rem"}}>TYPE</td>
            {
                props.compareDisplayData.map((product,index)=>{
                    return <td style = {{borderBottom:"1px solid #aaa", borderRight : "1px solid #aaa", borderTop : "1px solid #aaa"}} key = {index}></td>
                })
            }
        </tr>
        <tr id = "type">
            <td className = {styles.td} style = {{backgroundColor : "#aaa", borderBottom : "none", borderTop:"none"}}>Use Type</td>
            {
                props.compareDisplayData.map((product,index)=>{
                    return <td style = {{borderRight : "1px solid #aaa",borderBottom : "1px solid lightgrey"}} key = {index}>{product.useType}</td>
                })
            }
        </tr>
        <tr id = "application">
            <td className = {styles.td} style = {{backgroundColor : "#aaa", borderBottom : "none", borderTop:"none"}}>Application</td>
            {
                props.compareDisplayData.map((product,index)=>{
                    return <td style = {{borderRight : "1px solid #aaa",borderBottom : "1px solid lightgrey"}} key = {index}>{product.application}</td>
                })
            }
        </tr>
        <tr id = "location">
            <td className = {styles.td} style = {{backgroundColor : "#aaa", borderBottom : "none", borderTop:"none"}}>Mouting Location</td>
            {
                props.compareDisplayData.map((product,index)=>{
                    return <td style = {{borderRight : "1px solid #aaa",borderBottom : "1px solid lightgrey"}} key = {index}>{product.mountLocation}</td>
                })
            }
        </tr>
        <tr id = "accessories">
            <td className = {styles.td} style = {{backgroundColor : "#aaa", borderBottom : "none", borderTop:"none"}}> Accessories</td>
            {
                props.compareDisplayData.map((product,index)=>{
                    return <td style = {{borderRight : "1px solid #aaa",borderBottom : "1px solid lightgrey"}} key = {index}>{product.accessories}</td>
                })
            }
        </tr>
        <tr id = "year">
            <td className = {styles.td} style = {{backgroundColor : "#aaa", borderBottom : "none", borderTop:"none"}}> Model Year</td>
            {
                props.compareDisplayData.map((product,index)=>{
                    return <td style = {{borderRight : "1px solid #aaa"}} key = {index}>{product.year}</td>
                })
            }
        </tr>
        <tr id = "specification">
            <td className = {styles.td} style = {{fontSize : ".7rem"}}>TECHNICAL SPECIFICATION</td>
            {
                props.compareDisplayData.map((product,index)=>{
                    return <td style = {{borderBottom:"1px solid #aaa", borderRight : "1px solid #aaa"}} key = {index}></td>
                })
            }
        </tr>
        <tr id = "airflow">
            <td className = {styles.td} style = {{backgroundColor : "#aaa", borderBottom : "none", borderTop:"none"}}>Airflow (CFM)</td>
            {
                props.compareDisplayData.map((product,index)=>{
                    return <td style = {{borderRight : "1px solid #aaa"}} key = {index}>{product.airflow}</td>
                })
            }
            
        </tr>
        <tr id  ="power">
            <td className = {styles.td} style = {{backgroundColor : "#aaa", borderBottom : "none", borderTop:"none"}}>Power (W)</td>
            {
                props.compareDisplayData.map((product,index)=>{
                    return <td key = {index}>
                        <Grid style ={{display:"flex",justifyContent:"space-evenly"}} continer>
                            <Grid  lg = "3"style = {{backgroundColor: "lightgrey"}} item>Min</Grid>
                            <Grid  lg = "3"item> {product.minPower}</Grid>
                            <Grid  lg = "3"style = {{backgroundColor: "lightgrey"}} item>Max</Grid>
                            <Grid  lg = "3"item>{product.maxPower}</Grid>
                        </Grid>
                    </td>
                })
            }
        </tr>
        <tr id  ="voltage">
            <td className = {styles.td} style = {{backgroundColor : "#aaa", borderBottom : "none", borderTop:"none"}}>Operating Voltage (VAC)</td>
            {
                props.compareDisplayData.map((product,index)=>{
                    return <td key = {index}>
                        <Grid style ={{display:"flex",justifyContent:"space-evenly"}} continer>
                            <Grid lg = "3" style = {{backgroundColor: "lightgrey"}} item>Min</Grid>
                            <Grid lg = "3"  item>{product.minVoltage}</Grid>
                            <Grid lg = "3" style = {{backgroundColor: "lightgrey"}} item>Max</Grid>
                            <Grid lg = "3"  item>{product.maxVoltage}</Grid>
                        </Grid>
                    </td>
                })
            }
        </tr>
        <tr id = "fan">
            <td className = {styles.td} style = {{backgroundColor : "#aaa", borderBottom : "none", borderTop:"none" }}>Fan Speed (RPM)</td>
            {
                props.compareDisplayData.map((product,index)=>{
                    return <td key = {index}>
                        <Grid style ={{display:"flex",justifyContent:"space-evenly"}} continer>
                            <Grid lg = "3" style = {{backgroundColor: "lightgrey"}} item>Min</Grid>
                            <Grid lg = "3" item> {product.minFanSpeed}</Grid>
                            <Grid lg = "3" style = {{backgroundColor: "lightgrey"}} item>Max</Grid>
                            <Grid lg = "3" item> {product.maxFanSpeed}</Grid>
                        </Grid>
                    </td>
                })
            }
        </tr>
        </tbody>
        </table>
         </div>
    </Aux>
}

const mapStateToProps = state =>{
    return {
        category : state.product.category,
        product : state.product.product,
        compareDisplayData : state.product.compareDisplayData,
    }
}


export default connect(mapStateToProps, null) (compare)