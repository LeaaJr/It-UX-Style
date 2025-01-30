import React from "react";
import ImgProd from "../Components/Img";

const SectionOne = () => {
  return (
    <main className="w-full min-h-screen bg-white px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">
          I Dettagli Raffinati
        </h1>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
        La nostra nuova collezione Black ti sorprenderà, vesti alla moda, in nero, ovunque. Con ogni pezzo, sarai pronto a dominare le strade con stile ed eleganza. Dalle giacche sofisticate ai capi più casual, la collezione è pensata per chi ama la versatilità e il comfort senza rinunciare alla classe.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <img
              src= {ImgProd.BolNegSec}
              alt="Product detail showing drawstring closure"
              className="w-full rounded-lg"
            />
            <p className="text-gray-600">
            Borsa a tracolla. Dettaglio di frange sul top. Tracolla. Tasca interna con cerniera. Chiusura con calamita.
            </p>
          </div>
          <div className="space-y-4">
            <img
              src={ImgProd.ZapSec}
              alt="Product detail showing zipper compartment"
              className="w-full rounded-lg"
            />
            <p className="text-gray-600">
            Scarpa con dettaglio di bordino realizzata in pelle di alta qualità. Gambetto con due passanti. Fodera interna e soletta in pelle. Forma rotonda. Suola in tinta con leggero volume e suola dentellata.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SectionOne