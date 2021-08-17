const notesInitialState = [];

const notesReducer = (state = notesInitialState, action) => {
   switch (action.type) {
      case 'ADD_NOTE': {
         return [action.payload, ...state];
      }
      case 'GET_ITEM': {
         return [...action.payload];
      }
      case 'REMOVE_ITEM': {
         return state.filter((ele) => ele._id !== action.payload);
      }
      case 'EDIT_ITEM': {
         return state.map((ele) => {
            if (ele._id === action.payload._id) {
               return { ...action.payload };
            } else {
               return { ...ele };
            }
         });
      }
      case 'GETBY_ID': {
         return state.map((ele) => {
            if (ele._id === action.payload._id) {
               return { ...action.payload };
            } else {
               return { ...ele };
            }
         });
      }
      default: {
         return [...state];
      }
   }
};

export default notesReducer;
