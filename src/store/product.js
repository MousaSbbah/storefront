// Each category should have a normalized name, display name, and a description

let initialState = {
    products:  [
        {
        "_id": "5f1a51f01910080017657ed2",
        "name": "1TB USB",
        "category": "electronics",
        "inStock": 935,
        "price": 100.99,
        "__v": 0
        },
        {
        "_id": "5f1a51f71910080017657ed3",
        "name": "Monitor",
        "category": "electronics",
        "inStock": 835,
        "price": 100.99,
        "__v": 0
        },
        {
        "_id": "5f1a51ff1910080017657ed4",
        "name": "Mouse",
        "category": "electronics",
        "inStock": 932,
        "price": 100.99,
        "__v": 0
        },
        {
        "_id": "5f1a52031910080017657ed5",
        "name": "Keyboard",
        "category": "electronics",
        "inStock": 957,
        "price": 100.99,
        "__v": 0
        },
        {
        "_id": "5f1a5f761910080017657ed6",
        "name": "Apples",
        "category": "food",
        "inStock": 928,
        "price": 100.1,
        "__v": 0
        },
        {
        "_id": "5f1a5f861910080017657ed7",
        "name": "TV",
        "category": "electronics",
        "inStock": 1837,
        "price": 698,
        "__v": 0
        },
        {
        "_id": "5f1a5faf1910080017657ed8",
        "name": "Calzones",
        "category": "food",
        "inStock": 853,
        "price": 100.1,
        "__v": 0
        },
       
        ],
        currentCategory:'all',
  };
  
  // this is a reducer
  const reducer =  (state = initialState, action) => {
    let { type, payload } = action;
    if(state.currentCategory === payload) return state;
    switch (type) {
      case 'FILTER_PRODUCTS':
        let newCategory = payload;
        const products =  initialState.products.filter(val=>{
            return (val.category === newCategory);
        })
        return {products,currentCategory:newCategory}
      case 'ALL':
        return initialState;
      default:
        return state;
    }
  
  };
  
  // BELOW ARE THE ACTIONS
  export const filterProducts = (category) => {
    if(category === 'all') return {type: 'ALL'}

    return {
      type: 'FILTER_PRODUCTS',
      payload: category,
    };
  
  

  };
  
  export default reducer ;
  