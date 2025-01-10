import React from "react";
import {Navbar} from "./components/Navbar/Navbar";
import {Cotizaciones} from "./components/Cotizaciones/Cotizaciones";
import {Hero} from "./components/Hero/Hero";

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Cotizaciones />
    </>
  );
};
