export const initalState = {
    basket: [],
};

function reducer(state, action) {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];
            let index = newBasket.findIndex((index) => index.id === action.id);
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.log("Item not present. ID: " + action.id);
            }
            return { ...state, basket: newBasket };
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
}

export default reducer;
