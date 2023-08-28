import { useState,useEffect} from 'react';
import axios from 'axios'
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';


function App() {
const [data, setData]= useState({headers: null, results:null});
const [requestParams, setRequestParams]= useState({});
const [loading, setLoading] = useState(false);
const [selectedMethod, setSelectedMethod] = useState(""); 
const [request, setRequest] = useState(null); 


useEffect(() => {
  if (request) {
    const callApi = async () => {
      try {
        setLoading(true);
        const res= await axios(request);
        setData({headers: res.headers, results: res.data});
        setRequestParams(request);
        setSelectedMethod(request.method);
      } catch (error) {
        console.error("Error calling API:", error);
      } finally {
        setLoading(false);
      }
    };

    callApi();
  }
}, [request]);
//  const callApi= async (requestParams) => {
  
//    setLoading(true);
//    if (requestParams.url){
//     let res = await axios.get(requestParams.url);
//     setData({headers: res.headers, results: res.data});
//     setRequestParams(requestParams);
//     setSelectedMethod(requestParams.method);
//     setLoading(false);
//     }
//     }

//   useEffect(() => {
//     callApi(requestParams);
//     setLoading(false)
// }, [requestParams]);


// function changeUrl(){
//   callApi({method: requestParams.method, url: requestParams.url})
// }
    return (
      <>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={setRequest} />
        <Results data={data} loading={loading} selectedMethod={selectedMethod} requestParams={requestParams} />
        <Footer />
      </>
    );
  
}
// changeUrl={changeUrl}
export default App;
