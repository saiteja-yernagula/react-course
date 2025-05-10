import { legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootreducer } from "./combinereducer";


export const reduxstore=legacy_createStore(rootreducer,composeWithDevTools)