

const initialstate={
    products:[]
}

export function productReducer(state=initialstate,action){
    switch (action.type) {
        case "PRODUCT_SUCCESS":
            console.log("added")
            return {...state, products:action.payload};

        case "add_product":
            return {...state,products: [...state.products,action.payload]}
        case "delete_product":
          const  id=action.payload
          const newproducts=state.products.filter((item)=>
        item.id!=id)
            return {...state, products:newproducts}
    
        default:
            return state;
    }

}