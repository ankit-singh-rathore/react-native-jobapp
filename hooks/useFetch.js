import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isloading, setIsloading] = useState(false);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": 'bbb4db950bmsh12d98fc87928e59p117345jsn7e7e3955408c',
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      'content-type': 'application/octet-stream',
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsloading(true);
    
    try{
      const res = await axios.request(options);
      setData(res.data.data);
      setIsloading(false);
    }
    catch(error) {
      console.log(error);
    }
    finally{
      setIsloading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    fetchData();
  }
  return { data, isloading, error, reFetch}
}

export default useFetch