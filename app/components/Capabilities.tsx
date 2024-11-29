export default function Capabilities() {
  return (
      <section className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">API Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Category-wise News",
              "Top News Articles",
              "Source Information",
              "Image URLs",
              "Video URLs",
              "Full Article Content"
            ].map((capability, index) => (
              <div key={index} className="border border-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{capability}</h3>
                <p>Access {capability.toLowerCase()} with ease using our comprehensive API endpoints.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

