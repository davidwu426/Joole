import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import {connect} from 'react-redux';
import { Typography, Checkbox, Grid, Button } from '@material-ui/core';
import * as actionUtil from '../../store/actions';



const item = (props) => {
    //console.log(props.compareData.indexOf(`${props.id}` > -1));
    return <Card style = {{maxWidth : "400px"}}>
        <CardHeader  subheader = {`Verified ${props.verified}`}/>
        <CardMedia style = {{height : "100px"}} image = {props.image}/>
        <CardContent style = {{padding : "0px"}}>
            <Typography align = "center" variant = "h6" color = "primary">{props.manufacturer}</Typography>
            <Typography align = "center" variant = "h6" color = "primary">{props.series}</Typography>
            <Typography align = "center" variant = "h6" color = "primary">{props.model}</Typography>
            <Typography align = "center" variant = "subtitle1"  style = {{backgroundColor : "#aaa"}}>{props.airflow} CFM</Typography>
            <Typography align = "center" variant = "subtitle1"  style = {{backgroundColor : "#aaa"}}>{props.power} W at max speed</Typography>
            <Typography align = "center" variant = "subtitle1"  style = {{backgroundColor : "#aaa"}}>{props.sound} dBA at max speed</Typography>
            <Typography align = "center" variant = "subtitle1"  style = {{backgroundColor : "#aaa"}}>{props.diameter}" fan sweep diameter</Typography>
            <Typography align = "center" color = "error">Past Specifications:</Typography>
            <Typography align = "center" color = "error">{props.firm} firm / {props.global} global</Typography>
        </CardContent>
        <CardActions>
            <Grid container>
                <Grid item style = {{alignItems : "center", display : "flex" , width : "50%"}}>
                    <Checkbox onChange = {props.updateCompare(`${props.id}`)} />
                    <Typography>Compare</Typography>
                </Grid>
                <Grid item  style = {{alignItems : "center",display : "flex",  width : "50%", justifyContent : "flex-end"}}> <Button variant = "contained" color ="primary">Add</Button></Grid>
            </Grid>
        </CardActions>
    </Card>
}

const mapStateToProps =state =>{
    return {
        compareData : state.product.compareData
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        updateCompare:(id) => (event) => dispatch(actionUtil.compare(id)),
    }
}
export default connect (mapStateToProps, mapDispatchToProps) (item);

