function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
      <section className="text-center px-6">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-violet-400">
          3D Artist Store
        </p>

        <h1 className="text-6xl font-black tracking-tight">
          Kronostrat
        </h1>

        <p className="mt-5 max-w-xl text-zinc-400">
          3D models, digital products, commissions and visual projects.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="rounded-full bg-white px-6 py-3 font-semibold text-zinc-950 hover:bg-zinc-200">
            View Shop
          </button>

          <button className="rounded-full border border-zinc-700 px-6 py-3 font-semibold text-white hover:bg-zinc-900">
            Gallery
          </button>
        </div>
      </section>
    </main>
  )
}

export default App