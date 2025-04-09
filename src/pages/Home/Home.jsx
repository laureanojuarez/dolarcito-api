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
    <main className="flex flex-col items-center gap-4">
      <section className="mt-5 mb-5">
        <div className="flex flex-col text-center">
          <h1>Cotizacion del Dolar</h1>
          <span>Cotizacion del dolar actualizada</span>
          <p>Dolar Oficial, Dolar Mep, Dolar Tarjeta...</p>
        </div>
        <InputDolar />
      </section>
      <section className="flex flex-wrap justify-center items-center h-full w-full md:gap-4">
        {tiposDeDolar.map((dolar) => (
          <DolarCard key={dolar} dolar={dolar} />
        ))}
      </section>
    </main>
  );
}
