import {Navbar} from "./components/Navbar/Navbar";
import {Cotizaciones} from "./components/Cotizaciones/Cotizaciones";
import {Hero} from "./components/Hero/Hero";
import styled from "styled-components";
import {DolarProvider} from "./context/DolarContext";
import {Calculadora} from "./components/Calculadora/Calculadora";
import {Footer} from "./components/Footer/Footer";

const AppContainer = styled.div`
  display: grid;
  min-height: 100dvh;
  grid-template-rows: auto auto 0.5fr 2fr auto;
`;

export const App = () => {
  return (
    <DolarProvider>
      <AppContainer>
        <Navbar />
        <Hero />
        <Calculadora />
        <Cotizaciones />
        <Footer />
      </AppContainer>
    </DolarProvider>
  );
};
