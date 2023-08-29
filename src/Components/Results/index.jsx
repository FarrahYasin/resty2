// import React from 'react';
import './Results.scss';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/adventure_time.css';

function Results(props) {
  const changeUrl = (url) => {
    props.handleApiCall({ ...props.requestParams, url });
  };

  return (
    <section>
      {props.loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h3>Request Method: {props.selectedMethod}</h3>
          <h3>URL: {props.requestParams.url}</h3>
          <div className='header'>
            <h2> Headers:</h2>
            <JSONPretty
              json={props.data.headers}
              mainStyle="background-image: linear-gradient(14deg,#AF40FF, #5B42F3 111%,#00DDEB)"
              valueStyle="color:black"
              stringStyle="color:black"
            ></JSONPretty>
          </div>
          <div className='results'>
            <h2>Results:</h2>
            <JSONPretty
              json={props.data.results}
              mainStyle="background-image: linear-gradient(14deg,#AF40FF, #5B42F3 111%,#00DDEB)"
              valueStyle="color:black"
              stringStyle="color:black"
            ></JSONPretty>
            {props.data.results && (
              <div className="button-container">
                {props.data.results.previous && (
                  <button onClick={() => changeUrl(props.data.results.previous)}>
                    Previous
                  </button>
                )}
                {props.data.results.next && (
                  <button onClick={() => changeUrl(props.data.results.next)}>
                    Next
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Results;
