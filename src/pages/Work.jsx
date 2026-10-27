import { ArrowUpRight } from 'lucide-react';
import { PageHero, CtaBand } from '../components/ui';
import { Reveal, Tilt } from '../components/motion';
import { PROJECTS, CLIENT_PROJECTS } from '../data/projects';

export default function Work() {
  return (
    <>
      <PageHero
        eyebrow={`Work · ${CLIENT_PROJECTS.length} client projects live`}
        title={<>Real brands. Real launches. <span className="serif text-brand">All live.</span></>}
        intro="Every project below is online right now. Open them on your phone, test the speed, click around — that is the best proof we can give you."
      />

      <div className="container-x">
        {PROJECTS.map((p, i) => (
          <article key={p.slug} id={p.slug} className="grid scroll-mt-28 gap-10 border-b border-line py-20 md:py-28 lg:grid-cols-12 lg:gap-14">
            <Reveal className={`lg:col-span-7 ${i % 2 ? 'lg:order-2' : ''}`}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="group block" aria-label={`Visit ${p.name} live website`}>
                <Tilt max={5} className="rounded-[28px]">
                  <div className="relative overflow-hidden rounded-[28px] border border-line bg-surface elev p-4 md:p-7">
                    <div aria-hidden="true" className="absolute inset-0 opacity-70 transition-opacity duration-500 group-hover:opacity-100" style={{ background: `radial-gradient(80% 70% at 50% 0%, ${p.tint}66, transparent 70%)` }} />
                    <img
                      src={p.image}
                      alt={`${p.name} website by GOFS Tech`}
                      width="1200"
                      height="800"
                      loading={i < 2 ? 'eager' : 'lazy'}
                      className="relative aspect-[3/2] w-full rounded-[16px] object-cover object-top shadow-[0_40px_80px_-30px_rgb(20_30_70/0.28)] transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                </Tilt>
              </a>
            </Reveal>

            <div className="flex flex-col lg:col-span-5">
              <Reveal>
                <p className="eyebrow"><span className="text-brand-2">{String(i + 1).padStart(2, '0')}</span>{p.industry} · {p.category}</p>
                <h2 className="mt-5 text-[44px] md:text-[60px]">{p.name}</h2>
                {p.concept && <p className="mt-3 text-sm font-medium text-sand">In-house concept project</p>}
                <p className="mt-5 text-xl text-fg-2">{p.summary}</p>
              </Reveal>
              <Reveal delay={100} className="mt-10 grid gap-8 border-t border-line pt-8">
                <div><h3 className="eyebrow">The brief</h3><p className="mt-3 text-fg-2">{p.brief}</p></div>
                <div><h3 className="eyebrow">What we did</h3><p className="mt-3 text-fg-2">{p.approach}</p></div>
                <div>
                  <h3 className="eyebrow">Deliverables</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {p.built.map((b) => <li key={b} className="rounded-full border border-line px-3.5 py-1.5 text-sm">{b}</li>)}
                  </ul>
                </div>
                <p className="text-sm text-muted">Stack: {p.stack}</p>
              </Reveal>
              <Reveal delay={160} className="mt-10">
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-lg font-medium text-brand-2">
                  Visit live site <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Reveal>
            </div>
          </article>
        ))}
      </div>

      <CtaBand title={<>Your brand could be <span className="serif text-brand">next.</span></>} />
    </>
  );
}
