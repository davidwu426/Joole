import React , {Component} from 'react'
import {connect} from 'react-redux';
import * as actionUtil from '../../store/actions'
import styles from './product.module.css';
import Aux from '../../utility/aux';
import Nav from '../Nav/nav';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Grid, Button}from '@material-ui/core';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import CustomSlider from './slider';
import Item from './item';
import Compare from '../Compare/compare';
import {Link} from 'react-router-dom';
class Product extends Component{

    constructor(props){
        super(props)
        this.state ={
            selected : "product",
            sliderValues : [[1990,2019], [2000,10000], [10,100], [20,80], [20,100], [0,10],[0,1500]],
            display : this.props.data,
        }
        this.modelYearFilter = this.modelYearFilter.bind(this);
        this.reset = this.reset.bind(this);
    }

    changeSelected(value){
        this.setState({...this.state, ...{selected :value}} , ()=>{
            //console.log(this.state.selected);
        })
    }

    onChange = (index) => (event, value) =>{
        this.setState(prevState =>{
            let sliderVal = prevState.sliderValues;
            sliderVal[index] = value;
            return sliderVal;
        })
    }

    reset(){
        const filterReset = [[1990,2019], [2000,10000], [10,100], [20,80], [20,100], [0,10],[0,1500]];
        this.setState({
            ...this.state , ...{
                sliderValues : filterReset
            }
        })
        //console.log(this.state.sliderValues);
    }

    modelYearFilter(){
        let test = this.props.data;

        test = test.filter(item => {
            return (item.year >= this.state.sliderValues[0][0] && item.year <= this.state.sliderValues[0][1]);
        })

        // airflow filter
        test = test.filter(item =>{
            return (item.airflow >= this.state.sliderValues[1][0] && item.airflow <= this.state.sliderValues[1][1])
        })

        // power filter
        test = test.filter(item =>{
            return (item.maxPower >= this.state.sliderValues[2][0] && item.maxPower <= this.state.sliderValues[2][1])
        })

        //speed sound filter
        test = test.filter(item =>{
            return (item.speedSound >= this.state.sliderValues[3][0] && item.speedSound <= this.state.sliderValues[3][1])
        })

        // diameter filter
        test = test.filter(item =>{
            return (item.diameter >= this.state.sliderValues[4][0] && item.diameter <= this.state.sliderValues[4][1])
        })

        // firm filter
        test = test.filter(item=>{
            return (item.firm >= this.state.sliderValues[5][0] && item.firm <= this.state.sliderValues[5][1])
        })

        // global filter
        test = test.filter(item =>{
            return (item.global >= this.state.sliderValues[6][0] && item.global <= this.state.sliderValues[6][1])
        })
        
        //console.log(test);
        this.props.updateFilter(test);
    
    }

    render(){
        let path = this.props.category+ " > " + this.props.product;
        //console.log(this.props.data);
        return(
            <Aux>
                <Nav fromSearch = {false} />
                <div className = {styles.container}>
                <div className = {styles.sidebar}>
                     <div className = {styles.search}>
                         <span className = {styles.searchLabel} style = {{width : "50%"}}>Search</span>
                         <span className = {styles.searchButton}>
                            <button onClick = {this.modelYearFilter} className  = {styles.button}>Save</button>
                            <button onClick = {this.reset} className  = {styles.button}>Clear</button>
                         </span>
                     </div>
                     <div className = {styles.search}>
                         <button onClick = {this.changeSelected.bind(this, "product")} className = {styles.productButton} style = {{backgroundColor : this.state.selected === "product" ? "rgba(125,183,239,1)" : "white", color : this.state.selected === "product" ? "white" : "black"}}>Product</button>
                         <button onClick = {this.changeSelected.bind(this, "project")} className = {styles.productButton} style = {{backgroundColor : this.state.selected === "project" ? "rgba(125,183,239,1)" : "white", color : this.state.selected === "project" ? "white" : "black"}}>Project</button>
                     </div>

                     {/* Sliders  : Product Type*/}
                     <div>
                         <ExpansionPanel>
                             <ExpansionPanelSummary expandIcon={<ArrowDropDownOutlinedIcon />} style = {{backgroundColor : "#aaa"}}>
                                 <Typography>Product Type</Typography>
                             </ExpansionPanelSummary>
                             <ExpansionPanelDetails style = {{display : "block", padding : "8px 8px 8px" }}>
                             <Typography id = "model-year"> <ImportExportIcon/>Model Year</Typography>
                             <Grid container spacing={2}>
                                 <Grid item > <input  value  = {this.state.sliderValues[0][0]} className = {styles.input}/></Grid>
                                 <Grid item xs >
                                     <CustomSlider 
                                     min ={1990} 
                                     max = {2019}
                                     step = {1}
                                     value = {this.state.sliderValues[0]}
                                     onChange= {this.onChange(0)}
                                     label = "model-year"
                                     />
                                </Grid>
                                <Grid item > <input value  = {this.state.sliderValues[0][1]} className = {styles.input}/></Grid>
                             </Grid>
                             </ExpansionPanelDetails>
                         </ExpansionPanel>
                     </div>

                    {/* Sliders  : Technical Specification */}
                     <div>
                         <ExpansionPanel>
                         <ExpansionPanelSummary expandIcon={<ArrowDropDownOutlinedIcon />} style = {{backgroundColor : "#aaa"}}>
                                 <Typography>Technical Specification</Typography>
                             </ExpansionPanelSummary>
                             <ExpansionPanelDetails style = {{display : "block", padding : "8px 8px 8px"}}>
                             <Typography id="air-flow" gutterBottom > <ImportExportIcon/> Airflow (CFM)</Typography>
                            <Grid container spacing= {2}>
                                <Grid item ><input className = {styles.input} value = {this.state.sliderValues[1][0]}/> </Grid>
                                <Grid item xs >
                                <CustomSlider 
                                     min ={2000} 
                                     max = {10000}
                                     step = {100}
                                     value = {this.state.sliderValues[1]}
                                     onChange= {this.onChange(1)}
                                     label = "air-flow"
                                     />
                                </Grid>
                                <Grid item ><input className = {styles.input} value = {this.state.sliderValues[1][1]}/></Grid>
                            </Grid>

                            {/* Sliders  : Max Power */}
                           <Typography id = "max-power"> <ImportExportIcon/>Max Power (W)</Typography>
                           <Grid container spacing ={2}>
                               <Grid item > <input value = {this.state.sliderValues[2][0]} className = {styles.input} /></Grid>
                               <Grid item xs >
                               <CustomSlider 
                                     min ={10} 
                                     max = {100}
                                     step = {1}
                                     value = {this.state.sliderValues[2]}
                                     onChange= {this.onChange(2)}
                                     label = "max-power"
                                     />
                               </Grid>
                               <Grid item > <input value = {this.state.sliderValues[2][1]} className = {styles.input} /></Grid>
                           </Grid>
                          {/* Sliders  : Sound at max speed */}
                             <Typography id = "max-speed"><ImportExportIcon/>Sound at max speed (dBA)</Typography>
                             <Grid container spacing ={2}>
                               <Grid item > <input value = {this.state.sliderValues[3][0]} className = {styles.input} /></Grid>
                               <Grid item xs ><CustomSlider 
                                     min ={20} 
                                     max = {80}
                                     step = {1}
                                     value = {this.state.sliderValues[3]}
                                     onChange= {this.onChange(3)}
                                     label = "max-speed"
                                     /></Grid>
                               <Grid item > <input value = {this.state.sliderValues[3][1]} className = {styles.input} /></Grid>
                           </Grid>
                             {/* Sliders  : Fan Sweep Diameter */}
                             <Typography id = "diameter"> <ImportExportIcon/>Fan sweep diameter (in)</Typography>
                             <Grid container spacing ={2}>
                               <Grid item > <input value = {this.state.sliderValues[4][0]} className = {styles.input} /></Grid>
                               <Grid item xs >
                                   <CustomSlider 
                                     min ={20} 
                                     max = {100}
                                     step = {1}
                                     value = {this.state.sliderValues[4]}
                                     onChange= {this.onChange(4)}
                                     label = "diameter"
                                     />
                               </Grid>
                               <Grid item > <input value = {this.state.sliderValues[4][1]} className = {styles.input} /></Grid>
                           </Grid>
                             
                             </ExpansionPanelDetails>
                         </ExpansionPanel>
                     </div>
                     {/* Sliders  : Brand */}
                     <div>
                     <ExpansionPanel>
                         <ExpansionPanelSummary expandIcon={<ArrowDropDownOutlinedIcon />} style = {{backgroundColor : "#aaa"}}>
                                 <Typography>Brand</Typography>
                             </ExpansionPanelSummary>
                             <ExpansionPanelDetails>
                                 Hello world
                             </ExpansionPanelDetails>
                         </ExpansionPanel>
                     </div>
                     {/* Sliders  : Past Selection */}
                     <div>
                     <ExpansionPanel>
                         <ExpansionPanelSummary expandIcon={<ArrowDropDownOutlinedIcon />} style = {{backgroundColor : "#aaa"}}>
                            <Typography>Past Selection</Typography>
                            {/* Sliders  :Firm */}
                             </ExpansionPanelSummary>
                             <ExpansionPanelDetails style  = {{display : "block"}}>
                                <Typography id = "firm"> <ImportExportIcon/>Firm</Typography>
                                <Grid container spacing ={2}>
                                <Grid item > <input value = {this.state.sliderValues[5][0]} className = {styles.input} /></Grid>
                                <Grid item xs >
                                <CustomSlider 
                                     min ={0} 
                                     max = {10}
                                     step = {1}
                                     value = {this.state.sliderValues[5]}
                                     onChange= {this.onChange(5)}
                                     label = "firm"
                                     />
                                </Grid>
                                <Grid item > <input value = {this.state.sliderValues[5][1]} className = {styles.input} /></Grid>
                                </Grid>
                               {/* Sliders  : Global */}
                                <Typography id = "global"> <ImportExportIcon/>Global</Typography>
                                <Grid container spacing ={2}>
                                <Grid item > <input value = {this.state.sliderValues[6][0]} className = {styles.input} /></Grid>
                                <Grid item xs >
                                <CustomSlider 
                                     min ={0} 
                                     max = {1500}
                                     step = {50}
                                     value = {this.state.sliderValues[6]}
                                     onChange= {this.onChange(6)}
                                     label = "global"
                                     />
                                </Grid>
                                <Grid item > <input value = {this.state.sliderValues[6][1]} className = {styles.input} /></Grid>
                                </Grid>
                               
                             </ExpansionPanelDetails>
                         </ExpansionPanel>
                     </div>
                     {/* Sliders  : Certification */}
                     <div>
                     <ExpansionPanel>
                         <ExpansionPanelSummary expandIcon={<ArrowDropDownOutlinedIcon />} style = {{backgroundColor : "#aaa"}}>
                                 <Typography >Certification</Typography>
                             </ExpansionPanelSummary>
                             <ExpansionPanelDetails>
                                 hello world
                             </ExpansionPanelDetails>
                         </ExpansionPanel>
                     </div>
                </div>
                <div className = {styles.content}>
                    <div className = {styles.path}>{path}</div>
                    <div className = {styles.contentContainer}>
                    <Grid container spacing = {2} style = {{paddingRight : "20px", margin : "0px"}}>
                        {this.props.displayData.map((item,index) =>{
                            return <Grid item xs = {12} sm = {6} md = {4} lg = {3} key = {index}>
                                <Item 
                                    verified ={item.verified}
                                    manufacturer = {item.manufacturer}
                                    series = {item.series}
                                    model = {item.model}
                                    airflow = {item.airflow}
                                    power = {item.maxPower}
                                    sound = {item.speedSound}
                                    diameter = {item.diameter}
                                    image = {require(`../../assets/${item.model}.png`)}
                                    firm = {item.firm}
                                    global = {item.global}
                                    id = {item.id}
                                    />
                                </Grid>
                        })}
                        
                    </Grid>
                    </div>
                    <Link to = "/compare"> <Button style = {{marginRight : "10px"}}  variant = "contained" color = "primary">Compare </Button> </Link>
                </div>

            </div>
            </Aux>

        )
    }
}

const mapStateToProps = state =>{
    return {
        category : state.product.category,
        product : state.product.product,
        data : state.product.data,
        displayData : state.product.displayData,
    }
}


const mapDispatchToProps = dispatch =>{
    return {
        updateProduct : (product) => dispatch (actionUtil.product(product)),
        updateCategory : (category) => dispatch (actionUtil.category(category)),
        updateFilter : (data) => dispatch(actionUtil.filter(data)),
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Product)