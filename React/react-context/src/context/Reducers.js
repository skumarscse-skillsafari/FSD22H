export const cartReducer = (state, action) => {
  console.log(state); // state: { products: [20], cart: []}
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
      // console.log({
      //   ...state,
      //   cart: [...state.cart, { ...action.payload, qty: 1 }],
      // });
      break;
    case "REMOVE_FROM_CART":
      break;
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
      break;

    default:
      return state;
      break;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      break;
    case "FILTER_BY_STOCK":
      break;
    case "FILTER_BY_DELIVERY":
      break;
    case "FILTER_BY_RATING":
      break;
    case "FILTER_BY_SEARCH":
      break;
    case "CLEAR_FILTERS":
      break;

    default:
      return state;
      break;
  }
};
