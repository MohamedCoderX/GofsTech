import { Link } from 'react-router-dom';
import { ArrowUpRight, Plus } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import { formatPrice } from '../data/pricing';
import { Reveal } from './motion';
import { cn } from '../utils/cn';

const BUTTON = {
  primary: 'bg-brand text-white hover:bg-brand-2 shadow-[0_12px_30px_-12px_rgb(43_89_255/0.6)]',
  light: 'bg-white text-ink hover:bg-bg',
  ghost: 'border border-line-2 text-fg hover:border-fg/50 hover:bg-fg/[0.03]',
};

export function Button({ to, href, variant = 'primary', className, children, arrow = true, ...rest }) {
  const cls = cn(
    'group/btn inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-[15px] font-medium transition-all duration-300 whitespace-nowrap',
    BUTTON[variant],
    className,
  );
  const icon = arrow && <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" aria-hidden="true" />;
  if (to) return <Link to={to} className={cls} {...rest}>{children}{icon}</Link>;
  if (href) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...rest}>{children}{icon}</a>;
  return <button className={cls} {...rest}>{children}{icon}</button>;
}

export function SectionHead({ index, eyebrow, title, intro, align = 'left', className }) {
  return (
    <Reveal className={cn('max-w-4xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <p className="eyebrow mb-6">
          {index && <span className="text-brand-2">{index}</span>}
          {eyebrow}
        </p>
      )}
      <h2 className="text-[38px] md:text-[64px]">{title}</h2>
      {intro && <p className={cn('mt-6 max-w-2xl text-lg text-fg-2 md:text-xl', align === 'center' && 'mx-auto')}>{intro}</p>}
    </Reveal>
  );
}

export function PageHero({ eyebrow, title, intro, children }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div aria-hidden="true" className="grid-lines absolute inset-0" />
      <div aria-hidden="true" className="absolute -top-40 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-brand/10 blur-[140px]" />
      <div className="container-x relative pb-20 pt-20 md:pb-28 md:pt-28">
        <Reveal><p className="eyebrow">{eyebrow}</p></Reveal>
        <Reveal delay={80}><h1 className="mt-6 max-w-5xl text-[46px] md:text-[96px]">{title}</h1></Reveal>
        {intro && <Reveal delay={160}><p className="mt-8 max-w-2xl text-lg text-fg-2 md:text-xl">{intro}</p></Reveal>}
        {children && <Reveal delay={240} className="mt-10">{children}</Reveal>}
      </div>
    </section>
  );
}

export function Price({ inr, usd, prefix = 'From ', className }) {
  const { currency } = useCurrency();
  return <span className={className}>{prefix}{formatPrice(currency === 'INR' ? inr : usd, currency)}</span>;
}

export function CurrencyToggle({ className }) {
  const { currency, setCurrency } = useCurrency();
  return (
    <div role="group" aria-label="Currency" className={cn('inline-flex rounded-full border border-line-2 p-1 text-sm font-medium', className)}>
      {[['INR', '₹ INR'], ['USD', '$ USD']].map(([code, label]) => (
        <button
          key={code}
          type="button"
          aria-pressed={currency === code}
          onClick={() => setCurrency(code)}
          className={cn('rounded-full px-4 py-1.5 transition-colors', currency === code ? 'bg-fg text-bg' : 'text-fg-2 hover:text-fg')}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function FaqList({ faqs }) {
  return (
    <div className="border-t border-line">
      {faqs.map((f, i) => (
        <Reveal key={f.q} delay={i * 50}>
          <details className="group border-b border-line py-7">
            <summary className="flex items-start justify-between gap-8">
              <h3 className="font-sans text-lg font-medium tracking-normal leading-snug md:text-xl">{f.q}</h3>
              <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line-2 transition-colors group-hover:border-fg/50">
                <Plus className="faq-icon size-4 transition-transform duration-300" aria-hidden="true" />
              </span>
            </summary>
            <p className="mt-4 max-w-2xl pr-12 text-fg-2">{f.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}

export function CtaBand({ title, text }) {
  return (
    <section className="container-x py-24 md:py-36">
      <Reveal className="relative overflow-hidden rounded-[32px] bg-ink px-7 py-16 text-white md:px-20 md:py-24">
        <div aria-hidden="true" className="absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.05)_1px,transparent_1px)] [background-size:88px_88px]" />
        <div aria-hidden="true" className="absolute -bottom-40 -right-20 size-[520px] rounded-full bg-brand/50 blur-[130px]" />
        <div className="relative max-w-3xl">
          <p className="eyebrow text-white/50">Start a project</p>
          <h2 className="mt-6 text-[40px] md:text-[76px]">{title ?? <>Have something <span className="serif text-[#8fa9ff]">ambitious</span> in mind?</>}</h2>
          <p className="mt-6 max-w-xl text-lg text-white/70">{text ?? 'Book a free 30-minute call, or share a few details to unlock our price guide. A fixed written proposal follows within 48 hours.'}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button to="/book">Book a call</Button>
            <Button to="/contact" variant="light" arrow={false}>Get the price guide</Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
