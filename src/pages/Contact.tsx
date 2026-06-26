import { socials } from '../data/socials'

function Contact() {
  return (
    <section className="min-h-screen bg-zinc-950 px-6 pt-32 text-white">
      <div className="mx-auto max-w-7xl py-16">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-violet-300">
          Contact
        </p>

        <h1 className="mt-4 text-5xl font-black">Contact & Socials</h1>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-violet-300/60 hover:bg-white/10"
            >
              <h2 className="text-xl font-bold">{social.name}</h2>
              <p className="mt-2 text-zinc-400">{social.handle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact