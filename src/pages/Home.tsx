import { Link } from 'react-router'

function Home() {
  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top,_#3b0764,_#09090b_45%)] px-6 pt-32 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.45em] text-violet-300">
            3D Artist Store
          </p>

          <h1 className="max-w-4xl text-6xl font-black leading-none tracking-tight md:text-8xl">
            Kronostrat
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Digital shop and gallery for 3D models, characters, commissions and visual projects.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="rounded-full bg-white px-7 py-3 font-bold text-zinc-950 transition hover:bg-violet-200"
            >
              View Shop
            </Link>

            <Link
              to="/gallery"
              className="rounded-full border border-white/20 px-7 py-3 font-bold text-white transition hover:bg-white/10"
            >
              View Gallery
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-violet-950/50">
          <div className="flex aspect-square items-center justify-center rounded-[1.5rem] border border-white/10 bg-zinc-900 text-center">
            <p className="max-w-xs text-zinc-500">
              Aquí irá un render, vídeo o preview 3D de Krono.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home