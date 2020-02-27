// ACTION TYPES //
export const types = {
    SET_GRID_DATA: "SET_GRID_DATA",
    "INCREMENT_LONG": "INCREMENT_LONG"
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
      case types.INCREMENT_LONG:
        return {
          ...state,
          gridData: [...state.gridData, {
            "F__OBJECTID": 10,
            "Name": "Test",
            "Type": "Ambulance",
            "Longitude": 55,
            "Latitude": 55
          }]
        };
      default:
        return state;
    }
  };
  
  // ACTIONS //
  export const setGridData = (payload) => ({ type: types.SET_GRID_DATA, payload: payload });
  export const incrementLong = (payload) => ({ type: types.INCREMENT_LONG, payload: payload });
  