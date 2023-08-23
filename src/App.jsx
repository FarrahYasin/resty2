import { useState } from 'react';
import axios from 'axios'
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';


function App() {
const [data, setData]= useState(null);
const [requestParams, setRequestParams]= useState({});
const [loading, setLoading] = useState(false);


 const callApi= async (requestParams) => {
  
   setLoading(true);
  let req = await axios.get(requestParams.url);
    setData(req.data);
    setRequestParams(requestParams);
    setLoading(false);

  }

    return (
      <>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>

        <Form handleApiCall={callApi} />
        <Results data={data} loading={loading}/>
        <Footer />
      </>
    );
  
}

export default App;
