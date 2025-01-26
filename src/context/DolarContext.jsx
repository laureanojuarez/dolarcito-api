import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const DolarContext = createContext();

export const useDolar = () => {
  const [dolares, setDolares] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDolares = async () => {
    try {
      const response = await axios.get("https://dolarapi.com/v1/dolares");
      const data = response.data;
      setDolares(data);
    } catch (error) {
      setError("Error fetching data");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchDolares();
  }, []);

  return {dolares, isLoading, error};
};

export const DolarProvider = ({children}) => {
  const {dolares, isLoading, error} = useDolar();
  return (
    <DolarContext.Provider value={{dolares, isLoading, error}}>
      {children}
    </DolarContext.Provider>
  );
};
