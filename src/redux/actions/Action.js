export const addToCart = (item)=>{
    return{
        type:"ADD",
        payload:item
    }
}

export const dltFromCart = (item) => {
    return {
        type: "DLT",
        payload: item
    }
}
