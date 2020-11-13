import React from 'react'
import Slider from '@material-ui/core/Slider';

const slider = (props) =>{

    return <Slider 
    value = {props.value}
    min = {props.min}
    max = {props.max}
    onChange = {props.onChange}
    step = {props.step}
    aria-labelledby= {props.label}
    />
}

export default slider;