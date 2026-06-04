import { useState, useEffect } from "react";

const useFetch = (url) => {

    // store the api data and loading state
    const[data, setData] = useState([]);
    const[loading, setLoading] = useState(true);

      useEffect(() => {
        
    // fetch the data from the api    
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

export default useFetch;