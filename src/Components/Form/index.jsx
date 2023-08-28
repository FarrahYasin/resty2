import "./Form.scss";
import { useState } from "react";

function Form(props) {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      method: method,
      url: url,
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
              onChange={(e) => setUrl(e.target.value)}
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
        <button  onClick={() => setMethod("GET")} id="get">
          GET
        </button>

        <button onClick={() => setMethod("POST")} id="post">
          POST
        </button>

        <button onClick={() => setMethod("PUT")} id="put">
          PUT
        </button>

        <button onClick={() => setMethod("DELET")} id="delete">
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
