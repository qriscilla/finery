import { allItems } from '../allItems';
// import { addItem, removeItem, plusQuantity, minusQuantity } from '../actions/actions';

const initState = {
    items: allItems,
    cart: [],
    subTotal: 0,
    cartTotal: 0
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        // An item is added to cart
        case 'ADD_ITEM':
            let addedItem = state.items.find(item => item.id === action.id);
            let existingItem = state.cart.find(item => action.id === item.id);
            // If item already exists in cart
            if (existingItem) {
                addedItem.quantity += 1;
                return {
                    ...state,
                    subTotal: state.subTotal + addedItem.price,
                    cartTotal: state.subTotal + addedItem.price
                }
            // If item doesn't already exist in cart
            } else {
                addedItem.quantity = 1;
                let newSubTotal = state.subTotal + addedItem.price;
                return {
                    ...state,
                    cart: [...state.cart, addedItem],
                    subTotal: newSubTotal,
                    cartTotal: newSubTotal
                }
            }
        
        // An item was removed from cart
        case 'REMOVE_ITEM':
            let removedItem = state.cart.find(item => action.id === item.id);
            let newCart = state.cart.filter(item => action.id !== item.id);
            let newSubTotal = state.subTotal - (removedItem.price * removedItem.quantity);
            console.log(removedItem);
            return {
                ...state,
                cart: newCart,
                subTotal: newSubTotal,
                cartTotal: newSubTotal
            }

        // Item quantity was increased
        case 'ADD_QUANTITY':
            const increasedItem = state.items.find(item => item.id === action.id);
            const newNewCart = state.cart.map(item => item.id === action.id
                ? {...item, quantity: item.quantity + 1}
                : item
            );
            let newNewSubTotal = state.subTotal + increasedItem.price;
            return {
                ...state,
                cart: newNewCart,
                subTotal: newNewSubTotal,
                cartTotal: newNewSubTotal
            }

        // Item quantity was decreased
        case 'REMOVE_QUANTITY':
            let decreasedItem = state.items.find(item => item.id === action.id);
            // If removed quantity is 1
            if (decreasedItem.quantity === 1) {
                const newCart = state.cart.map(item => item.id === action.id
                    ? {...item, quantity: item.quantity - 1}
                    : item
                );
                let newSubTotal = state.subTotal - decreasedItem.price;
                return {
                    ...state,
                    cart: newCart,
                    subTotal: newSubTotal,
                    cartTotal: newSubTotal
                }
            // If removed quantity is not 0
            } else if (decreasedItem.quantity !== 0) {
                decreasedItem.quantity -= 1;
                const newCart = state.cart.map(item => item.id === action.id
                    ? {...item, quantity: item.quantity - 1}
                    : item
                );
                let newSubTotal = state.subTotal - decreasedItem.price;
                return {
                    ...state,
                    cart: newCart,
                    subTotal: newSubTotal,
                    cartTotal: newSubTotal
                }
            }

        break;
        
        default:
            return state;

    }    
}

export default cartReducer;