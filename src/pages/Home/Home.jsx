import { RiArrowLeftRightFill } from "@remixicon/react";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1>Cotizacion del Dolar</h1>
      <span>Cotizacion del dolar actualizada</span>
      <p>Dolar Oficial, Dolar Mep, Dolar Tarjeta...</p>
      <div className="flex  items-center">
        <div className="w-42 h-20 bg-amber-950 flex flex-col items-center">
          <span>Oficial</span>
          <input type="text" className="h-full w-full" />
        </div>
        <RiArrowLeftRightFill />
        <div className="w-42 h-20 bg-amber-950 flex flex-col items-center">
          <span>Oficial</span>
          <input type="text" className="h-full w-full" />
        </div>
      </div>
    </main>
  );
}
