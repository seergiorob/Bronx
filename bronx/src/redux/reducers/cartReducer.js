const initialState = {
  cart: [],
  total: 0,
  totalQty: 0

}

const TotalPrice = (cart = []) => {
  const total = cart.map(burgeritem => burgeritem.burger.price * burgeritem.qty).reduce((acc, curr) => acc + curr, 0)
  return total.toFixed(2)
}

const TotalQty = (cart = []) => {
  const totalQty = cart.map(burgeritem => burgeritem.qty).reduce((acc, curr) => acc + curr, 0)
  return totalQty
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'cart/addToCart':
          const bool = state.cart.some(item => item.burger.id === action.payload.id)


          let cartAux = [...state.cart]


          if (!bool) { cartAux.push({ burger: action.payload, qty: 1 }) }
        //   localStorage.setItem('cart', JSON.stringify(cartAux))
          return {
              ...state,
              cart: cartAux,
              total: TotalPrice(cartAux),
              totalQty: TotalQty(cartAux)
          }
      case 'cart/removeFromCart':
          console.log(action.payload.burger.id)
          const cart = state.cart.filter(item => item.burger.id !== action.payload.burger.id);
          return {
              ...state,
              cart,
              total: TotalPrice(cart),
              totalQty: TotalQty(cart)
          }
      case 'cart/updateCart':
          const cartAux2 = [...state.cart]
          const index = cartAux2.findIndex(item => item.burger.id === action.payload.id)
          console.log(index, 'holu')
          cartAux2[index].qty = action.payload.bool ? cartAux2[index].qty + 1 : cartAux2[index].qty - 1
        //   localStorage.setItem('cart', JSON.stringify(cartAux2))
          return {
              ...state,
              cart: cartAux2,
              total: TotalPrice(cartAux2),
              totalQty: TotalQty(cartAux2)
          }

    //   case 'cart/checkLocalStorage':
    //       return {
    //           ...state,
    //           cart: action.payload,
    //           total: TotalPrice(action.payload),
    //           totalQty: TotalQty(action.payload)
    //       }
      case 'cart/clearCart':
          return {
              ...state,
              cart: [],
              total: 0,
              totalQty: 0
          }

      default:
          return state

  }
}

export default cartReducer