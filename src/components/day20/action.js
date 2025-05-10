

export function buychocAction(noofchoc){
    return {
        type: "buychoc",
        payload: noofchoc
    }
}

export function returnchocAction(noofchoc){
    return {
        type:"returnchoc",
        payload:noofchoc

    }
}