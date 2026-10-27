import { PageHero, CtaBand, SectionHead } from '../components/ui';
import { Reveal } from '../components/motion';
import { SITE } from '../data/site';

const TIMELINE = [
  { year: '2021', title: 'The first message', text: 'One founder, cold messages in Telegram groups, and a simple gaming tournament website in plain HTML and CSS.' },
  { year: 'First client', title: '₹7,000 and a lot of confidence', text: 'The first paid project proved the idea. Next came the MERN stack, deployment and managing clients properly.' },
  { year: 'Growing', title: 'Friends join the mission', text: 'Designers, developers and creators who shared the same drive joined — Group of Friends Solutions became a team.' },
  { year: 'Today', title: 'Build. Automate. Create.', text: 'Websites, e-commerce, software, AI agents, video and Instagram for companies in India and abroad.' },
];

const PRINCIPLES = [
  { title: 'Honest first', text: 'We recommend what you actually need, even when it is the smaller project.' },
  { title: 'Show, don’t promise', text: 'Live links and weekly updates. You see progress instead of hearing about it.' },
  { title: 'Craft over volume', text: 'Fewer projects, done properly. Every detail is something a customer will notice.' },
  { title: 'Stay reachable', text: 'The same people from the first call to long after launch.' },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Studio"
        title={<>Started with cold messages. Built on <span className="serif text-brand">finished</span> work.</>}
        intro={`${SITE.legalName} began in ${SITE.foundingYear} with one founder and a simple goal: help businesses grow online — and one day create opportunities for other young developers and creators.`}
      />

      <section className="container-x py-20 md:py-28">
        <SectionHead eyebrow="Our story" title="How we got here" />
        <ol className="relative mt-16 border-l border-line pl-8 md:pl-14">
          {TIMELINE.map((t, i) => (
            <Reveal as="li" key={t.title} delay={i * 80} className="relative pb-14 last:pb-0">
              <span aria-hidden="true" className="absolute -left-[37px] top-2 size-3 rounded-full bg-brand ring-8 ring-bg md:-left-[61px]" />
              <p className="eyebrow text-brand-2">{t.year}</p>
              <h3 className="mt-3 text-[30px] md:text-[40px]">{t.title}</h3>
              <p className="mt-3 max-w-2xl text-lg text-fg-2">{t.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-bg-2 py-20 md:py-28">
        <div className="container-x">
          <SectionHead eyebrow="Principles" title={<>What we <span className="serif text-brand">refuse</span> to compromise on</>} />
          <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-line bg-line md:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 90} className="bg-bg-2 p-8 md:p-12">
                <p className="font-display text-sm font-medium text-brand-2">0{i + 1}</p>
                <h3 className="mt-5 text-[32px]">{p.title}</h3>
                <p className="mt-3 text-lg text-fg-2">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={<>Let’s build something <span className="serif text-brand">remarkable.</span></>} />
    </>
  );
}
