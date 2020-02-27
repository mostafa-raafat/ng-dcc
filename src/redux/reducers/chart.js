// ACTION TYPES //
export const types = {
    "INCREMENT_CHART": "INCREMENT_CHART"
  };
  
  // REDUCERS //
  export const initialState = {
    charData: [200, 450, 300, 125]
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case types.INCREMENT_CHART:
        return {
          ...state,
          charData: [...state.charData, 360]
        };
      default:
        return state;
    }
  };
  
  // ACTIONS //
  export const incrementChart = () => ({ type: types.INCREMENT_CHART, payload: {} });
  