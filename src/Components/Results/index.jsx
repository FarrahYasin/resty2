// import React from 'react';
// import PropTypes from 'prop-types';
import './Results.scss';

function Results(props){
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
        <pre>{ JSON.stringify(props.data.headers, undefined, 2)}</pre>
        </div>
        <div className='results'>
        <h2>Results:</h2>
        <pre>{ JSON.stringify(props.data.results, undefined, 2)}</pre>
        </div>
        </div>

    )}
  </section>
    );
}

export default Results;


  //   <section>
    //   {props.loading ? (
    //     <div>Loading...</div>
    //   ) : (
    //     <pre>{props.data.headers ? JSON.stringify(props.data, undefined, 2) : null}</pre>
    //   )}
    // </section>