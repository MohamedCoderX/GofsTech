---
name: gofs-daily
description: GOFS Tech daily marketing pack. Use when the founder opens a chat with "hi", "good morning", "today", "daily" or asks for today's post, reel, carousel, story, comments, emails or WhatsApp leads. Produces the day's Instagram content (rendered carousel or reel script), story frames, captions, keywords, comment targets, reach checklist, and a fresh batch of outreach emails and WhatsApp messages to real businesses.
---

# GOFS Tech — daily pack ("hi" in the morning)

The founder (Mohamed, basic English) says "hi" each morning. Reply with today's pack — short, simple English, everything copy-paste ready. Save every file under `growth/daily/YYYY-MM-DD/` and log the day in `growth/daily/log.md` (create if missing) so tomorrow continues where today stopped.

## Read first
- `growth/daily/log.md` — what was posted and which leads were already contacted (never contact a business twice; never repeat a post).
- `growth/instagram-brand-kit.md` — name, colours, fonts, rules. `growth/30-day-content-calendar.md` — follow the next unused day; after day 30 write new ideas in the same pillars.
- `growth/client-outreach-playbook.md` and `growth/outreach/` — templates, niches, legal rules.
- Services and real projects: `src/data/services.js`, `src/data/projects.js`. Never invent clients, results, numbers or testimonials.

## The pack (in this order)

1. **Today's post** — one of:
   - Carousel: write `slides.json` and render with `python3 growth/tools/make_carousel.py growth/daily/<date>/slides.json`, then send the PNGs with SendUserFile.
   - Reel (9:16): hook (first 1.5 s), shot list he can film on his phone, on-screen text per shot, voiceover lines, 15–40 s. If he sent clips, offer to edit them (video-edit / ffmpeg).
   Rotate pillars: teach, show real work, behind-the-scenes, offer (offer at most 1 in 10). Use the ig-reel / ig-carousel / ig-caption skills and run ig-human on all text.
2. **Caption + keywords** — first line hooks before "…more"; 3–5 niche hashtags; 3 search keywords to use in caption and on-screen text; posting time (IST) for India and for UK/US.
3. **Stories (3–5 frames)** — frame-by-frame with a poll or question sticker and a tap to the post (ig-story).
4. **Comments to make (15 minutes)** — 8–10 real accounts to engage today (target clients in the chosen niche + peers), found by web search; a specific, human comment for each (ig-comment rules: no "great post", no links, no pitching). He posts them by hand.
5. **Reach checklist** — 5 bullets: reply to every comment in the first hour, share the post to story, send to 5 people who'd find it useful, reply to DMs, pin best post.
6. **Outreach** — 10 new real businesses (rotate niches/countries: D2C brands UAE/UK/US/AU, B2B manufacturers abroad, Indian D2C/manufacturers/clinics). For each: website, what they sell, 1–2 specific observations from their site, best-fit service, contact found on their own site, and a personal message:
   - Email (published business address only, e.g. info@/hello@) — subject + under 120 words + signature + opt-out line.
   - WhatsApp (only a number the business publishes for enquiries) — 2–4 lines, personal, no links in the first message, ask permission to send a short video audit.
   Write them to `growth/daily/<date>/outreach.md`. Never guess emails, never use personal emails of individuals, never use paid lists.
7. **Follow-ups due** — from the log, list leads contacted 4 and 9 days ago with the short follow-up text.

## Limits to state honestly
- He posts, comments, DMs and sends emails/WhatsApp himself. There is no Instagram, Gmail or WhatsApp connection; automated engagement breaks Instagram's terms.
- Do not send anything on his behalf. Recommend max 10–15 cold emails and ~10 WhatsApp messages a day from admin@gofstech.in and WhatsApp Business.

## End of the reply
One line: what to do first, and "Send me the numbers tomorrow (reach, saves, DMs, replies) and I'll adjust."
