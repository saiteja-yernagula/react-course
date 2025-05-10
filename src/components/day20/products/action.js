

export function productsAction(data){
    return{
        type: "PRODUCT_SUCCESS",
        payload:data
    }
}

export function addproductAction(data){
    return{
        type:"add_product",
        payload:data
    }
}

export function deleteproductAction(id){
    return {
        type:"delete_product",
        payload:id
    }
    
}