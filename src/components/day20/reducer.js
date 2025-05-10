
const initialState={
    totalchoc:100,
    availchoc:100
}

export function reducercounter(state=initialState,action){
    switch (action.type) {
        case "buychoc":
            return {...state, availchoc:state.availchoc-action.payload}

        case "returnchoc":
            return {...state, availchoc:state.availchoc+action.payload}
        default:
            return state
            
    }

}