import React from "react";
import {Navbar} from "./components/Navbar/Navbar";
import {Cotizaciones} from "./components/Cotizaciones/Cotizaciones";
import {Hero} from "./components/Hero/Hero";
import {Calculadora} from "./components/Calculadora/Calculadora";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <Hero />
      <Calculadora />
      <Cotizaciones />
    </AppContainer>
  );
};
