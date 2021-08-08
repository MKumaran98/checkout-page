import { ProductStateType, ProductActionType } from "./product.types";

export const productReducer = (
  state: ProductStateType,
  action: ProductActionType
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, inCart: true }],
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                inCart: true,
              }
            : product
        ),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(({ id }) => id !== +action.payload),
        products: state.products.map((product) =>
          product.id === +action.payload
            ? {
                ...product,
                inCart: false,
              }
            : product
        ),
      };
    default:
      return state;
  }
};
