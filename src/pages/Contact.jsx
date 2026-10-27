import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Lock } from 'lucide-react';
import { Button, Price, CurrencyToggle } from '../components/ui';
import { Reveal } from '../components/motion';
import { SITE, whatsappLink } from '../data/site';
import { SERVICES } from '../data/services';
import { PRICE_GUIDE, PAYMENT_TERMS } from '../data/pricing';
import { cn } from '../utils/cn';

// Optional: set VITE_WEB3FORMS_KEY (free at web3forms.com) to receive the form by email.
// Without it, submitting opens WhatsApp with the message already written.
const FORM_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const BUDGETS = ['Under $1,000 / ₹75k', '$1,000 – $5,000 / ₹75k – ₹4L', '$5,000 – $15,000 / ₹4L – ₹12L', 'Above $15,000 / ₹12L', 'Not sure yet'];
const EMPTY = { name: '', company: '', email: '', phone: '', country: '', service: '', budget: '', message: '' };

const field = 'w-full rounded-2xl border border-line-2 bg-bg px-4 py-3.5 text-[16px] text-fg outline-none transition-colors placeholder:text-muted focus:border-brand-2';
const label = 'grid gap-2 text-[14px] text-fg-2';

function PriceGuide({ selected }) {
  return (
    <div role="status" aria-live="polite">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="size-7 text-ok" />
          <h2 className="text-[30px]">Your price guide</h2>
        </div>
        <CurrencyToggle />
      </div>
      <p className="mt-3 text-fg-2">Thanks — we have your details and will reply within 24 hours. Here are our starting prices; your proposal will have one fixed number.</p>
      <ul className="mt-8 divide-y divide-line overflow-hidden rounded-2xl border border-line">
        {PRICE_GUIDE.map((p) => {
          const hit = SERVICES.find((s) => s.slug === p.slug)?.name === selected;
          return (
            <li key={p.slug} className={cn('flex items-center justify-between gap-4 px-5 py-4', hit && 'bg-brand/15')}>
              <span className={cn('text-[15px]', hit ? 'font-medium text-fg' : 'text-fg-2')}>{p.label}{p.note && <span className="text-muted"> {p.note}</span>}</span>
              <span className="text-right font-display text-lg font-semibold">
                <Price inr={p.inr} usd={p.usd} />
                {p.unit && <span className="block text-xs font-normal text-muted">{p.unit}</span>}
              </span>
            </li>
          );
        })}
      </ul>
      <div className="mt-6 grid grid-cols-3 gap-3">
        {PAYMENT_TERMS.map((t) => (
          <div key={t.when} className="rounded-2xl border border-line p-4 text-center">
            <p className="font-display text-2xl font-semibold text-brand-2">{t.pct}</p>
            <p className="text-xs text-muted">{t.when}</p>
          </div>
        ))}
      </div>
      <Button href={SITE.whatsapp} className="mt-8 w-full">Talk now on WhatsApp</Button>
    </div>
  );
}

export default function Contact() {
  const [params] = useSearchParams();
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle');

  // Prefill from links like /contact?service=ai-automation after hydration.
  useEffect(() => {
    const service = SERVICES.find((s) => s.slug === params.get('service'));
    if (service) setForm((f) => ({ ...f, service: service.name }));
  }, [params]);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const summary = () =>
    [
      `Hi GOFS Tech, I'm ${form.name}${form.company ? ` from ${form.company}` : ''}${form.country ? ` (${form.country})` : ''}.`,
      form.service && `Service: ${form.service}`,
      form.budget && `Budget: ${form.budget}`,
      `Email: ${form.email}${form.phone ? ` · Phone: ${form.phone}` : ''}`,
      '',
      form.message,
    ].filter((l) => l !== false && l !== '').join('\n');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!FORM_KEY) {
      window.open(whatsappLink(summary()), '_blank', 'noopener');
      setStatus('sent');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: FORM_KEY, subject: `New project: ${form.service || 'General'} — ${form.name}`, from_name: 'gofstech.in', ...form }),
      });
      const data = await res.json();
      setStatus(data.success ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="grid-lines absolute inset-0" />
      <div aria-hidden="true" className="absolute -top-40 left-0 h-[460px] w-[700px] rounded-full bg-brand/10 blur-[140px]" />
      <div className="container-x relative grid gap-14 pb-24 pt-32 md:pt-40 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Reveal><p className="eyebrow">Start a project</p></Reveal>
          <Reveal delay={80}><h1 className="mt-6 text-[46px] md:text-[80px]">Tell us what you’re <span className="serif text-brand">building.</span></h1></Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-md text-lg text-fg-2">
              Share a few details and our price guide unlocks instantly. Then we reply within 24 hours and send a fixed written proposal within 48 hours of our call.
            </p>
          </Reveal>
          <Reveal delay={220} className="mt-12 space-y-px overflow-hidden rounded-[24px] border border-line bg-line">
            {[
              ['WhatsApp', SITE.phone, SITE.whatsapp],
              ['Email', SITE.email, `mailto:${SITE.email}`],
              ['Instagram', '@gofs_tech', SITE.instagram],
              ['Prefer to talk?', 'Book a free 30-minute call', '/book'],
            ].map(([k, v, href]) => (
              <a key={k} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="group flex items-center justify-between gap-4 bg-bg px-6 py-5 transition-colors hover:bg-surface">
                <span><span className="eyebrow block">{k}</span><span className="mt-1 block text-lg">{v}</span></span>
                <ArrowUpRight className="size-5 text-muted transition-colors group-hover:text-fg" />
              </a>
            ))}
          </Reveal>
        </div>

        <Reveal delay={120} className="rounded-[32px] border border-line bg-surface elev p-6 backdrop-blur md:p-10">
          {status === 'sent' ? (
            <PriceGuide selected={form.service} />
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5">
              <div className="flex items-center gap-3 rounded-2xl border border-line bg-bg px-4 py-3 text-[14px] text-fg-2">
                <Lock className="size-4 text-brand-2" /> Submit the form to unlock our price guide.
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className={label}>Your name *<input required name="name" autoComplete="name" value={form.name} onChange={update} className={field} /></label>
                <label className={label}>Company<input name="company" autoComplete="organization" value={form.company} onChange={update} className={field} /></label>
                <label className={label}>Work email *<input required type="email" name="email" autoComplete="email" value={form.email} onChange={update} className={field} /></label>
                <label className={label}>WhatsApp / phone<input name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={update} className={field} /></label>
                <label className={label}>Country<input name="country" autoComplete="country-name" value={form.country} onChange={update} className={field} /></label>
                <label className={label}>Budget
                  <select name="budget" value={form.budget} onChange={update} className={field}>
                    <option value="">Choose a range</option>
                    {BUDGETS.map((b) => <option key={b}>{b}</option>)}
                  </select>
                </label>
              </div>
              <fieldset>
                <legend className="mb-3 text-[14px] text-fg-2">What do you need?</legend>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((s) => (
                    <button
                      key={s.slug}
                      type="button"
                      aria-pressed={form.service === s.name}
                      onClick={() => setForm((f) => ({ ...f, service: f.service === s.name ? '' : s.name }))}
                      className={cn('rounded-full border px-4 py-2 text-[14px] transition-colors', form.service === s.name ? 'border-brand bg-brand text-white' : 'border-line-2 text-fg-2 hover:border-fg/40 hover:text-fg')}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </fieldset>
              <label className={label}>Project details *
                <textarea required name="message" rows={5} value={form.message} onChange={update} placeholder="What does your company do, and what should this project achieve?" className={field} />
              </label>
              <Button type="submit" className="w-full sm:w-auto sm:justify-self-start" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send & unlock price guide'}
              </Button>
              {!FORM_KEY && <p className="text-[13px] text-muted">Your message opens in WhatsApp, ready to send.</p>}
              {status === 'error' && <p role="alert" className="text-[15px] text-red-400">Something went wrong. Please email {SITE.email} or message us on WhatsApp.</p>}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
