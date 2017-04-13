export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (item) => {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_TO_CART,
      payload: item,
    })
  }
}

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
})
