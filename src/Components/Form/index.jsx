import "./Form.scss";
// import { useState } from "react";
import { useReducer } from "react";
import {ActionTypes} from '../../Reducers/actions'
import {initialState, reducer} from '../../Reducers/reducer'

function Form(props) {
  // const [url, setUrl] = useState("");
  // const [method, setMethod] = useState("GET");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      method: state.method,
      url: state.url,
    };
    props.handleApiCall(formData);
  };

  return (
    <>
    <div className="container">

      <div className="text"> Form</div>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <span className="text">URL: </span>
          <div className="input-data">
            <input
              name="url"
              type="text"
              placeholder="Enter URL HERE"
              // onChange={(e) => setUrl(e.target.value)}
              onChange={(e) => dispatch({ type: ActionTypes.SET_URL_IN_FORM, payload: e.target.value })}
            />
          </div>
          <div className="underline"></div>
        </div>
        <label>
          <button id="go" type="submit">
            GO!
          </button>
        </label>
      </form>
      <br />

      <div className="text">Post and update</div>

      <div className="main-container">
      <button
          // onClick={() => setMethod("GET")}     
          onClick={() => {() => dispatch({ type: ActionTypes.SET_METHOD_IN_FORM, payload: "GET" })}}     
          style={{ backgroundImage: state.method === "GET" ? "linear-gradient(11deg,#6e438e, #5B42F3 1111%,#6e438e)" : "transparent" }}
          id="get"
        >
          GET
        </button>

        <button
          // onClick={() => setMethod("POST")}
          onClick={() => {() => dispatch({ type: ActionTypes.SET_METHOD_IN_FORM, payload: "POST" })}}
          style={{ backgroundImage: state.method === "POST" ? "linear-gradient(11deg,#6e438e, #5B42F3 1111%,#6e438e)" : "transparent" }}
          id="post"
        >
          POST
        </button>

        <button
          // onClick={() => setMethod("PUT")}
          onClick={() => {() => dispatch({ type: ActionTypes.SET_METHOD_IN_FORM, payload: "PUT" })}}
          style={{ backgroundImage: state.method === "PUT" ? "linear-gradient(11deg,#6e438e, #5B42F3 1111%,#6e438e)" : "transparent" }}
          id="put"
        >
          PUT
        </button>

        <button
          // onClick={() => setMethod("DELETE")}
          onClick={() => {() => dispatch({ type: ActionTypes.SET_METHOD_IN_FORM, payload: "DELETE" })}}
          style={{ backgroundImage: state.method === "DELETE" ? "linear-gradient(11deg,#6e438e, #5B42F3 1111%,#6e438e)" : "transparent" }}
          id="delete"
        >
          DELETE
        </button>
      </div>

      <label>
        <textarea
          id="myTextarea"
          name="comments"
          rows="8"
          cols="80"
          required
          placeholder="JSON  Format"
        ></textarea>
      </label>
    </div>
    
    </>
  );
}

export default Form;



//solution using useState
// import "./Form.scss";
// // import { useState } from "react";

// function Form(props) {
  // const [url, setUrl] = useState("");
  // const [method, setMethod] = useState("GET");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = {
//       method: method,
//       url: url,
//     };
//     props.handleApiCall(formData);
//   };

//   return (
//     <>
//     <div className="container">

//       <div className="text"> Form</div>

//       <form onSubmit={handleSubmit}>
//         <div className="form-row">
//           <span className="text">URL: </span>
//           <div className="input-data">
//             <input
//               name="url"
//               type="text"
//               placeholder="Enter URL HERE"
//               // onChange={(e) => setUrl(e.target.value)}
//             />
//           </div>
//           <div className="underline"></div>
//         </div>
//         <label>
//           <button id="go" type="submit">
//             GO!
//           </button>
//         </label>
//       </form>
//       <br />

//       <div className="text">Post and update</div>

//       <div className="main-container">
//       <button
          // onClick={() => setMethod("GET")}     
//           style={{ backgroundImage: method === "GET" ? "linear-gradient(11deg,#6e438e, #5B42F3 1111%,#6e438e)" : "transparent" }}
//           id="get"
//         >
//           GET
//         </button>

//         <button
          // onClick={() => setMethod("POST")}
//           style={{ backgroundImage: method === "POST" ? "linear-gradient(11deg,#6e438e, #5B42F3 1111%,#6e438e)" : "transparent" }}
//           id="post"
//         >
//           POST
//         </button>

//         <button
//           // onClick={() => setMethod("PUT")}
//           style={{ backgroundImage: method === "PUT" ? "linear-gradient(11deg,#6e438e, #5B42F3 1111%,#6e438e)" : "transparent" }}
//           id="put"
//         >
//           PUT
//         </button>

//         <button
          // onClick={() => setMethod("DELETE")}
//           style={{ backgroundImage: method === "DELETE" ? "linear-gradient(11deg,#6e438e, #5B42F3 1111%,#6e438e)" : "transparent" }}
//           id="delete"
//         >
//           DELETE
//         </button>
//       </div>

//       <label>
//         <textarea
//           id="myTextarea"
//           name="comments"
//           rows="8"
//           cols="80"
//           required
//           placeholder="JSON  Format"
//         ></textarea>
//       </label>
//     </div>
    
//     </>
//   );
// }

// export default Form;
