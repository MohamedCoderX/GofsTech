import { Link } from 'react-router-dom';
import { ArrowUpRight, Clapperboard, Globe, Bot } from 'lucide-react';
import { Button, SectionHead, FaqList, CtaBand } from '../components/ui';
import { Reveal, Tilt, Logo3D, Marquee } from '../components/motion';
import { CLIENT_PROJECTS } from '../data/projects';
import { PRACTICES, servicesIn } from '../data/services';
import { PAYMENT_TERMS } from '../data/pricing';
import { HOME_FAQS } from '../data/faqs';

const featured = CLIENT_PROJECTS.slice(0, 4);

const ENGINE = [
  { icon: Clapperboard, step: 'Attention', title: 'Video & Instagram', text: 'Reels, brand films and a consistent Instagram make the right people notice you — and remember you.' },
  { icon: Globe, step: 'Conversion', title: 'Website & store', text: 'A fast, premium website explains your value in seconds and turns that attention into enquiries and sales.' },
  { icon: Bot, step: 'Follow-up', title: 'AI agents', text: 'Every enquiry gets an instant, personal reply and follow-up — at 2am, on weekends, without your team lifting a finger.' },
];

const STEPS = [
  { n: '01', title: 'Strategy call', text: 'A free 30-minute call about your business, customers and goals. Honest advice, even if we are not the right fit.' },
  { n: '02', title: 'Written proposal', text: 'Within 48 hours: scope, deliverables, timeline and a fixed price. Nothing vague, nothing hidden.' },
  { n: '03', title: 'Design, build, produce', text: 'You approve the direction first, then watch the work come to life on a live link with weekly updates.' },
  { n: '04', title: 'Launch & grow', text: 'We launch, hand over everything you own, and stay on to maintain, automate and create as you grow.' },
];

const STANDARDS = [
  ['Founder-led', 'You work directly with the people doing the work. No account managers, no handoffs.'],
  ['Fixed scope', 'Every project starts with a written scope and fixed price, paid in three milestones.'],
  ['Weekly visibility', 'A live preview link and a weekly update. You always know exactly where things stand.'],
  ['You own it all', 'Code, design files, video files and accounts belong to you after final payment.'],
  ['Built to last', 'Modern stacks, clean code and documentation, so your product can grow with you.'],
  ['Any time zone', 'Clients in India and abroad. Calls scheduled around your working day.'],
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="grid-lines absolute inset-0" />
        <div className="container-x relative grid min-h-[100svh] items-center gap-10 pb-16 pt-32 lg:grid-cols-[1.25fr_0.75fr] lg:pt-36">
          <div>
            <Reveal>
              <p className="eyebrow">
                <span className="relative flex size-2"><span className="absolute inset-0 animate-ping rounded-full bg-ok/70" /><span className="relative size-2 rounded-full bg-ok" /></span>
                Digital studio · India → Worldwide
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-7 text-[46px] md:text-[84px] md:leading-[0.98]">
                We build, automate &amp; <span className="serif text-brand">create</span> for companies that intend to lead.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-8 max-w-xl text-lg text-fg-2 md:text-xl">
                One studio for your website, software, AI agents, videos and Instagram — planned together, so everything works as one growth engine.
              </p>
            </Reveal>
            <Reveal delay={260} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button to="/book">Book a free call</Button>
              <Button to="/work" variant="ghost" arrow={false}>See our work</Button>
            </Reveal>
          </div>
          <Reveal delay={200} className="relative mx-auto aspect-square w-[72%] max-w-[460px] lg:w-full">
            <Logo3D className="size-full" />
          </Reveal>
        </div>

        <div className="container-x relative grid gap-px border-y border-line bg-line sm:grid-cols-3">
          {PRACTICES.map((p, i) => (
            <Reveal key={p.id} delay={i * 80} className="bg-bg py-7 sm:px-7 sm:first:pl-0">
              <p className="font-display text-2xl font-semibold tracking-tight">
                <span className="mr-3 text-sm font-medium text-brand-2">0{i + 1}</span>{p.name}
              </p>
              <p className="mt-2 text-[15px] text-fg-2">{p.line}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 md:py-20" aria-label="Clients">
        <p className="eyebrow container-x mb-8">Trusted by brands in e-commerce, manufacturing, education and film</p>
        <Marquee items={CLIENT_PROJECTS.map((p) => p.name)} />
      </section>

      {/* Practices */}
      <section className="container-x py-20 md:py-32">
        <SectionHead index="01" eyebrow="What we do" title={<>Three practices. <span className="serif text-brand">One</span> team.</>} intro="Most companies hire one agency for the website, another for videos and a freelancer for automation. Nothing connects. We do all three, so your brand, message and data work together." />
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {PRACTICES.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} className="h-full">
              <Tilt max={6} className="group h-full rounded-[28px]">
                <div className="flex h-full flex-col rounded-[28px] border border-line bg-surface elev p-8 md:p-10">
                  <p className="font-display text-sm font-medium text-brand-2">0{i + 1}</p>
                  <h3 className="mt-6 text-[44px] md:text-[56px]">{p.name}</h3>
                  <p className="mt-4 text-fg-2">{p.line}</p>
                  <ul className="mt-10 flex-1 border-t border-line">
                    {servicesIn(p.id).map((s) => (
                      <li key={s.slug}>
                        <Link to={`/services/${s.slug}`} className="flex items-center justify-between gap-4 border-b border-line py-4 text-[16px] transition-colors hover:text-brand-2">
                          {s.name}<ArrowUpRight className="size-4 opacity-50" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Work */}
      <section className="border-y border-line bg-bg-2 py-20 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHead index="02" eyebrow="Selected work" title={<>Work that is <span className="serif text-brand">live</span> and selling.</>} />
            <Reveal><Button to="/work" variant="ghost">All projects</Button></Reveal>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 120} className={i % 2 ? 'md:mt-24' : ''}>
                <Link to={`/work#${p.slug}`} className="group block">
                  <Tilt max={5} className="rounded-[24px]">
                    <div className="relative overflow-hidden rounded-[24px] border border-line bg-surface elev">
                      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-2/3 opacity-60 transition-opacity duration-500 group-hover:opacity-100" style={{ background: `radial-gradient(70% 60% at 50% 0%, ${p.tint}55, transparent)` }} />
                      <div className="relative p-4 pb-0 md:p-6 md:pb-0">
                        <img src={p.image} alt={`${p.name} website by GOFS Tech`} width="1200" height="800" loading="lazy" className="aspect-[4/3] w-full rounded-t-[14px] object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
                      </div>
                    </div>
                  </Tilt>
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-[28px] md:text-[34px]">{p.name}</h3>
                      <p className="mt-1 text-fg-2">{p.summary}</p>
                    </div>
                    <p className="shrink-0 pt-2 text-sm text-muted">{p.industry}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Growth engine */}
      <section className="container-x py-20 md:py-32">
        <SectionHead index="03" eyebrow="Why one studio" title={<>Your growth engine, <span className="serif text-brand">connected.</span></>} intro="Here is how the pieces work together for a client. Each part makes the next one stronger." />
        <div className="relative mt-16 grid gap-5 md:grid-cols-3">
          <svg aria-hidden="true" className="pointer-events-none absolute left-0 top-[52px] hidden h-2 w-full md:block" preserveAspectRatio="none" viewBox="0 0 100 2">
            <line x1="12" y1="1" x2="88" y2="1" stroke="rgb(107 143 255 / 0.5)" strokeWidth="0.25" strokeDasharray="1 1">
              <animate attributeName="stroke-dashoffset" from="0" to="-8" dur="3s" repeatCount="indefinite" />
            </line>
          </svg>
          {ENGINE.map((e, i) => (
            <Reveal key={e.step} delay={i * 120} className="relative rounded-[28px] border border-line bg-surface elev p-8">
              <span className="grid size-14 place-items-center rounded-2xl border border-brand/40 bg-brand/15 text-brand-2"><e.icon className="size-6" /></span>
              <p className="eyebrow mt-8">Step {i + 1} · {e.step}</p>
              <h3 className="mt-3 text-[30px]">{e.title}</h3>
              <p className="mt-3 text-fg-2">{e.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-line bg-bg-2 py-20 md:py-32">
        <div className="container-x">
          <SectionHead index="04" eyebrow="How we work" title={<>Clear from day one. <span className="serif text-brand">No surprises.</span></>} />
          <ol className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-line bg-line md:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 90} className="bg-bg-2 p-8">
                <p className="font-display text-[56px] font-semibold leading-none text-fg/10">{s.n}</p>
                <h3 className="mt-8 text-2xl">{s.title}</h3>
                <p className="mt-3 text-[15px] text-fg-2">{s.text}</p>
              </Reveal>
            ))}
          </ol>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {PAYMENT_TERMS.map((t, i) => (
              <Reveal key={t.when} delay={i * 90} className="flex items-baseline gap-4 rounded-[22px] border border-line p-6">
                <p className="font-display text-4xl font-semibold text-brand-2">{t.pct}</p>
                <div><p className="font-medium">{t.when}</p><p className="text-sm text-muted">{t.note}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="container-x py-20 md:py-32">
        <SectionHead index="05" eyebrow="What you can expect" title="The standards we hold ourselves to" />
        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {STANDARDS.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 3) * 80} className="border-t border-line pt-6">
              <h3 className="text-2xl">{t}</h3>
              <p className="mt-3 text-fg-2">{d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x grid gap-12 pb-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHead index="06" eyebrow="FAQ" title="Good questions" />
        <FaqList faqs={HOME_FAQS} />
      </section>

      <CtaBand />
    </>
  );
}
