const userInitialState = [];

const userReducer = (state = userInitialState, action) => {
   switch (action.payload) {
      case 'REGISTER': {
         return [...state, action.payload];
      }

      case 'LOGIN': {
         return [...state, action.payload];
      }

      default: {
         return [...state];
      }
   }
};

export default userReducer;
