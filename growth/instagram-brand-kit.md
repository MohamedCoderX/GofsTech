# Instagram Brand Kit — new GOFS Tech look (Oct 2026)

This replaces the bio and visual rules in `instagram-audit-and-strategy.md`.
The Instagram must look exactly like the new website: dark, premium, calm, with one blue accent.

---

## 1. Name field (Instagram search uses this — 64 characters max)

Pick one:

- `GOFS Tech | Software, AI & Video Studio`
- `GOFS Tech | Web, AI Agents & Content`
- `GOFS Tech | Websites · AI · Reels`

Username stays **@gofs_tech**.

## 2. Bio (150 characters max) — no prices

**Option A — studio (recommended)**
```
Build. Automate. Create.
Websites, AI agents, video & Instagram for ambitious brands
India → Worldwide
Comment AUDIT for a free review 👇
```

**Option B — results-focused**
```
We build websites, AI agents & content that bring clients
Software · Automation · Reels · Branding
India + worldwide · Start a project 👇
```

**Option C — founder voice**
```
Mohamed here 👋 We build, automate & create for brands
Websites · AI agents · Video · Instagram
Clients in India & abroad · DM "START"
```

**Link:** `https://www.gofstech.in/contact` — this goes straight to the form that unlocks the price guide.

Professional account settings:
- Category: **Software company** (or "Digital creator" if you mainly post video).
- Contact buttons: **Email** (admin@gofstech.in) and **WhatsApp**.

## 3. Highlights (5 covers, same style)

Make covers with a black background (#07080A), the white/blue G logo or a thin blue line icon, and one word:

| Highlight | What goes in it |
|---|---|
| **Work** | Screen recordings of FITZ1, Reverse Rituals, Aimaire, Nancy… |
| **Process** | How a project runs: call → proposal → design → launch |
| **AI** | Demos of the WhatsApp bot, the Telegram voice-stock bot and auto emails |
| **Create** | Reels, edits and designs you made (your own content counts) |
| **Start** | How to contact you, what to send, and the website link |

Do **not** make a "Prices" highlight. Prices are now shared only after people send details.

## 4. Colours (same as the website)

| Use | Colour | Hex |
|---|---|---|
| Background | Near-black | `#07080A` |
| Cards / panels | Dark grey | `#121419` |
| Main text | Warm white | `#F2EFE8` |
| Second text | Soft grey | `#B9B6AF` |
| Accent (one only) | GOFS blue | `#3F6FFF` / light `#6B8FFF` |
| Rare highlight | Sand | `#D8C6A3` |

Rules:
- Every post uses the dark background and **only one** accent colour.
- No rainbow gradients, no stock "AI robot" images, no neon.
- Real screenshots and real footage beat generated pictures every time.

## 5. Fonts

- Headlines: **Inter Tight** (semi-bold). In Canva: "Inter" bold is fine.
- Accent word: **Instrument Serif Italic** (Canva: "Playfair Display Italic" is close).
- Body: **Inter**.

One serif-italic accent word per slide, like the website: *create*, *5 seconds*, *connected*.

## 6. Carousel template (1080 × 1350)

Run this to turn any post's text into ready-to-upload images:

```bash
python3 growth/tools/make_carousel.py growth/posts/day-02/slides.json
```

`growth/posts/day-02/` already has all 8 finished slides. To make a new post, copy `slides.json` into a new folder (for example `growth/posts/day-06/`), change the text and run the command.

Slide types: `cover` (hook), `point` (numbered tip + fix), `list` (checklist), `cta` (last slide).

## 7. Reels (9:16, 1080 × 1920)

- **First 1.5 seconds:** big white text on a dark background, or your face saying the hook. No logo intro (cut all the "G logo" animation reels).
- **Captions burned in:** white Inter Bold, with the key word in blue.
- **Length:** 15–40 seconds.
- **End frame:** dark background, "gofstech.in" and "Comment AUDIT".
- **Music:** low volume; your voice matters more.

Reel ideas that show the new services:

1. **"We built this store in 3 weeks"** — scroll the FITZ1 site on a phone, with a voiceover of 3 decisions you made.
2. **"This bot replies at 2am"** — a screen recording of the WhatsApp AI assistant answering a demo clinic question.
3. **"Phone video → brand reel"** — show raw phone footage, then the edited reel (proof for the video service).
4. **"Same brand, before and after"** — an old logo or post, then your redesign (proof for branding).
5. **"Website speed test live"** — run PageSpeed on a client site on screen.

## 8. Change to the 30-day calendar

Day 4 ("what ₹14,999 vs ₹34,999 gets you") **is replaced**, because prices are now private.
New Day 4 is in `30-day-content-calendar.md`: **"What a website project actually includes"**. It teaches what is inside a project, then ends with "DM START and we'll send the price guide."

Anywhere else the calendar or templates mention a price, replace it with:
> "Send us your details and we'll share our price guide and a fixed proposal."

## 9. Your new grid (first 9 posts)

Post in this order so the profile looks premium straight away:

| Row | Left | Middle | Right |
|---|---|---|---|
| 1 | Reel: founder story (Day 1) | Carousel: 5 reasons customers leave (Day 2) | Reel: FITZ1 build (Day 3) |
| 2 | Carousel: what a project includes (Day 4) | Reel: 2am WhatsApp bot (Day 5) | Carousel: our process (Day 6) |
| 3 | Reel: speed test (Day 7) | Carousel: "Build. Automate. Create." intro | Reel: phone video → brand reel |

Archive the old AI poster ads before Day 1 (Archive, don't delete), so the grid starts clean.
