import * as actionUtil from '../actions/actions';
import { compare } from '../actions';

const initialState = { 
    product : "",
    category : "",
    data : [],
    displayData : [],
    compareData : [],
    compareDisplayData : [],
}

const product = (state, action) =>{
    return {
        ...state, ...{
            product : action.product
        }
    }
}

const category =(state, action) =>{
    return {
        ...state, ...{
            category : action.category,
        }
    }
}

const data = (state, action) =>{
    return {...state, ...{
        data : action.data,
        displayData : action.data,
    }}
}

const filter = (state, action) =>{
    return {...state, ...{
        displayData : action.data
    }}
}

const compareProduct = (state, action)=>{
    let del = false;
    let temp = [];

    for(var item in state.compareData){
        if(action.data !== state.compareData[item]){
            temp.push(state.compareData[item]);
        }

        if(action.data === state.compareData[item]){
            del = true;
        }
    }

    if(del === false){
        temp.push(action.data);
    }

    console.log(temp);

    let temp2 = [];

    for(var item in temp){
        for (var x in state.data){
            if(temp[item] == state.data[x].id){
                temp2.push(state.data[x]);
            }
        }
    }

    return {
        ...state , ...{
            compareData : temp,
            compareDisplayData : temp2,
        }
    }
    
}



const reducer = (state = initialState , action) =>{
    switch(action.type){
        case(actionUtil.PRODUCT):
            return product(state, action);
        case(actionUtil.CATEGORY):
            return category(state, action);
        case (actionUtil.FIND_CATEGORY):
            return data(state, action);
        case(actionUtil.FIND_CATEGORY_SEARCH):
            return data(state, action);
        case(actionUtil.FILTER):
            return filter(state, action);
        case(actionUtil.COMPARE):
            return compareProduct(state, action);
        default :
            return state;
    }
}

export default reducer