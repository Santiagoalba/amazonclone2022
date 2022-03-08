export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) => 
    basket?.reduce((value, nextValue) => nextValue.price + value , 0);


function reducer(state, action) {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'ADD_TO_BASKET':
            return {...state, 
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            const newBasket = [...state.basket];
            console.log(action.id, 'id');
            const index = newBasket.findIndex((basketItem) => basketItem.id === action.id);
            console.log(index);

            if(index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn('item not in basket');
            }

            return {
            ...state,
            basket: newBasket
            };

        default:
            return state;
    }
}

export default reducer;
