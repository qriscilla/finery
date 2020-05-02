export const addItem = (id) => {
    return {
        type: 'ADD_ITEM',
        id
    }
};

export const removeItem = (id) => {
    return {
        type: 'REMOVE_ITEM',
        id
    }
};

export const addQuantity = (id) => {
    return {
        type: 'ADD_QUANTITY',
        id
    }
};

export const removeQuantity = (id) => {
    return {
        type: 'REMOVE_QUANTITY',
        id
    }
};