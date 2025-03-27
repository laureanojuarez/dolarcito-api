import { RiArrowLeftRightFill } from "@remixicon/react";
import { InputDolar } from "../../components/InputDolar";
import { DolarCard } from "../../components/DolarCard";

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
    <main className="w-4xl flex flex-col items-center">
      <h1>Cotizacion del Dolar</h1>
      <span>Cotizacion del dolar actualizada</span>
      <p>Dolar Oficial, Dolar Mep, Dolar Tarjeta...</p>
      <div className="flex  items-center">
        <InputDolar name={"hola"} />
        <RiArrowLeftRightFill />
        <InputDolar name={" q Tal"} />
      </div>

      <section className="flex gap-4 flex-wrap">
        {tiposDeDolar.map((dolar) => (
          <DolarCard key={dolar} dolar={dolar} />
        ))}
      </section>
    </main>
  );
}
