import * as actionUtil from "./actions";
import Axios from "axios";

export const product = (product) =>{
    return {
        type : actionUtil.PRODUCT,
        product : product
    }
}

export const category = (category) =>{
    return {
        type : actionUtil.CATEGORY,
        category : category,
    }
}


const findByCategoryData = (data) =>{
    return {
        type : actionUtil.FIND_CATEGORY,
        data : data
    }
}

const findByCategoryAndSearchData = (data) =>{
    return {
        type : actionUtil.FIND_CATEGORY_SEARCH,
        category : category,
        data : data,
    }
}

export const findByCategory = (category) =>{
    let jwt = localStorage.getItem('jwt');
    //console.log(jwt);
    //console.log("Search by category");
    let config = {
        headers :{
            Authorization : "Bearer " + jwt
        }
    }
    return dispatch =>{
        let url = "http://localhost:8080/product/category/"+category
        Axios.get(url, config).then(res => {
            //console.log(res);
            dispatch(findByCategoryData(res.data));
        })
    }
}

export const findByCategoryAndSearch =(category, search) =>{
    let jwt = localStorage.getItem('jwt');
    let url = "http://localhost:8080/product/category/"+category+"/subcategory/"+search;
    let config = {
        headers :{
            Authorization : "Bearer " + jwt,
        }
    }
    console.log(jwt);
    return dispatch =>{
        Axios.get(url, config).then(res =>{
            console.log(res);
            dispatch(findByCategoryAndSearchData(res.data));
        })
    }
}

export const compare = (id) =>{
    return {
        type : actionUtil.COMPARE,
        data : id,
    }
}

export const filter = (data) =>{
    return {
        type : actionUtil.FILTER,
        data : data
    }
}
