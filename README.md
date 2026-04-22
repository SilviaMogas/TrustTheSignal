# Trust the Signal — by Silvia Mogas

Podcast landing page built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.
Newspaper aesthetic: blackletter masthead, serif typography, NYT-red accents, paper grain texture.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

---

## Editing content — all in one file

Everything editable lives in **`/lib/content.ts`**. No other file needs touching for copy changes.

### Silvia's bio

Find `host.bio` — it's an array of strings, one per paragraph:

```ts
export const host: Host = {
  name: "Silvia Mogas",
  bio: [
    "[PLACEHOLDER — Párrafo 1: quién es Silvia...]",  // ← replace this
    "[PLACEHOLDER — Párrafo 2: por qué nace el podcast...]",
    "[PLACEHOLDER — Párrafo 3: invitados y oyentes...]",
    "[PLACEHOLDER — Párrafo 4: cadencia + CTA newsletter...]",
  ],
  photo: "/images/silvia.jpg",  // ← add real photo here
};
```

### Substack URL

Search for `substackUrl` in `lib/content.ts`:

```ts
substackUrl: "[PONER_URL_SUBSTACK_AQUI]",  // ← replace with your Substack URL
```

### Subscriber count

```ts
substackCount: "4,200",  // ← update as it grows
```

### Social links

All social URLs are in `site.social` and `host.social` — replace `"#"` with real URLs.

### Adding or editing episodes

The `episodes` array in `lib/content.ts` is ordered top-to-bottom. **The first item is always the hero** (featured episode). Add new episodes at the top:

```ts
export const episodes: Episode[] = [
  {
    id: 7,           // increment
    number: 24,      // episode number
    slug: "my-new-episode",
    title: "The title as it appears on the landing page",
    subtitle: "One-line deck — shown in hover / metadata",
    description: "2–3 sentences shown in the hero or grid card.",
    guest: {
      name: "First Last",
      role: "Job Title",
      firm: "Firm Name",
      photo: "/images/guest-first-last.jpg",  // add to /public/images/
    },
    category: "MACRO",  // MACRO | EQUITIES | PRIVATE CREDIT | FED WATCH | FIXED INCOME | EMERGING MARKETS
    publishedAt: "MAY 6, 2026",
    duration: "52 MIN",
    listenUrls: {
      spotify: "https://open.spotify.com/...",
      apple: "https://podcasts.apple.com/...",
      youtube: "https://youtube.com/...",
    },
  },
  // ... existing episodes below
];
```

### Adding real photos

Drop photos into `/public/images/` and reference them in `content.ts`:

| Key in content.ts | File to add |
|---|---|
| `host.photo` | `/public/images/silvia.jpg` |
| `guest.photo` per episode | `/public/images/guest-[name].jpg` |

Photos are automatically rendered in black & white + halftone overlay via CSS.
Recommended: high-contrast portrait photos, minimum 800×1000px.

### Platform listen URLs

Update `site.listenUrls` in `content.ts`:

```ts
listenUrls: {
  spotify:     "https://open.spotify.com/show/...",
  apple:       "https://podcasts.apple.com/us/podcast/...",
  youtube:     "https://youtube.com/@...",
  amazon:      "https://music.amazon.com/podcasts/...",
  pocketcasts: "https://pocketcasts.com/...",
},
```

---

## Design system

Defined in `tailwind.config.ts`:

| Token | Value | Usage |
|---|---|---|
| `bg-paper` | `#f4f1ea` | Page background |
| `text-ink` | `#111111` | Primary text |
| `text-ink-red` | `#d62828` | Accents: kickers, dropcap, hover |
| `text-ink-gray` | `#6b6b6b` | Metadata, captions |
| `font-blackletter` | UnifrakturMaguntia | Masthead only |
| `font-display` | Playfair Display | Headlines, dropcap |
| `font-body` | Lora | Body text, captions |
| `font-meta` | Barlow Condensed | Kickers, labels, buttons |

---

## Deploy to Vercel

1. Push to GitHub
2. Connect repo at vercel.com/new
3. Framework preset: **Next.js** (auto-detected)
4. No environment variables needed — all content is in `lib/content.ts`
5. Hit **Deploy**

---

## Pre-launch checklist

- [ ] Replace all `[PLACEHOLDER]` strings in `host.bio`
- [ ] Set `substackUrl` in `site` and `site.social.substack`
- [ ] Set real `listenUrls` for all 5 platforms
- [ ] Set `site.social` links (Twitter/X, LinkedIn)
- [ ] Add `host.social` links
- [ ] Add photos to `/public/images/` for Silvia and each guest
- [ ] Update `substackCount` to real number
- [ ] Update `site.editionNumber` to current episode count
