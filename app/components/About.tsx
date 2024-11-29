export default function About() {
  return (
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About The NewsAPI</h2>
          <p className="text-xl mb-8">
            The NewsAPI provides real-time access to news articles from various sources around the world.
            Stay up-to-date with the latest headlines, trending topics, and in-depth coverage across multiple categories.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-white p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">50K+</h3>
              <p>News Sources</p>
            </div>
            <div className="border border-white p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">100%</h3>
              <p>Uptime</p>
            </div>
            <div className="border border-white p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>
      </section>
  )
}

