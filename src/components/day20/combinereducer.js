import { combineReducers } from "redux";
import { productReducer } from "./products/reducer";
import { reducercounter } from "./reducer";


export const rootreducer=combineReducers(
    {
        products: productReducer,
        counter:reducercounter
    }
)

console.log("productReducer:", typeof productReducer);
console.log("reducercounter:", typeof reducercounter);
