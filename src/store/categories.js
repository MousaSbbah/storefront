// Each category should have a normalized name, display name, and a description

let initialState = {
  categories: [
    { name: 'all', displayName: 'All' , description:'ALL product in our store'  },
    { name: 'electronics', displayName: 'Electronics' , description:'Electronic Devices and tools'  },
    { name: 'food', displayName: 'Food' , description:'any thing related to food'  }
    
  ],
  active: 'all',
};

// this is a reducer
const reducer =  (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'CHANGE_CATEGORY':
      let newCategory = payload;
      console.log("🚀 ~ file: categories.js ~ line 20 ~ reducer ~ newCategory", newCategory)
      return { categories:state.categories, active:newCategory };
    case 'ALL':
      console.log("🚀 ~ file: categories.js ~ line 20 ~ reducer ~ newCategory", 'all')
      return initialState;
    default:
      return state;
  }

};

// BELOW ARE THE ACTIONS
export const categoryChange = (category) => {
  return {
    type: 'CHANGE_CATEGORY',
    payload: category,
  };
};

export const allList = () => {
  return {
    type: 'ALL',
  };
};

export default reducer ;
