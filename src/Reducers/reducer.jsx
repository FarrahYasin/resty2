import { ActionTypes } from "./actions";

export const initialState = {
  data: { headers: null, results: null },
  requestParams: {},
  loading: false,
  selectedMethod: "",
  history: [],
  url: "",                           // FORM
  method: "GET",                     // FORM
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_DATA:
      return { ...state, data: action.payload };
    case ActionTypes.SET_REQUEST_PARAMS:
      return { ...state, requestParams: action.payload };
    case ActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case ActionTypes.SET_SELECTED_METHOD:
      return { ...state, selectedMethod: action.payload };
    case ActionTypes.SET_ADD_TO_HISTORY:
      return { ...state, history: [action.payload, ...state.history] };
    case ActionTypes.SET_URL_IN_FORM:       // FORM
      return { ...state, url: action.payload };
    case ActionTypes.SET_METHOD_IN_FORM:     // FORM
      return { ...state, method: action.payload };
    default:
      return state;
  }
};
