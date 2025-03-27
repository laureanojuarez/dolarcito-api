import { RiArrowLeftRightFill } from "@remixicon/react";
import { InputDolar } from "../../components/InputDolar";
import { DolarCard } from "../../components/DolarCard";
import { useState } from "react";

export default function Home() {
  const tiposDeDolar = [
    "Oficial",
    "Blue",
    "Bolsa",
    "Contado con liquidación",
    "Mayorista",
    "Cripto",
    "Tarjeta",
  ];

  return (
    <main className="flex flex-col items-center gap-4 ">
      <div className="flex flex-col text-center">
        <h1>Cotizacion del Dolar</h1>
        <span>Cotizacion del dolar actualizada</span>
        <p>Dolar Oficial, Dolar Mep, Dolar Tarjeta...</p>
      </div>
      <InputDolar />
      <section className="flex gap-4 flex-wrap justify-center w-full">
        {tiposDeDolar.map((dolar) => (
          <DolarCard key={dolar} dolar={dolar} />
        ))}
      </section>
    </main>
  );
}
