// import react from 'rect';
import "./History.scss";

function History(props) {
  return (
    <>
      <section className="history">
        <h2>All History...</h2>
        <ol className="list-of-history">
          {props.history.map((entry, index) => (
            <li key={index} className="item-of-history">
              <div className="info-about-history">
                <span className="method-history">Method: </span>
                <span className="text-history">{entry.method}</span>
                <br />
                <span className="span1-url-of-history"> URL:</span>
                <span className="span2-url-history">{entry.url}</span>
              </div>
              <button
                className="button-history"
                onClick={() =>
                  props.dispatch({ type: "SET_REQUEST_PARAMS", payload: entry })
                }
              >
                GO AGAIN !
              </button>
              {/* <hr className="hr-button-history"></hr> */}
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

export default History;

{/* <section>
  <h2>All History...</h2>
  <ol>
    {props.history.map((entry, index) => (
      <li key={index}>
        <div>
          <span>Method: </span>
          <span>{entry.method}</span>
          <br />
          <span> URL:</span>
          <span>{entry.url}</span>
        </div>
        <button
          onClick={() =>
            props.dispatch({ type: "SET_REQUEST_PARAMS", payload: entry })
          }
        >
          GO AGAIN !
        </button>
        <hr></hr>
      </li>
    ))}
  </ol>
</section>; */}
