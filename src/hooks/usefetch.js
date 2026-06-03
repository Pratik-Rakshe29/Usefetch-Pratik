import React from 'react'
import { useState, useEffect, useCallback } from "react";

const usefetch = (url) => {

    // its the state to store the fetched data
    const[data, setData] = useState([]);

    // state to store the loading status
    const[isLoading, setIsLoading] = useState(true);

    // the state to store any error that occurs during fetching
    const[error, setError] = useState(null);

    // its the function to fetch the data
    const fetchData = useCallback(async () => {
        try{
            // loading starts
            setIsLoading(true);

            // clearing any previous error
            setError(null);

            // fetch the data from the api
            const response = await fetch(url);

            // checking if the response is ok, if not throw an error
            if(!response.ok){
                throw new Error("Failed to fetch data");
            }

            // converting the response into json format
            const result = await response.json();
            setData(result); // storing the fetched data
        } catch (err) {
            setError(err.message); // storing the error message
        } finally {
            setIsLoading(false); // loading ends
        }
    }, [url]);

    // using useEffect to call the fetchData function when the component loads
    useEffect(() => {
        fetchData();
    }, [fetchData]);


  return { data, isLoading, error };
}

export default usefetch
