import { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Results from "./Components/Results";

function App() {
  const [data, setData] = useState({ headers: null, results: null });
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");

  const callApi = async (requestParams) => {
    if (requestParams.url) {
      setLoading(true);
      axios
        .get(requestParams.url)
        .then((res) => {
          console.log("All RESPONSE", res);
          setData({ headers: res.headers, results: res.data });
          setSelectedMethod(requestParams.method);
        })
        .catch((error) => {
          console.error("THERE IS AN ERROR IN API CALL:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    callApi(requestParams);
    // setLoading(true);
  }, [requestParams]);

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={setRequestParams} />
      <Results
        data={data}
        loading={loading}
        selectedMethod={selectedMethod}
        requestParams={requestParams}
        handleApiCall={setRequestParams}
      />
      <Footer />
    </>
  );
}
export default App;
