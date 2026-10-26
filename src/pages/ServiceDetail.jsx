import { Link, useParams } from 'react-router-dom';
import { ArrowUpRight, Check, ChevronRight } from 'lucide-react';
import { Button, FaqList, CtaBand, SectionHead } from '../components/ui';
import { Reveal, Tilt } from '../components/motion';
import { getService, SERVICES, PRACTICES } from '../data/services';
import { CLIENT_PROJECTS } from '../data/projects';
import NotFound from './NotFound';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  if (!service) return <NotFound />;

  const practice = PRACTICES.find((p) => p.id === service.practice);
  const related = CLIENT_PROJECTS.filter((p) => p.service === service.slug);
  const work = (related.length ? related : CLIENT_PROJECTS).slice(0, 2);
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden="true" className="grid-lines absolute inset-0" />
        <div aria-hidden="true" className="absolute -top-40 right-0 h-[460px] w-[700px] rounded-full bg-brand/10 blur-[140px]" />
        <div className="container-x relative pb-20 pt-28 md:pb-28 md:pt-36">
          <Reveal>
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
              <Link to="/" className="hover:text-fg">Home</Link><ChevronRight className="size-3.5" />
              <Link to="/services" className="hover:text-fg">Services</Link><ChevronRight className="size-3.5" />
              <span className="text-fg-2">{practice.name}</span>
            </nav>
          </Reveal>
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div>
              <Reveal delay={60}>
                <p className="eyebrow"><service.icon className="size-4 text-brand-2" />{service.name}</p>
              </Reveal>
              <Reveal delay={120}><h1 className="mt-6 text-[44px] md:text-[80px]">{service.h1}</h1></Reveal>
              <Reveal delay={200}><p className="mt-8 max-w-2xl text-lg text-fg-2 md:text-xl">{service.intro}</p></Reveal>
              <Reveal delay={260} className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button to={`/contact?service=${service.slug}`}>Get the price guide</Button>
                <Button to="/work" variant="ghost" arrow={false}>See our work</Button>
              </Reveal>
            </div>
            <Reveal delay={300} className="rounded-[26px] border border-line bg-surface elev p-7 backdrop-blur">
              <dl className="space-y-5 text-[15px]">
                <div><dt className="eyebrow">Practice</dt><dd className="mt-1.5 text-lg">{practice.name}</dd></div>
                <div><dt className="eyebrow">Typical timeline</dt><dd className="mt-1.5 text-lg">{service.timeline}</dd></div>
                <div><dt className="eyebrow">Payment</dt><dd className="mt-1.5 text-lg">40 / 40 / 20 milestones</dd></div>
                <div><dt className="eyebrow">Ownership</dt><dd className="mt-1.5 text-lg">Everything is yours</dd></div>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-x grid gap-14 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHead eyebrow="Deliverables" title="What you get" />
        <ul className="grid gap-px overflow-hidden rounded-[26px] border border-line bg-line sm:grid-cols-2">
          {service.deliverables.map((d, i) => (
            <Reveal as="li" key={d} delay={(i % 2) * 70} className="flex gap-4 bg-bg p-6">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand/20 text-brand-2"><Check className="size-4" /></span>
              <span className="text-[16px]">{d}</span>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-bg-2 py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead eyebrow="Who it’s for" title="Built for companies like yours" />
          <ul className="flex flex-wrap content-start gap-3">
            {service.forWho.map((w, i) => (
              <Reveal as="li" key={w} delay={i * 60} className="rounded-full border border-line-2 px-6 py-3.5 text-lg">{w}</Reveal>
            ))}
          </ul>
        </div>
      </section>

      {service.practice === 'build' && (
        <section className="container-x py-20 md:py-28">
          <SectionHead eyebrow="Related work" title="Recent projects" />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {work.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <Link to={`/work#${p.slug}`} className="group block">
                  <Tilt max={5} className="rounded-[24px]">
                    <img src={p.image} alt={`${p.name} website`} width="1200" height="800" loading="lazy" className="aspect-[3/2] w-full rounded-[24px] border border-line object-cover object-top" />
                  </Tilt>
                  <h3 className="mt-5 text-[26px]">{p.name}</h3>
                  <p className="mt-1 text-fg-2">{p.summary}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="container-x grid gap-12 py-20 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHead eyebrow="FAQ" title="Common questions" />
        <FaqList faqs={service.faqs} />
      </section>

      <section className="container-x pt-8">
        <h2 className="eyebrow">More services</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {others.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="group inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-[15px] transition-colors hover:border-fg/40">
              {s.name}<ArrowUpRight className="size-4 opacity-50 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
