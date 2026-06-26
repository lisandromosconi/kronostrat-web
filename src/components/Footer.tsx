import { socials } from '../data/socials'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 px-6 py-10 text-zinc-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm">
          © {new Date().getFullYear()} Kronostrat. 3D models, commissions and digital creations.
        </p>

        <div className="flex flex-wrap gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm hover:text-white"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer