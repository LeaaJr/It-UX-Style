import React from "react"

export function TestimonialsSection() {
    return (
      <div className="w-full min-h-screen bg-white">
        <section className="w-full py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#6115bd] font-medium mb-2">Testimonials</p>
              <h2 className="text-4xl font-bold mb-4">Abbiamo lavorato con</h2>
              <h2 className="text-4xl font-bold">migliaia di persone straordinarie</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <p className="text-gray-600 mb-6">
                  "Adoro il modo in cui questo negozio offre un'ampia varietà di stili sia per occasioni formali che casual. I capi non sono solo eleganti, ma sono anche super comodi. Sono sicuramente diventati la mia opzione preferita per rinnovare il mio guardaroba."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Leslie Alexander"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-3">
                    <h4 className="font-semibold">Leslie Alexander</h4>
                    <p className="text-gray-500">@lesliealexander</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <p className="text-gray-600 mb-6">
                  "Sono un fan dei look casual e sportivi e questo negozio ha sempre le migliori opzioni. Gli abiti non sono solo di buona qualità, ma seguono anche le ultime tendenze. Non sono mai a corto di opzioni per il mio stile!."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Lindsay Walton"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-3">
                    <h4 className="font-semibold">Lindsay Walton</h4>
                    <p className="text-gray-500">@lindsaywalton</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <p className="text-gray-600 mb-6">
                  "Faccio sempre fatica a trovare vestiti che si adattino al mio stile, ma da quando ho scoperto questo negozio il mio guardaroba è migliorato moltissimo. La qualità è incredibile e gli abiti sono molto moderni. Trovo sempre qualcosa che mi faccia sentire unica e le consegne sono velocissime!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Whitney Francis"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-3">
                    <h4 className="font-semibold">Whitney Francis</h4>
                    <p className="text-gray-500">@whitneyfrancis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}