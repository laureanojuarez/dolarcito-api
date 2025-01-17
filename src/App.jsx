import {Navbar} from "./components/Navbar/Navbar";
import {Cotizaciones} from "./components/Cotizaciones/Cotizaciones";
import {Hero} from "./components/Hero/Hero";
import styled from "styled-components";
import {DolarProvider} from "./context/DolarContext";
import {Calculadora} from "./components/Calculadora/Calculadora";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const App = () => {
  return (
    <DolarProvider>
      <AppContainer>
        <Navbar />
        <Hero />
        <Calculadora />
        <Cotizaciones />
      </AppContainer>
    </DolarProvider>
  );
};
