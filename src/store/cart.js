const ADD_CART = 'cart/ADD_CART'
const DELETE_CART = 'cart/DELETE_CART'

export const addCart = (id) => {
    return {
        type: ADD_CART,
        id
    }
}

export const deleteCart = (id) => {
    return {
        type: DELETE_CART,
        id
    }
}

export default function cartReducer(state = {}, action) {
    switch (action.type) {
        case ADD_CART: {
            const newObj = {
                ...state,
                [action.id]: { id: action.id, count: 1 }
            };
            return newObj
        }
        case DELETE_CART: {
            const newObj = {
                ...state
            }
            delete newObj[action.id]
            return newObj
        }
        default:
            return state;
    }
}
