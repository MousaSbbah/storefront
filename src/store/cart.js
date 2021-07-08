// Each category should have a normalized name, display name, and a description

let initialState = {
    inCart: [      
    ]
  };
  
  // this is a reducer
  const reducer =  (state = initialState, action) => {
    let { type, payload } = action;
    let newCart;
    switch (type) {
      case 'ADD':
        
        newCart = state.inCart
        if(! state.inCart.includes(payload)) newCart.push(payload);
        return {inCart:newCart};
      case 'REMOVE':
        newCart = state.inCart
        newCart.splice(payload, 1);
        return {inCart:newCart};
      default:
        return state;
    }
  
  };
  
  // BELOW ARE THE ACTIONS
  export const addToCart = (product) => {
    return {
      type: 'ADD',
      payload: product,
    };
  };
  
  export const remove = (idx) => {
    return {
        type: 'REMOVE',
        payload: idx,
    };
  };
  
  export default reducer ;
  