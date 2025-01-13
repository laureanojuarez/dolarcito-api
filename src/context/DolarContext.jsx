import {createContext, useEffect, useState} from "react";

export const DolarContext = createContext();

export const DolarProvider = ({children}) => {
  const [dolares, setDolares] = useState([]);

  useEffect(() => {
    const fetchDolares = async () => {
      try {
        const response = await fetch("https://dolarapi.com/v1/dolares");
        const data = await response.json();
        setDolares(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDolares();
  }, []);

  return (
    <DolarContext.Provider value={dolares}>{children}</DolarContext.Provider>
  );
};
