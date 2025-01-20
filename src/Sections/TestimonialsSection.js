import React from "react"

export function TestimonialsSection() {
    return (
      <div className="w-full min-h-screen bg-white">
        <section className="w-full py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-indigo-600 font-medium mb-2">Testimonials</p>
              <h2 className="text-4xl font-bold mb-4">We have worked with</h2>
              <h2 className="text-4xl font-bold">thousands of amazing people</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <p className="text-gray-600 mb-6">
                  "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam
                  delectus nihil. Aut enim doloremque et ipsum."
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
                  "Excepteur consectetur deserunt id incididunt veniam mollit
                  officia sint qui aute duis sit cillum. Reprehenderit fugiat amet
                  aliqua in commodo minim sunt laborum."
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
                  "Voluptas quos itaque ipsum in voluptatem est. Iste eos
                  blanditiis repudiandae. Earum deserunt enim molestiae ipsum
                  perferendis."
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