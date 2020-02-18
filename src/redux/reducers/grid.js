// ACTION TYPES //
export const types = {
    SET_GRID_DATA: "SET_GRID_DATA"
  };
  
  // REDUCERS //
  export const initialState = {
    gridData: []
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case types.SET_GRID_DATA:
        return {
          ...state,
          gridData: action.payload
        };
      default:
        return state;
    }
  };
  
  // ACTIONS //
  export const setGridData = (payload) => ({ type: types.SET_GRID_DATA, payload: payload });
  