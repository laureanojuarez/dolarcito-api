import {Navbar} from "./components/Navbar/Navbar";
import {Cotizaciones} from "./components/Cotizaciones/Cotizaciones";
import {Calculadora} from "./components/Calculadora/Calculadora";
import {Footer} from "./components/Footer/Footer";
import {Hero} from "./components/Hero/Hero";
import styled from "styled-components";

export const App = () => {
  const AppStyled = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-rows: auto 1fr auto;
  `;
  const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 2rem;
  `;

  return (
    <AppStyled>
      <Navbar />
      <Main>
        <Hero />
        <Calculadora />
        <Cotizaciones />
      </Main>

      <Footer />
    </AppStyled>
  );
};
