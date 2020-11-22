export const initialState = {
    basket: [],
    user: null
}

export const ACTIONS = {
    ADD_TO_BASKET: "add-to-basket",
    REMOVE_FROM_BASKET: "remove-from-basket",
    SET_USER: "set-user",
    EMPTY_BASKET: "empty-basket"
}

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    switch(action.type){
        case ACTIONS.ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case ACTIONS.REMOVE_FROM_BASKET:
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )
            let newBasket = [...state.basket];

            if(index >= 0){
                newBasket.splice(index, 1);
            }else{
                console.warn(`Can't remove product (id: ${action.id}) as its not in the basket`);
            }

            return {
                ...state,
                basket: newBasket
            }

        case ACTIONS.SET_USER:
            return{
                ...state,
                user: action.user
            }
        case ACTIONS.EMPTY_BASKET:
            return {
                ...state,
                basket: []
            }
        default:
            return state;
    }
}

export default reducer;