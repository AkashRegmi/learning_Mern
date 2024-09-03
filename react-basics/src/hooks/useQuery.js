 import { useState,useEffect } from "react";
 
 export const useQuery = (apiEndPoint) => { 
    const [data, setData] = useState([]);
    const [state, setState] = useState("loading");
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const getData = async () => {
        try {
          const res = await fetch(apiEndPoint);
          const resData = await res.json();
          setData(resData);
          setState("Success");
        } catch (error) {
          setError(error.message);
          setState("Error");
        }
      };
      getData();
    }, [apiEndPoint]);
  
    return { data, state, error };
  };