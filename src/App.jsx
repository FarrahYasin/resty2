import { useEffect , useReducer} from "react";
import axios from "axios";
import "./App.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Results from "./Components/Results";
import History from "./Components/History";

// _______________________solution using useReducer__________________________________

import {ActionTypes} from './Reducers/actions'
import {initialState, reducer} from './Reducers/reducer'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('this is the state from app', state)

    const callApi = async (requestParams) => {
      dispatch({ type: ActionTypes.SET_REQUEST_PARAMS, payload: requestParams });
    }

    useEffect(() => {
      const fetchData = async () => {
        if (state.requestParams.url) {
          dispatch({ type: ActionTypes.SET_LOADING, payload: true });
          try {
            const res = await axios.get(state.requestParams.url);
            dispatch({ type: ActionTypes.SET_DATA, payload: { headers: res.headers, results: res.data } });
            dispatch({ type: ActionTypes.SET_SELECTED_METHOD, payload: state.requestParams.method });
            // dispatch({ type: "ADD_TO_HISTORY", payload: state.requestParams });
            dispatch({ type: ActionTypes.SET_ADD_TO_HISTORY, payload: state.requestParams });
            console.log("All RESPONSE", res);
          } catch (error) {
            console.error("THERE IS AN ERROR IN API CALL:", error);
          } finally {
            dispatch({ type: ActionTypes.SET_LOADING, payload: false });
          }
        }
      };
      fetchData(); //-> Call async function immediately
      console.log('this is the requestparams', state.requestParams)
    
}, [state.requestParams]);
  
  // callApi(state.requestParams);
  return (
    <>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form handleApiCall={(params) => dispatch({ type: ActionTypes.SET_REQUEST_PARAMS, payload: params })} state={state} dispatch={dispatch}/>
      <Results
        data={state.data}
        loading={state.loading}
        selectedMethod={state.selectedMethod}
        requestParams={state.requestParams}
        handleApiCall={(params) => dispatch({ type: ActionTypes.SET_REQUEST_PARAMS, payload: params })}
      
        updateUrl={(newUrl) =>
          callApi({ method: state.requestParams.method, url: newUrl })
        }
      />
      <History history={state.history} dispatch={dispatch} />

      <Footer />
    </>
  );
}
export default App;



// _____________________________________________________________________________
// before seperat the files
// const initialState = {
//   data: { headers: null, results: null },
//   requestParams: {},
//   loading: false,
//   selectedMethod: "",
//   history: [],
// };

// const ActionTypes = { 
//   SET_DATA: "SET_DATA",
//   SET_REQUEST_PARAMS: "SET_REQUEST_PARAMS",
//   SET_LOADING: "SET_LOADING",
//   SET_SELECTED_METHOD: "SET_SELECTED_METHOD",
//   SET_ADD_TO_HISTORY: "ADD_TO_HISTORY"
  
// };


// const reducer = (state, action) => {
//   switch (action.type) {
//     case ActionTypes.SET_DATA:
//       return { ...state, data: action.payload };
//     case ActionTypes.SET_REQUEST_PARAMS:
//       return { ...state, requestParams: action.payload };
//     case ActionTypes.SET_LOADING:
//       return { ...state, loading: action.payload };
//     case ActionTypes.SET_SELECTED_METHOD:
//       return { ...state, selectedMethod: action.payload };
//       case ActionTypes.SET_ADD_TO_HISTORY:
//         return { ...state, history: [action.payload, ...state.history] };
//     default:
//       return state;
//   }
// };
// _____________________________________________________________________________________


////
  // _______________________solution using useState__________________________________

// function App() {

//   const [data, setData] = useState({ headers: null, results: null });
//   const [requestParams, setRequestParams] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [selectedMethod, setSelectedMethod] = useState("");

//   const callApi = async (requestParams) => {
//     if (requestParams.url) {
//       setLoading(true);
//       axios
//         .get(requestParams.url)
//         .then((res) => {
//           console.log("All RESPONSE", res);
//           setData({ headers: res.headers, results: res.data });
//           setSelectedMethod(requestParams.method);
//         })
//         .catch((error) => {
//           console.error("THERE IS AN ERROR IN API CALL:", error);
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     }
//   };

//   useEffect(() => {
//     callApi(requestParams);
//     // setLoading(true);
//   }, [requestParams]);

//   return (
//     <>
//       <Header />
//       <div>Request Method: {requestParams.method}</div>
//       <div>URL: {requestParams.url}</div>
//       <Form handleApiCall={setRequestParams} />
//       <Results
//         data={data}
//         loading={loading}
//         selectedMethod={selectedMethod}
//         requestParams={requestParams}
//         handleApiCall={setRequestParams}
//       />
//       <Footer />
//     </>
//   );
// }

