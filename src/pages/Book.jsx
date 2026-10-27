import { useEffect, useMemo, useState } from 'react';
import { CalendarCheck, CalendarPlus, Clock, Globe2, Video } from 'lucide-react';
import { Button } from '../components/ui';
import { Reveal } from '../components/motion';
import { SITE, whatsappLink } from '../data/site';
import { SERVICES } from '../data/services';
import { cn } from '../utils/cn';

// Optional: a Cal.com / Calendly link (VITE_BOOKING_URL) replaces the built-in
// picker with a live calendar. Without it, visitors request a slot and we confirm.
const BOOKING_URL = import.meta.env.VITE_BOOKING_URL;
const FORM_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

// Availability in India time (IST, UTC+5:30). Late slots overlap UK/EU and US mornings.
const IST_HOURS = [10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21];
const DAYS_AHEAD = 12;
const IST_OFFSET_MIN = 330;

function buildDays(now) {
  const days = [];
  const istNow = new Date(now.getTime() + IST_OFFSET_MIN * 60000);
  for (let i = 0; days.length < DAYS_AHEAD && i < 20; i += 1) {
    const d = new Date(Date.UTC(istNow.getUTCFullYear(), istNow.getUTCMonth(), istNow.getUTCDate() + i));
    if (d.getUTCDay() === 0) continue; // Sunday off
    const slots = IST_HOURS
      .map((h) => new Date(d.getTime() + h * 3600000 - IST_OFFSET_MIN * 60000))
      .filter((t) => t.getTime() > now.getTime() + 3 * 3600000);
    if (slots.length) days.push({ key: d.toISOString().slice(0, 10), date: slots[0], slots });
  }
  return days;
}

const fmt = (date, opts, timeZone) => new Intl.DateTimeFormat('en-GB', { timeZone, ...opts }).format(date);
const gcalStamp = (d) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

const field = 'w-full rounded-2xl border border-line-2 bg-surface px-4 py-3.5 text-[16px] outline-none transition-colors placeholder:text-muted focus:border-brand';

function SlotPicker() {
  const [days, setDays] = useState(null);
  const [tz, setTz] = useState('UTC');
  const [day, setDay] = useState(null);
  const [slot, setSlot] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', company: '', topic: '', notes: '' });
  const [status, setStatus] = useState('idle');

  // Times depend on "now" and the visitor's zone, so they render after hydration.
  useEffect(() => {
    const list = buildDays(new Date());
    setTz(Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC');
    setDays(list);
    setDay(list[0]?.key ?? null);
  }, []);

  const current = useMemo(() => days?.find((d) => d.key === day), [days, day]);
  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const when = slot && {
    local: `${fmt(slot, { weekday: 'long', day: 'numeric', month: 'long' }, tz)}, ${fmt(slot, { hour: '2-digit', minute: '2-digit' }, tz)} (${tz})`,
    ist: `${fmt(slot, { weekday: 'short', day: 'numeric', month: 'short' }, 'Asia/Kolkata')}, ${fmt(slot, { hour: '2-digit', minute: '2-digit' }, 'Asia/Kolkata')} IST`,
  };

  const calendarLink = slot &&
    `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Call with GOFS Tech')}&dates=${gcalStamp(slot)}/${gcalStamp(new Date(slot.getTime() + 30 * 60000))}&details=${encodeURIComponent(`30-minute strategy call. We will send the video link by email.\n${SITE.url}`)}`;

  const onSubmit = async (e) => {
    e.preventDefault();
    const text = [
      `Meeting request: ${when.local}`,
      `India time: ${when.ist}`,
      `Name: ${form.name}${form.company ? ` (${form.company})` : ''}`,
      `Email: ${form.email}`,
      form.topic && `Topic: ${form.topic}`,
      form.notes,
    ].filter(Boolean).join('\n');

    if (!FORM_KEY) {
      window.open(whatsappLink(text), '_blank', 'noopener');
      setStatus('sent');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: FORM_KEY, subject: `Call booked: ${when.ist} — ${form.name}`, from_name: 'gofstech.in', message: text, ...form }),
      });
      setStatus((await res.json()).success ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div role="status" className="py-10 text-center">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-ok/10 text-ok"><CalendarCheck className="size-8" /></span>
        <h2 className="mt-6 text-[34px]">You’re booked in</h2>
        <p className="mx-auto mt-3 max-w-md text-fg-2">{when.local}. We will confirm and send the video-call link to <strong className="text-fg">{form.email}</strong> within a few hours.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={calendarLink} arrow={false}><CalendarPlus className="size-4" /> Add to Google Calendar</Button>
          <Button to="/work" variant="ghost" arrow={false}>See our work meanwhile</Button>
        </div>
      </div>
    );
  }

  if (!days) {
    return <div className="grid min-h-[420px] place-items-center text-muted" aria-busy="true">Loading available times…</div>;
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-[26px]">1. Pick a day</h2>
        <p className="flex items-center gap-2 text-sm text-muted"><Globe2 className="size-4" /> Times shown in {tz.replace('_', ' ')}</p>
      </div>
      <div className="mt-5 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">
        {days.map((d) => (
          <button
            key={d.key}
            type="button"
            onClick={() => { setDay(d.key); setSlot(null); }}
            aria-pressed={day === d.key}
            className={cn('flex w-[76px] shrink-0 flex-col items-center rounded-2xl border py-3 transition-colors', day === d.key ? 'border-brand bg-brand text-white' : 'border-line-2 bg-surface hover:border-fg/40')}
          >
            <span className={cn('text-xs uppercase tracking-wider', day === d.key ? 'text-white/80' : 'text-muted')}>{fmt(d.date, { weekday: 'short' }, tz)}</span>
            <span className="font-display text-2xl font-semibold">{fmt(d.date, { day: 'numeric' }, tz)}</span>
            <span className={cn('text-xs', day === d.key ? 'text-white/80' : 'text-muted')}>{fmt(d.date, { month: 'short' }, tz)}</span>
          </button>
        ))}
      </div>

      <h2 className="mt-9 text-[26px]">2. Pick a time</h2>
      <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-4">
        {current?.slots.map((t) => (
          <button
            key={t.toISOString()}
            type="button"
            onClick={() => setSlot(t)}
            aria-pressed={slot?.getTime() === t.getTime()}
            className={cn('rounded-xl border py-3 text-[15px] font-medium transition-colors', slot?.getTime() === t.getTime() ? 'border-brand bg-brand text-white' : 'border-line-2 bg-surface hover:border-fg/40')}
          >
            {fmt(t, { hour: '2-digit', minute: '2-digit' }, tz)}
          </button>
        ))}
      </div>

      {slot && (
        <div className="mt-9 grid gap-4 border-t border-line pt-9">
          <h2 className="text-[26px]">3. Your details</h2>
          <p className="rounded-2xl bg-brand/[0.07] px-4 py-3 text-[15px] text-fg"><strong>{when.local}</strong><span className="block text-sm text-muted">= {when.ist}</span></p>
          <div className="grid gap-4 sm:grid-cols-2">
            <input required name="name" placeholder="Your name *" autoComplete="name" value={form.name} onChange={update} className={field} aria-label="Your name" />
            <input required type="email" name="email" placeholder="Work email *" autoComplete="email" value={form.email} onChange={update} className={field} aria-label="Work email" />
            <input name="company" placeholder="Company" autoComplete="organization" value={form.company} onChange={update} className={field} aria-label="Company" />
            <select name="topic" value={form.topic} onChange={update} className={field} aria-label="Topic">
              <option value="">What is the call about?</option>
              {SERVICES.map((s) => <option key={s.slug}>{s.name}</option>)}
              <option>Not sure yet</option>
            </select>
          </div>
          <textarea name="notes" rows={3} placeholder="Anything we should know before the call?" value={form.notes} onChange={update} className={field} aria-label="Notes" />
          <Button type="submit" className="sm:justify-self-start" disabled={status === 'sending'}>{status === 'sending' ? 'Booking…' : 'Confirm booking'}</Button>
          {status === 'error' && <p role="alert" className="text-[15px] text-red-600">Something went wrong. Please message us on WhatsApp or email {SITE.email}.</p>}
        </div>
      )}
    </form>
  );
}

export default function Book() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="grid-lines absolute inset-0" />
      <div className="container-x relative grid gap-14 pb-24 pt-32 md:pt-40 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Reveal><p className="eyebrow">Book a call</p></Reveal>
          <Reveal delay={80}><h1 className="mt-6 text-[46px] md:text-[64px]">A 30-minute call. <span className="serif text-brand">Zero pressure.</span></h1></Reveal>
          <Reveal delay={160}><p className="mt-7 max-w-md text-lg text-fg-2">Tell us where your company is today and where you want it to be. You leave with honest advice and next steps — whether or not we work together.</p></Reveal>
          <Reveal delay={220} as="ul" className="mt-10 space-y-4 text-[16px]">
            <li className="flex items-center gap-3"><Clock className="size-5 text-brand" /> 30 minutes, free</li>
            <li className="flex items-center gap-3"><Video className="size-5 text-brand" /> Google Meet or Zoom — link sent by email</li>
            <li className="flex items-center gap-3"><Globe2 className="size-5 text-brand" /> Times shown in your own time zone</li>
            <li className="flex items-center gap-3"><CalendarCheck className="size-5 text-brand" /> Written proposal within 48 hours after the call</li>
          </Reveal>
        </div>
        <Reveal delay={120} className="min-w-0 rounded-[32px] border border-line bg-surface elev p-6 md:p-10">
          {BOOKING_URL ? (
            <iframe title="Book a call with GOFS Tech" src={BOOKING_URL} className="h-[720px] w-full rounded-2xl border-0" loading="lazy" />
          ) : (
            <SlotPicker />
          )}
        </Reveal>
      </div>
    </section>
  );
}
