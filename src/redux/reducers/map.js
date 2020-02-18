// ACTION TYPES //
export const types = {
  MAP_LOADED: "MAP_LOADED"
};

// REDUCERS //
export const initialState = {
  loaded: false,
  mapView: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.MAP_LOADED:
      return {
        ...state,
        loaded: true,
        mapView: action.payload
      };
    default:
      return state;
  }
};

// ACTIONS //
export const mapLoaded = (payload) => ({ type: types.MAP_LOADED, payload: payload });
