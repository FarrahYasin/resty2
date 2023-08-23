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
    <div className="div1">
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input
            name="url"
            type="text"
            placeholder="Enter URL HERE"
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type="submit">GO!</button>
        </label>
      </form>
      
      <br/>
      <label className="methods">
        <button onClick={() => setMethod("GET")} id="get">
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
      </label>
     

      <label>
        Post and update
       <br/>
        <textarea
          id="myTextarea"
          name="comments"
          rows="4"
          cols="100"
          placeholder="JSON  Format"
        ></textarea>
      </label>
    </div>
  );
}

export default Form;
