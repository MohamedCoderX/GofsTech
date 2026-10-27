"""Render an Instagram carousel (1080x1350 PNGs) in the GOFS Tech brand style.

Usage:
    python3 growth/tools/make_carousel.py growth/posts/day-02/slides.json

slides.json:
{
  "slides": [
    {"kind": "cover", "kicker": "Website tips", "title": "Customers leave your website in", "accent": "5 seconds.", "body": "Here are 5 reasons why."},
    {"kind": "point", "num": "01", "title": "It loads too slowly", "body": "...", "fix": "..."},
    {"kind": "list", "title": "Quick check", "items": ["...", "..."]},
    {"kind": "cta", "title": "Want a free review?", "accent": "Comment AUDIT", "body": "..."}
  ]
}
Images are written next to slides.json as slide-01.png, slide-02.png, ...
"""
import json
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

W, H = 1080, 1350
PAD = 96
BG = '#07080a'
FG = '#f2efe8'
FG2 = '#b9b6af'
MUTED = '#77756f'
BRAND = '#6b8fff'
LINE = '#14171d'

ROOT = Path(__file__).resolve().parents[2]
LOGO = ROOT / 'src/assets/gofs-logo.png'
AVENIR = '/System/Library/Fonts/Avenir Next.ttc'
SERIF = '/System/Library/Fonts/Supplemental/Georgia Italic.ttf'


def font(size, weight='demi'):
    index = {'bold': 0, 'demi': 2, 'medium': 5, 'regular': 7}[weight]
    return ImageFont.truetype(AVENIR, size, index=index)


def serif(size):
    return ImageFont.truetype(SERIF, size)


def wrap(draw, text, fnt, width):
    lines, line = [], ''
    for word in text.split():
        test = f'{line} {word}'.strip()
        if draw.textlength(test, font=fnt) <= width:
            line = test
        else:
            lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


def text_block(draw, xy, text, fnt, fill, width, gap=1.18):
    x, y = xy
    for ln in wrap(draw, text, fnt, width):
        draw.text((x, y), ln, font=fnt, fill=fill)
        y += int(fnt.size * gap)
    return y


def base(index, total, glow_at='top'):
    img = Image.new('RGB', (W, H), BG)
    glow = Image.new('RGB', (W, H), BG)
    g = ImageDraw.Draw(glow)
    if glow_at == 'top':
        g.ellipse([W * 0.35, -500, W * 1.5, 450], fill='#1c3590')
    else:
        g.ellipse([-300, H - 450, W * 0.8, H + 400], fill='#1c3590')
    img = Image.blend(img, glow.filter(ImageFilter.GaussianBlur(160)), 0.85)
    d = ImageDraw.Draw(img)
    for x in range(0, W, 90):
        d.line([(x, 0), (x, H)], fill=LINE)
    for y in range(0, H, 90):
        d.line([(0, y), (W, y)], fill=LINE)

    logo = Image.open(LOGO).convert('RGBA')
    logo.thumbnail((46, 46))
    img.paste(logo, (PAD, 78), logo)
    d.text((PAD + 62, 82), 'GOFS Tech', font=font(30, 'demi'), fill=FG)
    d.text((W - PAD, 86), f'{index:02d} / {total:02d}', font=font(26, 'medium'), fill=MUTED, anchor='ra')

    d.line([(PAD, H - 130), (W - PAD, H - 130)], fill='#22252c', width=2)
    d.text((PAD, H - 100), 'gofstech.in', font=font(26, 'medium'), fill=MUTED)
    if index < total:
        d.text((W - PAD, H - 100), 'Swipe for more', font=font(26, 'demi'), fill=BRAND, anchor='ra')
    else:
        d.text((W - PAD, H - 100), '@gofs_tech', font=font(26, 'demi'), fill=BRAND, anchor='ra')
    return img, d


def cover(s, i, n):
    img, d = base(i, n)
    y = 330
    if s.get('kicker'):
        d.text((PAD, y), s['kicker'].upper(), font=font(28, 'demi'), fill=BRAND)
        y += 80
    y = text_block(d, (PAD, y), s['title'], font(104, 'demi'), FG, W - 2 * PAD, 1.05)
    if s.get('accent'):
        y = text_block(d, (PAD, y + 4), s['accent'], serif(112), BRAND, W - 2 * PAD, 1.05)
    if s.get('body'):
        text_block(d, (PAD, y + 50), s['body'], font(40, 'medium'), FG2, W - 2 * PAD, 1.35)
    return img


def point(s, i, n):
    img, d = base(i, n)
    d.text((PAD, 250), s['num'], font=serif(220), fill=BRAND)
    y = text_block(d, (PAD, 540), s['title'], font(80, 'demi'), FG, W - 2 * PAD, 1.08)
    y = text_block(d, (PAD, y + 36), s['body'], font(40, 'medium'), FG2, W - 2 * PAD, 1.4)
    if s.get('fix'):
        top = y + 50
        lines = wrap(d, s['fix'], font(38, 'medium'), W - 2 * PAD - 80)
        bottom = top + 100 + len(lines) * 52
        d.rounded_rectangle([PAD, top, W - PAD, bottom], radius=32, fill='#12151c', outline='#2a3350', width=2)
        d.text((PAD + 40, top + 34), 'THE FIX', font=font(26, 'demi'), fill=BRAND)
        yy = top + 80
        for ln in lines:
            d.text((PAD + 40, yy), ln, font=font(38, 'medium'), fill=FG)
            yy += 52
    return img


def checklist(s, i, n):
    img, d = base(i, n)
    y = text_block(d, (PAD, 260), s['title'], font(88, 'demi'), FG, W - 2 * PAD, 1.05)
    y += 50
    for item in s['items']:
        d.rounded_rectangle([PAD, y, PAD + 52, y + 52], radius=14, outline=BRAND, width=4)
        yy = text_block(d, (PAD + 84, y + 2), item, font(42, 'medium'), FG, W - 2 * PAD - 84, 1.3)
        y = max(yy, y + 60) + 34
    return img


def cta(s, i, n):
    img, d = base(i, n, glow_at='bottom')
    y = text_block(d, (PAD, 330), s['title'], font(92, 'demi'), FG, W - 2 * PAD, 1.05)
    if s.get('accent'):
        y = text_block(d, (PAD, y + 10), s['accent'], serif(110), BRAND, W - 2 * PAD, 1.05)
    if s.get('body'):
        y = text_block(d, (PAD, y + 50), s['body'], font(40, 'medium'), FG2, W - 2 * PAD, 1.4)
    d.rounded_rectangle([PAD, y + 60, PAD + 520, y + 160], radius=50, fill='#3f6fff')
    d.text((PAD + 260, y + 110), s.get('button', 'Start a project'), font=font(36, 'demi'), fill='#ffffff', anchor='mm')
    return img


RENDER = {'cover': cover, 'point': point, 'list': checklist, 'cta': cta}


def main(path):
    spec = json.loads(Path(path).read_text())
    slides = spec['slides']
    out = Path(path).parent
    for i, s in enumerate(slides, 1):
        RENDER[s['kind']](s, i, len(slides)).save(out / f'slide-{i:02d}.png', optimize=True)
    print(f'Wrote {len(slides)} slides to {out}')


if __name__ == '__main__':
    main(sys.argv[1])
