import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PageHero, CtaBand } from '../components/ui';
import { Reveal, Tilt } from '../components/motion';
import { PRACTICES, servicesIn } from '../data/services';

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Everything a modern company needs to <span className="serif text-brand">grow</span> online.</>}
        intro="Three practices under one roof. Pick one service or let us plan the whole system — website, automation and content working together."
      />

      {PRACTICES.map((p, pi) => (
        <section key={p.id} className="container-x border-b border-line py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <Reveal className="lg:sticky lg:top-32 lg:self-start">
              <p className="font-display text-sm font-medium text-brand-2">0{pi + 1}</p>
              <h2 className="mt-4 text-[56px] md:text-[88px]">{p.name}</h2>
              <p className="mt-5 max-w-sm text-lg text-fg-2">{p.line}</p>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {servicesIn(p.id).map((s, i) => (
                <Reveal key={s.slug} delay={(i % 2) * 100} className={servicesIn(p.id).length === 1 ? 'sm:col-span-2' : ''}>
                  <Link to={`/services/${s.slug}`} className="group block h-full">
                    <Tilt max={6} className="h-full rounded-[26px]">
                      <div className="flex h-full flex-col rounded-[26px] border border-line bg-surface elev p-8 transition-colors group-hover:border-line-2">
                        <div className="flex items-start justify-between">
                          <span className="grid size-12 place-items-center rounded-2xl bg-brand/15 text-brand-2"><s.icon className="size-6" /></span>
                          <ArrowUpRight className="size-5 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
                        </div>
                        <h3 className="mt-10 text-[28px]">{s.name}</h3>
                        <p className="mt-3 flex-1 text-fg-2">{s.short}</p>
                        <ul className="mt-8 flex flex-wrap gap-2">
                          {s.deliverables.slice(0, 3).map((d) => <li key={d} className="rounded-full border border-line px-3 py-1.5 text-[13px] text-fg-2">{d}</li>)}
                        </ul>
                      </div>
                    </Tilt>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand title={<>Not sure where to <span className="serif text-brand">start?</span></>} text="Tell us the problem in plain words. We will recommend the simplest plan that gets results — even if it is a smaller project." />
    </>
  );
}
