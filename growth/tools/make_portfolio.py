"""Build growth/outreach/GOFS-Tech-Portfolio.pdf (2 A4 pages) for outreach emails.

Usage: python3 growth/tools/make_portfolio.py
Edit COLUMNS / STEPS / PROJECTS below, then run again.
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'growth/outreach/GOFS-Tech-Portfolio.pdf'
W, H, P = 1240, 1754, 90
AVENIR = '/System/Library/Fonts/Avenir Next.ttc'
SERIF = '/System/Library/Fonts/Supplemental/Georgia Italic.ttf'
FG, FG2, MUTED, BRAND, LINE = '#0b0d12', '#4a4c52', '#8a8a86', '#2b59ff', '#e6e4de'

COLUMNS = [
    ('Build', ['Company websites', 'E-commerce stores', 'Custom software & web apps', 'Mobile apps']),
    ('Automate', ['WhatsApp & website AI assistants', 'Lead follow-up automation', 'Invoice & document automation', 'Voice-command tools']),
    ('Create', ['Video production & reels', 'Instagram management', 'Brand identity & logos', 'Social & print design']),
]
STEPS = ['Free 30-min call', 'Fixed written proposal in 48h', 'Design approval, weekly demos', 'Launch, handover, support']
PROJECTS = [
    ('rituals', 'Reverse Rituals', 'D2C store + admin dashboard', 'reverserituals.in'),
    ('fitz1', 'FITZ1', 'Premium D2C fitness store', 'fitz1.in'),
    ('aimaire', 'Aimaire Inc', 'Corporate site, commercial interiors', 'aimaireinc.com'),
    ('nancy', 'Nancy Equipments', 'Catalogue site, kitchen manufacturer', 'nancyequipments.in'),
]


def font(size, weight='demi'):
    return ImageFont.truetype(AVENIR, size, index={'bold': 0, 'demi': 2, 'medium': 5, 'regular': 7}[weight])


def serif(size):
    return ImageFont.truetype(SERIF, size)


def para(d, xy, text, fnt, fill, width, gap=1.4):
    x, y = xy
    line = ''
    lines = []
    for word in text.split():
        test = f'{line} {word}'.strip()
        if d.textlength(test, font=fnt) <= width:
            line = test
        else:
            lines.append(line)
            line = word
    lines.append(line)
    for ln in lines:
        d.text((x, y), ln, font=fnt, fill=fill)
        y += int(fnt.size * gap)
    return y


def page():
    im = Image.new('RGB', (W, H), '#fafaf7')
    glow = Image.new('RGB', (W, H), '#fafaf7')
    ImageDraw.Draw(glow).ellipse([650, -300, 1500, 450], fill='#cfdaff')
    im = Image.blend(im, glow.filter(ImageFilter.GaussianBlur(150)), 0.9)
    d = ImageDraw.Draw(im)
    logo = Image.open(ROOT / 'src/assets/gofs-logo.png').convert('RGBA')
    logo.thumbnail((50, 50))
    im.paste(logo, (P, P), logo)
    d.text((P + 66, P + 6), 'GOFS Tech', font=font(32), fill=FG)
    d.text((W - P, P + 10), 'gofstech.in', font=font(26, 'medium'), fill=MUTED, anchor='ra')
    d.line([(P, H - 120), (W - P, H - 120)], fill=LINE, width=2)
    d.text((P, H - 95), 'admin@gofstech.in  ·  WhatsApp +91 63742 70471  ·  gofstech.in/book', font=font(24, 'medium'), fill=FG2)
    return im, d


def page_one():
    im, d = page()
    d.text((P, 300), 'Build. Automate.', font=font(104), fill=FG)
    d.text((P, 420), 'Create.', font=serif(116), fill=BRAND)
    para(d, (P, 590), 'A digital studio from India for ambitious companies worldwide. One team for your website, software, AI agents, videos and Instagram — planned together, so everything works as one growth engine.', font(32, 'medium'), FG2, W - 2 * P)
    cw = (W - 2 * P - 60) // 3
    y0 = 860
    for i, (title, items) in enumerate(COLUMNS):
        x = P + i * (cw + 30)
        d.rounded_rectangle([x, y0, x + cw, y0 + 500], radius=28, fill='#ffffff', outline=LINE, width=2)
        d.text((x + 32, y0 + 32), f'0{i + 1}', font=font(24), fill=BRAND)
        d.text((x + 32, y0 + 70), title, font=font(48), fill=FG)
        y = y0 + 160
        for item in items:
            y = para(d, (x + 32, y), item, font(26, 'medium'), FG2, cw - 64, 1.3) + 22
    d.text((P, 1430), 'HOW WE WORK', font=font(24), fill=MUTED)
    sw = (W - 2 * P) // 4
    for i, step in enumerate(STEPS):
        x = P + i * sw
        d.text((x, 1475), f'0{i + 1}', font=serif(54), fill=BRAND)
        para(d, (x, 1545), step, font(26, 'medium'), FG, sw - 30, 1.3)
    return im


def page_two():
    im, d = page()
    d.text((P, 230), 'Selected work', font=font(80), fill=FG)
    d.text((P, 335), 'All projects are live — open them on your phone.', font=font(30, 'medium'), fill=FG2)
    cw = (W - 2 * P - 40) // 2
    ch = int(cw * 0.58)
    for i, (img, name, desc, url) in enumerate(PROJECTS):
        x = P + (i % 2) * (cw + 40)
        y = 420 + (i // 2) * (ch + 200)
        shot = Image.open(ROOT / f'src/assets/img/{img}.webp').convert('RGB')
        shot = shot.resize((cw, int(cw * shot.height / shot.width))).crop((0, 0, cw, ch))
        mask = Image.new('L', (cw, ch), 0)
        ImageDraw.Draw(mask).rounded_rectangle([0, 0, cw, ch], radius=24, fill=255)
        im.paste(shot, (x, y), mask)
        d.text((x, y + ch + 22), name, font=font(36), fill=FG)
        d.text((x, y + ch + 72), desc, font=font(25, 'medium'), fill=FG2)
        d.text((x, y + ch + 110), url, font=font(25), fill=BRAND)
    d.rounded_rectangle([P, 1440, W - P, 1590], radius=32, fill='#0b0d12')
    d.text((P + 50, 1478), 'Book a free 30-minute call', font=font(44), fill='#ffffff')
    d.text((P + 50, 1536), 'gofstech.in/book  ·  times shown in your own time zone', font=font(28, 'medium'), fill='#aab4d6')
    return im


if __name__ == '__main__':
    OUT.parent.mkdir(parents=True, exist_ok=True)
    first, second = page_one(), page_two()
    first.save(OUT, save_all=True, append_images=[second], resolution=150)
    print(f'Wrote {OUT}')
