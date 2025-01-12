import {useState} from "react";
import DolarItem from "./DolarItem";
import {useEffect} from "react";

export const DolarCard = () => {
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
    <>
      {dolares.map((dolar) => (
        <DolarItem key={dolar.casa} dolar={dolar} />
      ))}
    </>
  );
};
