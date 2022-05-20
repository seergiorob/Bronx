
const cartActions = {
  addToCart: (burger) => {
    // console.log(burger)
      return (dispatch) => {
          dispatch({ type: 'cart/addToCart', payload: burger })
      }
  },

  removeFromCart: (burger) => {

      return (dispatch) => {
          dispatch({ type: 'cart/removeFromCart', payload: burger  })
      }
  },

  updateCart: (burger, qty) => {
      return (dispatch) => {
          dispatch({ type: 'cart/updateCart', payload: { id: burger, bool: qty } })
      }
  },

  // checkLocalStorage: () => {
  //     return (dispatch) => {
  //         const cart = JSON.parse(localStorage.getItem('cart'))
  //         dispatch({ type: 'cart/checkLocalStorage', payload: cart })

  //     }
  // },

  clearCart: () => {
      return (dispatch) => {
          dispatch({ type: 'cart/clearCart' })
      }
  }


}
export default cartActions