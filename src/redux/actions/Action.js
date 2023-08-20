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

export const updateQnty = (items) => {
    return {
        type: "UPDATE",
        payload: items
    };
};

