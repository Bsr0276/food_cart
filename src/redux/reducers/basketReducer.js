import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  isLoading: true,
  error: null,
  data: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.BASKET_LOADING:
      return { ...state, isLoading: true };

    case ACTION_TYPES.BASKET_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case ACTION_TYPES.BASKET_SUCCESS:
      return { ...state, isLoading: false, error: null, data: action.payload };

    case ACTION_TYPES.ADD_TO_BASKET:
      return { ...state, data: [...state.data, action.payload] };

    case ACTION_TYPES.UPDATE_BASKET:
      const updatedData = state.data.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      return { ...state, data: updatedData };

    case ACTION_TYPES.REMOVE_FROM_BASKET:
      const filteredData = state.data.filter((i) => i.id !== action.payload);
      return { ...state, data: filteredData };

    case ACTION_TYPES.CLEAR_BASKET:
      return { ...state, data: [] };

    default:
      return state;
  }
};

export default basketReducer;
