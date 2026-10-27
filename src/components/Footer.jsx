import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SITE } from '../data/site';
import { PRACTICES, servicesIn } from '../data/services';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg-2">
      <div className="container-x grid gap-12 pb-12 pt-20 md:grid-cols-[1.3fr_repeat(3,1fr)]">
        <div>
          <p className="max-w-sm font-display text-[28px] font-medium leading-tight tracking-tight">
            Build. Automate. <span className="serif text-brand">Create.</span>
          </p>
          <p className="mt-5 max-w-xs text-[15px] text-fg-2">
            {SITE.legalName} — a digital studio from India for ambitious companies worldwide.
          </p>
          <div className="mt-8 space-y-2 text-[15px]">
            <a className="group flex items-center gap-2 hover:text-brand-2" href={`mailto:${SITE.email}`}>{SITE.email}<ArrowUpRight className="size-4 opacity-50" /></a>
            <a className="group flex items-center gap-2 hover:text-brand-2" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp {SITE.phone}<ArrowUpRight className="size-4 opacity-50" /></a>
            <a className="group flex items-center gap-2 hover:text-brand-2" href={SITE.instagram} target="_blank" rel="noopener noreferrer">Instagram @gofs_tech<ArrowUpRight className="size-4 opacity-50" /></a>
          </div>
        </div>

        {PRACTICES.map((p) => (
          <div key={p.id}>
            <h2 className="eyebrow">{p.name}</h2>
            <ul className="mt-5 space-y-3 text-[15px] text-fg-2">
              {servicesIn(p.id).map((s) => (
                <li key={s.slug}><Link className="hover:text-fg" to={`/services/${s.slug}`}>{s.name}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container-x" aria-hidden="true">
        <p className="select-none bg-gradient-to-b from-fg/[0.08] to-transparent bg-clip-text text-center font-display text-[24vw] font-semibold leading-[0.8] tracking-[-0.06em] text-transparent">GOFS</p>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col justify-between gap-3 py-6 text-[13px] text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} GOFS Tech. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/work" className="hover:text-fg">Work</Link>
            <Link to="/about" className="hover:text-fg">Studio</Link>
            <Link to="/contact" className="hover:text-fg">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
