import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";
import Cards from "./components/Cards";
import {toast} from 'react-toastify'
import {data,apiUrl} from './data';
import { useState,useEffect } from "react";
function App() {
  const [loading,setLoading]=useState(true);
  const [courses,setCourses]=useState(null);
  async function fetchData(){
    setLoading(true);
    try{
    const response=await fetch(apiUrl);
    const output=response.json();
    }catch(error){
      toast.error("API URL NOT WORKING")
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className="App">
      <Navbar/>
      <Filter data={data}/>
      {
      loading?(<Spinner/>):(<Cards data={courses}/>)
}
    </div>
  );
}

export default App;
